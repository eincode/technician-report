import React from "react"
import { View, Text, StyleSheet } from "react-native"
import metrics from "../config/metrics"

interface Props {
  title: string
}

export default (props: Props) => (
  <View style={styles.container}>
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
