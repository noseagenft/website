import "./Button.css";

export const Button = ({ children, ...props }) => (
  <button className="Button" {...props}>
    {children}
  </button>
);
