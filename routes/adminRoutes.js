var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//SETUP

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

//REQUIRE DB MODELS

var Screen = require("../models/theatreModel");
var Row = require("../models/rowModel");
var Seat = require("../models/seatModel");

//ADD A SCREEN

router.post("/screens", async (req, res) => {
  //SCREEN DETAILS
  var screenData = {
    name: req.body.name,
    number: req.body.number,
    image: req.body.image,
    alpha: req.body.alpha
  };

  var findScreen = await Screen.findOne({ name: screenData.name })
    .populate({ path: "row" })
    .exec();

  if (findScreen) {
    let rowExist = false;
    //FIND IF THE ROW IS PRESENT OR NOT
    findScreen.row.forEach(row => {
      if (row.rowAlphabet == screenData.alpha) {
        rowExist = true;
      }
    });

    //ROW EXIST SEND ERROR RESPONSE
    if (rowExist) {
      res.send({
        error: "The Specified Row Already Exist ! Try with a different  row"
      });
    } else {
      //CREATE ROWS
      var row = new Row({
        rowAlphabet: screenData.alpha,
        number: screenData.number
      });


      try{
        //CREATE SEATS
      for (let i = 0; i < screenData.number; i++) {
        let newSeat = new Seat({
          seatNumber: i,
          reserved: false
        });

        row.seats.push(newSeat);
        await newSeat.save();
        await row.save();
      }

      findScreen.row.push(row);
      var savedScreen = await findScreen.save();
      res.send({success:"Rows Successfully Added to the Requested Screen "});
      }
      catch(ex)
      {
        res.send({error:"Sorry Try Again Later"});
      }

      
    }
  } else {
    var screen = new Screen({
      name: screenData.name,
      image: screenData.image
    });

    //CREATE ROWS
    var row = new Row({
      rowAlphabet: screenData.alpha,
      number: screenData.number
    });

    
  
    try
    {
          //CREATE SEATS
    for (let i = 0; i < screenData.number; i++) {
        let newSeat = new Seat({
          seatNumber: i,
          reserved: false
        });
  
        row.seats.push(newSeat);
        await newSeat.save();
        await row.save();
      }
        screen.row.push(row);
        var savedScreen = await screen.save();
        res.send({success:"Screen Succesfully Added"});
    }
    catch(ex)
    {
        res.send({error:"Sorry the requested screen is not added ! Try after sometime"})

    }

    
    
    res.status(200).send(foundScreen);
  }
});

//RESERVE TICKETS
router.post("/reserve", async (req, res) => {
  var screenName = req.params.screenName;
  var reserve = req.body.reserve;
  reserve.forEach(element => {
    Seat.findById(element, (err, seat) => {
      if (err) {
        console.log(err);
      } else {
        seat.reserved = true;
        seat.save((err, saved) => {
          if (err) {
            console.log(err);
          } else {
            console.log("successfully reserved");
          }
        });
      }
    });
  });
});

//GET ALL SCREENS
router.get("/screens", async (req, res) => {
  var foundScreen = await Screen.find({})
    .populate({ path: "row", populate: { path: "seats" } })
    .exec();
  res.send(foundScreen);
});

//GET SEATS OF A PARTICULAR SCREEN
router.get("/:screen", async (req, res) => {
  var screenName = req.params.screen;
  var foundScreen = await Screen.find({ name: screenName })
    .populate({
      path: "row",
      options: { sort: { rowAlphabet: 1 } },
      populate: { path: "seats" }
    })
    .exec();
  res.send(foundScreen);
});

module.exports = router;
