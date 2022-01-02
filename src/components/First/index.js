import { useDispatch } from 'react-redux';
import { randomizeFirstColor, randomizeSecondColor } from 'src/actions';

import './styles.scss';

export default function First() {
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
        Click me
      </h2>
    </header>
  );
}
