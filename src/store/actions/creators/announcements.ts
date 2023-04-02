export const GET_ANNOUNCEMENTS = 'GET_ANNOUNCEMENTS';
export const CREATE_ANNOUNCEMENT = 'CREATE_ANNOUNCEMENT';
export const UPDATE_ANNOUNCEMENT = 'UPDATE_ANNOUNCEMENT';
export const DELETE_ANNOUNCEMENT = 'DELETE_ANNOUNCEMENT';
export const SET_ACTIVE_ANNOUNCEMENT = 'SET_ACTIVE_ANNOUNCEMENT';
export const CLEAR_ACTIVE_ANNOUNCEMENT = 'CLEAR_ACTIVE_ANNOUNCEMENT';
import { Response, Announcement } from '../../../types';

export const getAnnouncementsCreator = (response: Response) => {
    return {
        type: GET_ANNOUNCEMENTS,
        announcements: response.getAnnouncements?.reverse()
    }
}

export const createAnnouncementsCreator = (response: Response) => {
    return {
        type: CREATE_ANNOUNCEMENT,
        announcement: response.createAnnouncement
    }
}

export const updateAnnouncementCreator = (response: Response) => {
    return {
        type: UPDATE_ANNOUNCEMENT,
        announcement: response.updateAnnouncement
    }
}


export const deleteAnnouncementCreator = (response: Response) => {
    return {
        type: DELETE_ANNOUNCEMENT,
        announcement: response.deleteAnnouncement
    }
}

export const setActiveAnnouncementCreator = (announcement: Announcement) => {
    if (!announcement) announcement = {}
    return {
        type: SET_ACTIVE_ANNOUNCEMENT,
        announcement
    }
}

export const clearActiveAnnouncementCreator = () => {
    return {
        type: CLEAR_ACTIVE_ANNOUNCEMENT,
        announcement: {}
    }
}
