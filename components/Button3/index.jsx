import React from "react";
import "./Button3.css";

class Button3 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`button-7 ${className || ""}`}>
        <div className="button-text-2 buttonlarge">{children}</div>
      </div>
    );
  }
}

export default Button3;
