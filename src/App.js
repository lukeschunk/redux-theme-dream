import React, { Component } from "react";
import keycode from "keycode";

import { getRandomTheme } from "./redux/theme-actions";

import ExtraLargeBoxes from "./components/ExtraLargeBoxes";
import BigBoxes from "./components/BigBoxes";
import MediumBoxes from "./components/MediumBoxes";
import SmallBoxes from "./components/SmallBoxes";
import TinyBoxes from "./components/TinyBoxes";

class App extends Component {
  componentDidMount() {
    document.addEventListener("keyup", this.handleKeyUp);
    setInterval(this.props.getRandomTheme, 1000);
  }

  handleKeyUp = e => {
    if (keycode(e) === "enter") {
      this.props.getRandomTheme();
    }
  };

  render() {
    const styles = this.styles();

    return (
      <div style={styles.container} className="App">
        <ExtraLargeBoxes />
        <BigBoxes />
        <MediumBoxes />
        <SmallBoxes />
        <TinyBoxes />
      </div>
    );
  }

  styles = () => {
    return {
      container: {
        padding: 60,
        width: "100%",
        overflow: "hidden"
      }
    };
  };
}

export default App;
