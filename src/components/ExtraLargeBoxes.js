import React, { Component } from "react";
import { getVerticalPosition, getHorizontalPosition } from "./position-utils";

class ExtraLargeBoxes extends Component {
  render() {
    const styles = this.styles();

    return (
      <div>
        {[1, 1, 1].map(item => (
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
        width: 300,
        height: 200,
        backgroundColor: "#685C79",
        position: "absolute"
      }
    };
  };
}

export default ExtraLargeBoxes;
