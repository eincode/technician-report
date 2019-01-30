import React from "react"
import { TouchableOpacity, StyleSheet, Text } from "react-native"
import metrics from "../config/metrics"

interface Props {
  onPress: () => void
}

export default class FloatingActionButton extends React.Component<Props, any> {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Text style={styles.label}>+</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: metrics.SECONDARY_COLOR,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: metrics.SHADOW_COLOR,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 5,
    shadowOpacity: 1,
    elevation: 5,
    position: "absolute",
    bottom: 20,
    right: 30
  },

  label: {
    color: "white",
    fontSize: 30
  }
})
