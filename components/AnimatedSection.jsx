export default function AnimatedSection({ children, className, id }) {
  return (
    <div className={className} id={id}>
      {children}
    </div>
  );
}
