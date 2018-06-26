import React, { Component } from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import { PropTypes } from "prop-types";
import { FontAwesome } from "@expo/vector-icons";

import colors from "../../styles/colors/";

class NextArrowButton extends Component {
  state = {};
  render() {
    const { disabled } = this.props;
    const opacityStyle = disabled
      ? { backgroundColor: "rgba( 255, 255, 255, 0.2 )" }
      : { backgroundColor: "rgba( 255, 255, 255, 0.6 )" };

    return (
      <TouchableHighlight style={[opacityStyle, styles.button]}>
        <FontAwesome
          name="angle-right"
          color={colors.green01}
          size={32}
          style={styles.icon}
        />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: 60,
    height: 60
  },
  icon: {
    marginRight: -2,
    marginTop: -2
  }
});

export default NextArrowButton;
