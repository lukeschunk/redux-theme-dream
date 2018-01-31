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
        ].map(item => (
          <div
            key={getVerticalPosition()}
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
        backgroundColor: "#FFBC67",
        position: "absolute"
      }
    };
  };
}

export default TinyBoxes;
