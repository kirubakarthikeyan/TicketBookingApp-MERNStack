//ADD  SCREEN

router.post("/screens",async (req,res)=>
{
    //SCREEN DETAILS
    var screenData = {
        name:req.body.name,
        number:req.body.number,
        image:req.body.image,
        alpha:req.body.alpha
    }
    var generatedSeats=[];

    var find = await Screen.find({name:screenData.name});




    console.log(find)
    if(find!==[])
    {
        let row  = new Row({
            rowAlphabet:screenData.alpha,
        number:screenData.number
        });
    
        for(let i=0;i<screenData.number;i++)
        {
            let newSeat=new Seat({
                seatNumber:i,
                reserved:false
            });
            
             row.seats.push(newSeat);
             await newSeat.save();
             await row.save();
            
    
        }

   

        find[0].row.push(row);
        
        var savedScreen = await find[0].save();
        var foundScreen = await Screen.find({}).populate({path:"row",populate:{path:"seats"}}).exec();
        console.log(foundScreen);
        res.status(200).send(foundScreen);
    }

  else
  {

    let row  = new Row({
        rowAlphabet:screenData.alpha,
    number:screenData.number
    });

    for(let i=0;i<screenData.number;i++)
    {
        let newSeat=new Seat({
            seatNumber:i,
            reserved:false
        });
        
         row.seats.push(newSeat);
         await newSeat.save();
         await row.save();
        

    }
    var screen =  new Screen({
        name:screenData.name,
        image:screenData.image
    });

    //kts

    screen.row.push(row);
   
    var savedScreen = await screen.save();
    var foundScreen = await Screen.find({}).populate({path:"row",populate:{path:"seats"}}).exec();
    console.log(foundScreen);
    res.status(200).send(foundScreen);
    
  }



      
    });