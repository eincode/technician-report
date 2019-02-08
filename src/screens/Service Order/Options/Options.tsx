import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  NavigationStackScreenOptions,
  NavigationScreenProp
} from "react-navigation";
import OptionItem from "./OptionItem";

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

export default class Options extends Component<Props> {
  static navigationOptions: NavigationStackScreenOptions = {
    title: "Choose Action"
  };

  render() {
    return (
      <View style={styles.container}>
        <OptionItem
          label={"Field Operation Report"}
          onPress={() => this.props.navigation.navigate("FORList")}
        />
        <OptionItem
          label={"Service Report"}
          onPress={() => this.props.navigation.navigate("ServiceReport")}
        />
        <OptionItem label={"Summary Report"} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  }
});
