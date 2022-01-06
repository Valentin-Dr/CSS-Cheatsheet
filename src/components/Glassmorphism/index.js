import Tilt from 'react-tilt';
import './styles.scss';

export default function Glassmorphism() {
  return (
    <div
      className="glassContainer"
    >
      <div className="square" />
      <div className="square" />
      <div className="square" />
      <div className="square" />
      <div className="square" />
      <Tilt className="Tilt" options={{ scale: 1, max: 35, transition: false, speed: 0, reset: false }}>
      <div
        className="glassCard"
      >
        <div
          className="glassCardContent"
        >
          <h2
            className="glassTitle"
          >
            Glass
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, esse, impedit, quod aspernatur totam commodi debitis consequuntur nihil quas cupiditate vel quaerat molestias deleniti veritatis. Quaerat enim aperiam odit aliquid!
          </p>
          <a
            href="#"
            className="glassButton"
          >
            <span className="glassButtonText">BUTTON</span>
          </a>
        </div>
      </div>
      </Tilt>
    </div>
  );
}
