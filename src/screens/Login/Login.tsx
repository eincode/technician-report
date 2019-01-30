import React from "react"
import { View, StyleSheet, Text, StatusBar, Image, Alert } from "react-native"
import { NavigationStackScreenOptions, NavigationScreenProp } from "react-navigation"
import metrics from "../../config/metrics"
import CustomTextInput from "../../components/CustomTextInput"
import CustomButton from "../../components/CustomButton"

const LOGO = require("../../../assets/logo.png")
const IC_EMAIL = require("../../../assets/ic_email.png")
const IC_PASSWORD = require("../../../assets/ic_password.png")

interface Props {
  navigation: NavigationScreenProp<any, any>
}

export default class Login extends React.Component<Props> {
  static navigationOptions: NavigationStackScreenOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <Image source={LOGO} style={styles.logo} resizeMode={"contain"} />
        <CustomTextInput icon={IC_EMAIL} placeholder={"Email"} />
        <CustomTextInput icon={IC_PASSWORD} placeholder={"Password"} secureTextEntry />
        <CustomButton
          label={"Login"}
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <Text
          style={styles.registerButton}
          onPress={() => this.props.navigation.navigate("Register")}
        >
          Register Here
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: metrics.PRIMARY_COLOR
  },

  logo: {
    width: metrics.DEVICE_WIDTH * 0.6,
    maxHeight: 100
  },

  registerButton: {
    fontWeight: "bold",
    color: "white",
    marginTop: 20
  }
})
