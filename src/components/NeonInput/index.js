import './styles.scss';

export default function NeonInput() {
  return (
    <div
      className="neonContainer"
    >
      <h2
        className="neonInput"
        contentEditable="true"
        spellCheck="false"
      >
        Type here
      </h2>
    </div>
  );
}
