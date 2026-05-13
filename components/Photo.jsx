export default function Photo({ src, alt, aspect, kenburns, hoverZoom, style, className = '', children, onClick }) {
  return (
    <div
      className={`photo${kenburns ? ' photo--kenburns' : ''}${hoverZoom ? ' photo--hover-zoom' : ''} ${className}`}
      style={{ aspectRatio: aspect, ...style }}
      onClick={onClick}
    >
      <img src={src} alt={alt || ''} loading="lazy" />
      {children}
    </div>
  );
}
