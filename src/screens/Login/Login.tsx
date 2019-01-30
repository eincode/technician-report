import React from "react"
import { View, StyleSheet, Text, StatusBar } from "react-native"

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <Text>Login</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
