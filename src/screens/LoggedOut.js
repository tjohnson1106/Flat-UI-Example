import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import colors from "../styles/colors";
import RoundedButton from "../components/buttons/RoundedButton";

class LoggedOut extends Component {
  onFacebookPress() {
    alert("Facebook button pressed");
  }

  onCreateAccountPress() {
    alert("Create account button pressed");
  }

  onMoreOptionsButtonText() {
    alert("on more options button pressed");
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.welcomeWrapper}>
          <Image
            source={require("../../assets/logo.jpg")}
            style={styles.logo}
          />
          <Text style={styles.welcomeText}>Welcome to App</Text>
          <RoundedButton
            text="Continue With Facebook"
            color={colors.green01}
            textColor={colors.green01}
            background={colors.white}
            icon={
              <FontAwesome
                name="facebook"
                size={20}
                style={styles.facebookButtonIcon}
              />
            }
            handleOnPress={this.onFacebookPress}
          />
          <RoundedButton
            text="Create Account"
            color={colors.white}
            textColor={colors.white}
            background={colors.green01}
            handleOnPress={this.onCreateAccountPress}
          />

          <TouchableHighlight
            style={styles.moreOptionsButton}
            onPress={this.moreOptionsPress}
          >
            <Text style={styles.moreOptionsButtonText}>
              More Options
            </Text>
          </TouchableHighlight>

          <View style={styles.termsAndConditions}>
            <Text style={styles.termText}>
              By tapping Continue, Create Account or More
            </Text>
            <Text style={styles.termText}> options,</Text>
            <Text style={styles.termText}>I agree to the </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termText}>Terms of Service</Text>
            </TouchableHighlight>
            <Text style={styles.termText}>,</Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termText}>
                Payment Terms of Service
              </Text>
            </TouchableHighlight>
            <Text style={styles.termText}>,</Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termText}>Privacy Policy</Text>
            </TouchableHighlight>
            <Text style={styles.termText}>, and </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termText}>
                Nondiscrimination Policy
              </Text>
            </TouchableHighlight>
          </View>
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
  },
  facebookButtonIcon: {
    color: colors.green01,
    position: "relative",
    left: 20,
    zIndex: 8
  },
  moreOptionsButton: {
    marginTop: 15
  },
  moreOptionsButtonText: {
    color: colors.white,
    fontSize: 16
  },
  termsAndConditions: {
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row",
    marginTop: 30
  },
  termText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "600"
  },
  linkButton: {
    borderBottomWidth: 1,
    borderBottomColor: colors.white
  }
});

export default LoggedOut;
