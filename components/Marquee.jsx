export default function Marquee({ words }) {
  const item = (
    <span>
      {words.map((w, i) => (
        <span key={i}>{w}<i className="dot" /></span>
      ))}
    </span>
  );
  return (
    <div className="marquee">
      <div className="marquee__track">
        {item}{item}
      </div>
    </div>
  );
}
