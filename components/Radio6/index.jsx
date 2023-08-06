import React from "react";
import Radio5 from "../Radio5";
import "./Radio6.css";

class Radio6 extends React.Component {
  render() {
    const { labelpositionStart, className, radio5Props } = this.props;

    return (
      <div className={`radio-13 ${className || ""}`}>
        <div className="label-position-start-6 inputdefault">{labelpositionStart}</div>
        <Radio5 className={radio5Props.className} />
      </div>
    );
  }
}

export default Radio6;
