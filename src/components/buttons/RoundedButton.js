import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import PropTypes from "prop-types";

import colors from "../../styles/colors";

class RoundedButton extends Component {
  state = {};
  render() {
    const { text, color, background } = this.props;
    return (
      <TouchableHighlight style={styles.root}>
        <Text style={[{ color }, styles.buttonText]}>{text}</Text>
      </TouchableHighlight>
    );
  }
}

RoundedButton.PropTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  background: PropTypes.string
};

const styles = StyleSheet.create({
  root: {
    display: "flex",
    padding: 15,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.white
  },
  buttonText: {
    fontSize: 16,
    width: "100%",
    textAlign: "center"
  }
});

export default RoundedButton;
