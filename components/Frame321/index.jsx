import React from "react";
import "./Frame321.css";

class Frame321 extends React.Component {
  render() {
    const { image, className } = this.props;

    return (
      <div className={`frame-321 ${className || ""}`}>
        <img className="icon" src="/img/icon.svg" alt="Icon" />
        <img className="image" src={image} alt="image" />
      </div>
    );
  }
}

export default Frame321;
