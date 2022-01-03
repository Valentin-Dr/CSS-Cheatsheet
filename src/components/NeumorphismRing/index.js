import { useDispatch } from 'react-redux';
import { randomizeNeumRing } from '../../actions';

import './styles.scss';

export default function NeumorphismRing() {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(randomizeNeumRing());
  };
  return (
    <div
      className="neumorphismContainer"
    >
      <div
        className="neumorphRing"
        onClick={onClick}
      >
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
