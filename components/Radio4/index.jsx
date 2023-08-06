import React from "react";
import Radio5 from "../Radio5";
import "./Radio4.css";

class Radio4 extends React.Component {
  render() {
    const { labelpositionStart, className, radio5Props } = this.props;

    return (
      <div className={`radio-8 ${className || ""}`}>
        <div className="label-position-start-4 inter-bold-electric-violet-12px">{labelpositionStart}</div>
        <Radio5 className={radio5Props.className} />
      </div>
    );
  }
}

export default Radio4;
