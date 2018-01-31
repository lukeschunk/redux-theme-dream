import React, { Component } from "react";
import { getVerticalPosition, getHorizontalPosition } from "./position-utils";

class BigBoxes extends Component {
  render() {
    const styles = this.styles();

    return (
      <div>
        {[1, 1, 1, 1, 1, 1, 1].map(item => (
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
        width: 200,
        height: 100,
        backgroundColor: "#455C7B",
        position: "absolute"
      }
    };
  };
}

export default BigBoxes;
