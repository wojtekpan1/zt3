import React from "react";
import "./Button2.css";

class Button2 extends React.Component {
  render() {
    const { src, className } = this.props;

    return (
      <div className={`button-5 ${className || ""}`}>
        <img className="button-icon" src={src} alt="Button Icon" />
      </div>
    );
  }
}

export default Button2;
