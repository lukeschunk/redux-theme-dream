import { connect } from "react-redux";

import React, { Component } from "react";
import { getVerticalPosition, getHorizontalPosition } from "./position-utils";

class MediumBoxes extends Component {
  render() {
    const styles = this.styles();

    return (
      <div>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
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
        width: 100,
        height: 100,
        backgroundColor: this.props.color,
        position: "absolute"
      }
    };
  };
}

const mapStateToProps = state => {
  return {
    color: state.theme.medium
  };
};

export default connect(mapStateToProps)(MediumBoxes);
