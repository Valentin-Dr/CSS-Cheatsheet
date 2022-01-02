import { useDispatch } from 'react-redux';
import { randomizeFirstColor, randomizeSecondColor } from 'src/actions';

import './styles.scss';

export default function First() {
  // const dispatch = useDispatch();

  // const onClick = () => {
  //   dispatch(randomizeFirstColor());
  //   dispatch(randomizeSecondColor());
  // };
  return (
    <section
      className="wavy"
    >
      <header
        className="cup"
      />
      <div
        className="wave wave1"
      />
      <div
        className="wave wave2"
      />
      <div
        className="wave wave3"
      />
      <div
        className="wave wave4"
      />
      <div
        className="wave wave5"
      />
    </section>
  );
}
