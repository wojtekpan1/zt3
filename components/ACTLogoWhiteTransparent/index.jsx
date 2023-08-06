import React from "react";
import "./ACTLogoWhiteTransparent.css";

class ACTLogoWhiteTransparent extends React.Component {
  render() {
    const { src } = this.props;

    return <div className="act-logo-white-transparent" style={{ backgroundImage: `url(${src})` }}></div>;
  }
}

export default ACTLogoWhiteTransparent;
