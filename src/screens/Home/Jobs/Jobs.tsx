import React, { Component } from "react"
import { View, StyleSheet, Text, Image } from "react-native"
import FloatingActionButton from "../../../components/FloatingActionButton"
import { NavigationTabScreenOptions } from "react-navigation"

const IC_JOBS_ACTIVE = require("../../../../assets/ic_jobs_active.png")
const IC_JOBS_INACTIVE = require("../../../../assets/ic_jobs_inactive.png")

export default class Jobs extends Component {
  static navigationOptions: NavigationTabScreenOptions = {
    tabBarIcon: ({ focused }) => {
      switch (focused) {
        case true:
          return (
            <Image
              source={IC_JOBS_ACTIVE}
              style={{ width: 20, height: 20 }}
              resizeMode={"contain"}
            />
          )
        case false:
          return (
            <Image
              source={IC_JOBS_INACTIVE}
              style={{ width: 20, height: 20 }}
              resizeMode={"contain"}
            />
          )
      }
    }
  }

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
