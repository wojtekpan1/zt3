import React from "react";
import Radio2 from "../Radio2";
import "./Radio3.css";

class Radio3 extends React.Component {
  render() {
    const { labelpositionStart, className, radio2Props } = this.props;

    return (
      <div className={`radio-6 ${className || ""}`}>
        <div className="label-position-start-2 inter-bold-electric-violet-12px">{labelpositionStart}</div>
        <Radio2 className={radio2Props.className} />
      </div>
    );
  }
}

export default Radio3;
