import uiReducer from '../reducers/uiReducer';

test('uiReducer should return initial state when no action is passed', () => {
  const state = uiReducer(undefined, {});
  expect(state).toEqual({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  });
});

test('uiReducer should handle DISPLAY_NOTIFICATION_DRAWER', () => {
  const state = uiReducer(undefined, { type: 'DISPLAY_NOTIFICATION_DRAWER' });
  expect(state.isNotificationDrawerVisible).toBe(true);
});