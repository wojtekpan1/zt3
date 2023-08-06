import React from "react";
import "./Radio5.css";

class Radio5 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`radio-11 ${className || ""}`}>
        <div className="border-2"></div>
      </div>
    );
  }
}

export default Radio5;
