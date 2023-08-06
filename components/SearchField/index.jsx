import React from "react";
import Button2 from "../Button2";
import "./SearchField.css";

class SearchField extends React.Component {
  render() {
    const { label, placeholder, className, button2Props } = this.props;

    return (
      <div className={`search-field ${className || ""}`}>
        <div className="label inter-bold-black-20px">{label}</div>
        <div className="input-group">
          <div className="input">
            <div className="placeholder inputdefault">{placeholder}</div>
            <Button2 src={button2Props.src} className={button2Props.className} />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchField;
