import {
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGOUT,
  } from './actionTypes';
  
  export const displayNotificationDrawer = () => ({
    type: DISPLAY_NOTIFICATION_DRAWER,
  });
  
  export const hideNotificationDrawer = () => ({
    type: HIDE_NOTIFICATION_DRAWER,
  });
  
  export const loginSuccess = () => ({
    type: LOGIN_SUCCESS,
  });
  
  export const logout = () => ({
    type: LOGOUT,
  });