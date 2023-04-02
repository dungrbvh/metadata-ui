import { AnyAction } from "@reduxjs/toolkit";
import {
    GET_ANNOUNCEMENTS,
    CREATE_ANNOUNCEMENT,
    UPDATE_ANNOUNCEMENT,
    DELETE_ANNOUNCEMENT,
    SET_ACTIVE_ANNOUNCEMENT,
    CLEAR_ACTIVE_ANNOUNCEMENT
} from '../actions/creators/announcements';
import {AnnouncementState} from '../../types';


export const initialState: AnnouncementState = {
    retrieved: [],
    current: {}
}

export default (state = initialState, action: AnyAction) => {
    switch(action.type){
        case GET_ANNOUNCEMENTS: 
            return {
                ...state,
                retrieved: action.announcements
            };
        case CREATE_ANNOUNCEMENT:
            return {
                ...state
            };
        case UPDATE_ANNOUNCEMENT:
            return {
                ...state
            };
        case DELETE_ANNOUNCEMENT:
            return {
                ...state
            };
        case SET_ACTIVE_ANNOUNCEMENT:
            return {
                ...state, 
                current: action.annoucement
            };
        case CLEAR_ACTIVE_ANNOUNCEMENT:
            return {
                ...state,
                current: action.announcement
            };
        default:
            return state
    }
}