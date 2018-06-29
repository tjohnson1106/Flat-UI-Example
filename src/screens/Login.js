import React, { Component } from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";
import PropTypes from "prop-types";

import colors from "../styles/colors";
import InputField from "../components/form/InputField";
import NextArrowButton from "../components/buttons/NextArrowButton";
import Notification from "../components/Notification";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValid: false,
      validEmail: false,
      emailAddress: "",
      validPassword: false
    };
    this.handleCloseNotification = this.handleCloseNotification.bind(
      this
    );
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  handleNextButton() {
    alert("handle next button pressed");
  }

  handleCloseNotification() {
    this.setState({
      formValid: true
    });
  }

  handleEmailChange(email) {
    const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({
      emailAddress: email
    });

    if (!this.state.validEmail) {
      if (emailCheckRegex.test(email)) {
        this.setState({
          validEmail: true
        });
      } else {
        if (!emailCheckRegex.test(email)) {
          this.setState({
            validEmail: false
          });
        }
      }
    }
  }

  render() {
    const { formValid } = this.state;
    const showNotification = formValid ? false : true;
    const background = formValid ? colors.green01 : colors.darkOrange;
    const notificationMarginTop = showNotification ? 10 : 0;
    return (
      <KeyboardAvoidingView
        style={[{ backgroundColor: background }, styles.root]}
        behavior="padding"
      >
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
              onChangeText={this.handleEmailChange}
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

          <View style={styles.nextButton}>
            <NextArrowButton
              handleNextButton={this.handleNextButton}
            />
          </View>
          <View
            style={[
              styles.notificationWrapper,
              { marginTop: notificationMarginTop }
            ]}
          >
            <Notification
              showNotification={true}
              handleCloseNotification={this.handleCloseNotification}
              type="Error"
              firstLine="Those credentials are incorrect"
              secondLine="Please try again"
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

NextArrowButton.propTypes = {
  disabled: PropTypes.bool,
  handleNextButton: PropTypes.func
};

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flex: 1
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
  },
  notificationWrapper: {
    position: "absolute",
    bottom: 0,
    zIndex: 2
  }
});

export default Login;
