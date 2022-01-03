import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { randomizeFirstColor, randomizeSecondColor } from 'src/actions';

import './styles.scss';

export default function First({
  chromium,
}) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(randomizeFirstColor());
    dispatch(randomizeSecondColor());
  };
  return (
    <header
      className="box"
      onClick={onClick}
    >
      <h1
        className="box-title"
      >
        CSS
      </h1>
      <h2
        className="clickMe"
      >
        { chromium ? 'Click me' : 'You need Chrome for it to work'}
      </h2>
    </header>
  );
}

First.propTypes = {
  chromium: PropTypes.bool.isRequired,
};
