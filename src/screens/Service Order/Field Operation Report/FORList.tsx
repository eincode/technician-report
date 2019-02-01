import React, { Component } from "react"
import { View, StyleSheet, Text } from "react-native"
import { NavigationStackScreenOptions, NavigationScreenProp } from "react-navigation"
import FloatingActionButton from "../../../components/FloatingActionButton"
import FORItem from "./FORItem"

interface Props {
  navigation: NavigationScreenProp<any, any>
}

export default class FORList extends Component<Props> {
  static navigationOptions: NavigationStackScreenOptions = {
    title: "Field Operation Report"
  }

  render() {
    return (
      <View style={styles.container}>
        <FORItem
          description={"Travel time to site"}
          time={"08.00 - 09.00"}
          date={"Jan, 21 2019"}
        />
        <FloatingActionButton onPress={() => this.props.navigation.navigate("FOR")} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  }
})
