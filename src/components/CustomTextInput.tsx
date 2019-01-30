import React, { Component } from "react"
import {
  TextInput,
  View,
  StyleSheet,
  TextInputProps,
  ImageSourcePropType,
  Image
} from "react-native"
import metrics from "../config/metrics"

interface Props extends TextInputProps {
  icon: ImageSourcePropType
}

export default (props: Props) => (
  <View style={styles.container}>
    <Image source={props.icon} style={styles.icon} resizeMode={"contain"} />
    <TextInput {...props} style={{ flex: 1 }} underlineColorAndroid={"transparent"} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: metrics.DEVICE_WIDTH * 0.8,
    borderRadius: 5,
    borderColor: "grey",
    borderWidth: 0.3,
    flexDirection: "row",
    padding: 5,
    paddingHorizontal: 10,
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: 10
  },

  icon: {
    height: 25,
    width: 25,
    marginRight: 15
  }
})
