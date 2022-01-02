import randomHexColor from 'src/utils';
import { RANDOMIZE_FIRST_COLOR, RANDOMIZE_SECOND_COLOR } from '../actions';

const initialState = {
  firstColor: '#c970f1',
  secondColor: '#ff0f5f',
};

// 2 params state courant et action
const reducer = (state = initialState, action = {}) => {
  // en fonction du type de l'action, on viendra modifier le state
  switch (action.type) {
    case RANDOMIZE_FIRST_COLOR: {
      const firstColor = randomHexColor();
      document.documentElement.style.setProperty('--firstColor', `${firstColor}`);
      return {
        ...state,
      };
    }

    case RANDOMIZE_SECOND_COLOR: {
      const secondColor = randomHexColor();
      document.documentElement.style.setProperty('--secondColor', `${secondColor}`);
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default reducer;
