import React, { Component } from "react";
import { PropTypes } from "prop-types";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

import colors from "../../styles/colors";

class InputField extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>{labelText}</Text>
      </View>
    );
  }
}

InputField.propTypes = {};

const styles = StyleSheet.create({
  root: {
    display: "flex"
  }
});

export default InputField;
