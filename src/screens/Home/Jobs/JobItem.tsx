import React from "react"
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  TouchableOpacityProps
} from "react-native"
import metrics from "../../../config/metrics"

interface Props extends TouchableOpacityProps {
  soNumber: string
  customerName: string
  site: string
  jobOutline: string
}

export default (props: Props) => (
  <TouchableOpacity style={styles.container}>
    <Text style={{ color: "black", fontWeight: "bold", fontSize: 16, marginBottom: 5 }}>
      {props.customerName}
    </Text>
    <Text style={{ color: "black", fontSize: 15, marginBottom: 5 }}>
      {props.jobOutline}
    </Text>
    <Text>{props.site}</Text>
    <Text>SO Number: {props.soNumber}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    width: metrics.DEVICE_WIDTH * 0.9,
    elevation: 5,
    borderRadius: 5,
    backgroundColor: "white",
    padding: 20,
    marginVertical: 10
  }
})
