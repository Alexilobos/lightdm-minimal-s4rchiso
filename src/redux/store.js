import { createStore } from 'redux';
import DefaultProfile from '../assets/profile.png';

const initialStateUser = {
    name: "",
    session: "",
    icon: DefaultProfile
};
const reducerUser = (state = initialStateUser, action) => {
    if (action.type == "CHANGE_DEFAULT_USER"){
        return {
            ...state,
            name: action.name,
            session: action.session
        }
    }
    return state;
};

export default createStore(reducerUser);
