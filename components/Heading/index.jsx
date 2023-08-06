import React from "react";
import "./Heading.css";

class Heading extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="heading">
        <h1 className="heading-1 headingh3">{children}</h1>
      </div>
    );
  }
}

export default Heading;
