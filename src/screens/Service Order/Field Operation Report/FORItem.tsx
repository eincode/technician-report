import React from "react"
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps
} from "react-native"
import metrics from "../../../config/metrics"

interface Props extends TouchableOpacityProps {
  description: string
  time: string
  date: string
}

export default (props: Props) => (
  <TouchableOpacity {...props} style={styles.container}>
    <Text style={{ color: "black", fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>
      {props.description}
    </Text>
    <Text style={{ fontSize: 12 }}>{props.time}</Text>
    <Text style={{ fontSize: 12 }}>{props.date}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    width: metrics.DEVICE_WIDTH * 0.9,
    backgroundColor: "white",
    elevation: 5,
    borderRadius: 5,
    padding: 20,
    marginVertical: 5
  }
})
