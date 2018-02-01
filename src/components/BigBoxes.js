import React, { Component } from "react";
import { getVerticalPosition, getHorizontalPosition } from "./position-utils";

class BigBoxes extends Component {
  render() {
    const styles = this.styles();

    return (
      <div>
        {[1, 1, 1, 1, 1, 1, 1].map((item, index) => (
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
        width: 200,
        height: 100,
        backgroundColor: "#FFBC67",
        position: "absolute"
      }
    };
  };
}

export default BigBoxes;
