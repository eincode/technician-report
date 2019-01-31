import React from "react"
import { View, Text, StyleSheet, ViewStyle, StyleProp } from "react-native"
import metrics from "../config/metrics"

interface Props {
  title: string
  style?: StyleProp<ViewStyle>
}

export default (props: Props) => (
  <View style={[styles.container, props.style]}>
    <Text style={styles.title}>{props.title}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10
  },

  title: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold"
  }
})
