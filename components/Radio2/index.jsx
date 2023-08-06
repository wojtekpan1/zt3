import React from "react";
import "./Radio2.css";

class Radio2 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`radio-2 ${className || ""}`}>
        <div className="border"></div>
      </div>
    );
  }
}

export default Radio2;
