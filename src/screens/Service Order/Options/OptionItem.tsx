import React from "react"
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  TouchableOpacityProps
} from "react-native"
import metrics from "../../../config/metrics"

const IC_ARROW = require("../../../../assets/ic_arrow_right.png")

interface Props extends TouchableOpacityProps {
  label: string
}

export default (props: Props) => (
  <TouchableOpacity style={styles.container} {...props}>
    <Text style={{ color: "black" }}>{props.label}</Text>
    <Image source={IC_ARROW} style={styles.arrow} resizeMode={"contain"} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: metrics.DEVICE_WIDTH,
    borderBottomWidth: 0.5,
    borderColor: "grey",
    justifyContent: "center",
    paddingHorizontal: 20
  },

  arrow: {
    position: "absolute",
    right: 20,
    width: 20,
    height: 20
  }
})
