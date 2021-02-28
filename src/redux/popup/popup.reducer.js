import TOGGLE_POPUP_HIDDEN from './popup.types';

const INITIAL_STATE_POPUP = {
  isHidden: true,
};

const popupReducer = (state = INITIAL_STATE_POPUP, action = {}) => {
  switch (action.type) {
    case TOGGLE_POPUP_HIDDEN:
      return { ...state, isHidden: !state.isHidden };
    default:
      return state;
  }
};

export default popupReducer;
