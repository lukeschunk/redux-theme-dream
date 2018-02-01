import React, { Component } from "react";
import { getVerticalPosition, getHorizontalPosition } from "./position-utils";

class TinyBoxes extends Component {
  render() {
    const styles = this.styles();

    return (
      <div>
        {[
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ].map((item, index) => (
          <div
            key={index}
            style={{
              ...styles.box,
              top: getVerticalPosition(),
              left: getHorizontalPosition()
            }}
          />
        ))}
      </div>
    );
  }

  styles = () => {
    return {
      box: {
        width: 20,
        height: 20,
        backgroundColor: "#455C7B",
        position: "absolute"
      }
    };
  };
}

export default TinyBoxes;
