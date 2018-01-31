import React, { Component } from "react";
import { getVerticalPosition, getHorizontalPosition } from "./position-utils";

class SmallBoxes extends Component {
  render() {
    const styles = this.styles();

    return (
      <div>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(item => (
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
        width: 50,
        height: 50,
        backgroundColor: "#DA727E",
        position: "absolute"
      }
    };
  };
}

export default SmallBoxes;
