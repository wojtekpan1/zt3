import React from "react";
import "./ACTLogoWhiteTransparent3.css";

class ACTLogoWhiteTransparent3 extends React.Component {
  render() {
    const { src } = this.props;

    return (
      <div className="act-logo-white-transparent-1">
        <img className="act-logo-white-transparent-2" src={src} alt="ACT-logo-white-transparent" />
      </div>
    );
  }
}

export default ACTLogoWhiteTransparent3;
