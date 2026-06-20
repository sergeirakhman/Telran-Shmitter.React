import {CHANGE_AVATAR, CHANGE_USERNAME} from "../actions/userActions.js";

const initialState = {
        avatar: 'https://gravatar.com/avatar/000?d=monsterid',
        name: 'Test'
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_USERNAME:
            return {... state, name: action.payload || state.user.username};
            case CHANGE_AVATAR:
                console.log(state.avatar)
                return {... state, avatar: action.payload || state.user.avatar};
        default:
            return state;
    }
}