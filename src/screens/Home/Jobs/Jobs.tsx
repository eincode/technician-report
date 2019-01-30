import React, { Component } from "react"
import { View, StyleSheet, Text } from "react-native"
import FloatingActionButton from "../../../components/FloatingActionButton"

export default class Jobs extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You haven't completed any jobs yet!</Text>
        <Text>Start by pressing add button below</Text>
        <FloatingActionButton onPress={() => {}} />
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
