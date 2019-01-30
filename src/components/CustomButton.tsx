import React from "react"
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from "react-native"
import metrics from "../config/metrics"

interface Props extends TouchableOpacityProps {
  label: string
}

export default (props: Props) => (
  <TouchableOpacity style={styles.container} {...props}>
    <Text style={styles.label}>{props.label}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: metrics.DEVICE_WIDTH * 0.8,
    backgroundColor: metrics.SECONDARY_COLOR,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  label: {
    color: "white",
    fontWeight: "bold"
  }
})
