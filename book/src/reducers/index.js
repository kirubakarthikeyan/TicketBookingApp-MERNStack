import {combineReducers} from 'redux';

import addScreen    from './addScreen';
import getScreen from './getScreen';
import allScreens from './allScreens';



export default combineReducers({
screens:addScreen,
tickets:getScreen,
allScreens:allScreens
});