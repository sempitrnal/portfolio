const Button = ({ children, sendTo, email }) => {
  return email ? (
    <a href={`mailto:${sendTo}`} className="nb-btn">
      {children}
    </a>
  ) : (
    <button className="nb-btn">{children}</button>
  );
};

export default Button;
