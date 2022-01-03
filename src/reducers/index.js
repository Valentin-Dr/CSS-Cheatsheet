import randomHexColor from 'src/utils';
import { RANDOMIZE_FIRST_COLOR, RANDOMIZE_SECOND_COLOR, RANDOMIZE_NEUM_RING_COLORS } from '../actions';

const initialState = {
  firstColor: '#c970f1',
  secondColor: '#ff0f5f',
  neumRingColorOne: '#e5ff00',
  neumRingColorTwo: '#ff00e0',
};

// 2 params state courant et action
const reducer = (state = initialState, action = {}) => {
  // en fonction du type de l'action, on viendra modifier le state
  const randomColor = randomHexColor();
  const randomSecondColor = randomHexColor();
  switch (action.type) {
    case RANDOMIZE_FIRST_COLOR: {
      document.documentElement.style.setProperty('--firstColor', `${randomColor}`);
      return {
        ...state,
      };
    }

    case RANDOMIZE_SECOND_COLOR: {
      document.documentElement.style.setProperty('--secondColor', `${randomColor}`);
      return {
        ...state,
      };
    }

    case RANDOMIZE_NEUM_RING_COLORS: {
      document.documentElement.style.setProperty('--firstNeumColor', `${randomColor}`);
      document.documentElement.style.setProperty('--secondNeumColor', `${randomSecondColor}`);
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default reducer;
