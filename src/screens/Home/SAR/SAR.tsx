import React, { Component } from "react"
import { View, StyleSheet, Text, Image } from "react-native"
import { NavigationTabScreenOptions } from "react-navigation"

const IC_BOOK_ACTIVE = require("../../../../assets/ic_book_active.png")
const IC_BOOK_INACTIVE = require("../../../../assets/ic_book_inactive.png")

export default class SAR extends Component {
  static navigationOptions: NavigationTabScreenOptions = {
    tabBarIcon: ({ focused }) => {
      switch (focused) {
        case true:
          return (
            <Image
              source={IC_BOOK_ACTIVE}
              style={{ width: 20, height: 20 }}
              resizeMode={"contain"}
            />
          )
        case false:
          return (
            <Image
              source={IC_BOOK_INACTIVE}
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
        <Text>SAR</Text>
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
