import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import colors from "../styles/colors";
import RoundedButton from "../components/buttons/RoundedButton";

class LoggedOut extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.welcomeWrapper}>
          <Image
            source={require("../../assets/logo.jpg")}
            style={styles.logo}
          />
          <Text style={styles.welcomeText}>
            Welcome to Generic App
          </Text>
          <RoundedButton
            text="Continue With Facebook"
            color={colors.green01}
            background={colors.white}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: "flex",
    backgroundColor: colors.green01
  },
  welcomeText: {
    fontSize: 30,
    color: colors.white,
    fontWeight: "300",
    marginBottom: 40
  },
  welcomeWrapper: {
    flex: 1,
    display: "flex",
    marginTop: 30,
    padding: 20
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 50,
    marginBottom: 40
  }
});

export default LoggedOut;
