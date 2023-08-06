import React from "react";
import Heading from "../Heading";
import "./BannerVariant3.css";

class BannerVariant3 extends React.Component {
  render() {
    const { actLogoWhiteSvg, headingProps } = this.props;

    return (
      <div className="banner-variant3">
        <div className="act-logo-white-svg" style={{ backgroundImage: `url(${actLogoWhiteSvg})` }}></div>
        <Heading>{headingProps.children}</Heading>
      </div>
    );
  }
}

export default BannerVariant3;
