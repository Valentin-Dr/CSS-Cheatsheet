import './styles.scss';
import { a3, b3, d3, e3, f3, g3 } from 'src/assets/piano';

export default function ThreeDStairsPiano() {
  const notes = [d3, e3, f3, g3, b3, a3];
  const onHover = (e) => {
    if (e.target.classList.contains('step')) {
      for (let i = 0; i < notes.length; i++) {
        if (e.target.classList.contains(`${i}`)) {
          const audio = new Audio(notes[i]);
          audio.play();
        }
      }
    }
  };

  return (
    <div className="stairsContainer">
      <div className="stairs">
        <div className="base" />
        <div className="step 0" onMouseEnter={onHover}>
          <i />
          <i />
        </div>
        <div className="step 1" onMouseEnter={onHover}>
          <i />
          <i />
        </div>
        <div className="step 2" onMouseEnter={onHover}>
          <i />
          <i />
        </div>
        <div className="step 3" onMouseEnter={onHover}>
          <i />
          <i />
        </div>
        <div className="step 4" onMouseEnter={onHover}>
          <i />
          <i />
        </div>
        <div className="step 5" onMouseEnter={onHover}>
          <i />
          <i />
        </div>
      </div>
    </div>
  );
}
