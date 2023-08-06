import React from "react";
import Radio2 from "../Radio2";
import "./Radio.css";

class Radio extends React.Component {
  render() {
    const { labelpositionStart, className, radio2Props } = this.props;

    return (
      <div className={`radio ${className || ""}`}>
        <div className="label-position-start inputdefault">{labelpositionStart}</div>
        <Radio2 className={radio2Props.className} />
      </div>
    );
  }
}

export default Radio;
