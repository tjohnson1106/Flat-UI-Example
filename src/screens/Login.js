import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesome } from "@expo/vector-icons";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";

import colors from "../styles/colors";
import InputField from "../components/form/InputField";
import NextArrowButton from "../components/buttons/NextArrowButton";

class Login extends Component {
  handleNextButton() {
    alert("handle next button pressed");
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.root}>
        <View style={styles.scrollWrapper}>
          <ScrollView style={styles.scroll}>
            <Text style={styles.loginHeader}>Log In</Text>

            <InputField
              labelText="EMAIL ADDRESS"
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="email"
              customStyle={{ marginBottom: 30 }}
            />
            <InputField
              labelText="PASSWORD"
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="password"
              customStyle={{ marginBottom: 30 }}
            />
          </ScrollView>
        </View>

        <View style={styles.nextButton}>
          <NextArrowButton handleNextButton={this.handleNextButton} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flex: 1,
    backgroundColor: colors.green01
  },
  scrollWrapper: {
    marginTop: 70,
    flex: 1
  },
  scroll: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1
  },
  loginHeader: {
    fontSize: 34,
    color: colors.white,
    fontWeight: "300",
    marginBottom: 40
  },
  nextButton: {
    alignItems: "flex-end",
    right: 20,
    bottom: 20
  }
});

export default Login;
