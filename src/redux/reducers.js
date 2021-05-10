import { combineReducers } from "redux";
import auth from "./auth/reducer"; 
import modal from "./modal/reducer";
import profile from "./profile/reducer";
import doctor from "./doctor/reducer";
import visit from "./visit/reducer";

const reducers = combineReducers({
    auth,
    modal,
    profile,
    doctor,
    visit,
});

export default reducers;