import React from "react";
import "./Button.css";

class Button extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <article className={`button-4 ${className || ""}`}>
        <div className="button-text buttondefault">{children}</div>
      </article>
    );
  }
}

export default Button;
