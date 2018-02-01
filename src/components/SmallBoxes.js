import { connect } from "react-redux";

import React, { Component } from "react";
import { getVerticalPosition, getHorizontalPosition } from "./position-utils";

class SmallBoxes extends Component {
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
        width: 50,
        height: 50,
        backgroundColor: this.props.color,
        position: "absolute"
      }
    };
  };
}

const mapStateToProps = state => {
  return {
    color: state.theme.small
  };
};

export default connect(mapStateToProps)(SmallBoxes);
