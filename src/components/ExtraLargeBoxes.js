import { connect } from "react-redux";

import React, { Component } from "react";
import { getVerticalPosition, getHorizontalPosition } from "./position-utils";

class ExtraLargeBoxes extends Component {
  render() {
    const styles = this.styles();

    return (
      <div>
        {[1, 1, 1].map((item, index) => (
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
        width: 300,
        height: 200,
        backgroundColor: this.props.color,
        position: "absolute"
      }
    };
  };
}

const mapStateToProps = state => {
  return {
    color: state.theme.xl
  };
};

export default connect(mapStateToProps)(ExtraLargeBoxes);
