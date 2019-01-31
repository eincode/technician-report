import React, { Component } from "react"
import {
  TextInput,
  View,
  StyleSheet,
  TextInputProps,
  ImageSourcePropType,
  Image,
  Text
} from "react-native"
import metrics from "../config/metrics"

interface Props extends TextInputProps {
  icon?: ImageSourcePropType
  label?: string
}

export default (props: Props) => (
  <View style={styles.container}>
    {props.label ? (
      <Text style={{ marginBottom: 5, color: "black" }}>{props.label}</Text>
    ) : null}
    <View style={styles.textInputContainer}>
      {props.icon ? (
        <Image source={props.icon} style={styles.icon} resizeMode={"contain"} />
      ) : null}
      <TextInput
        {...props}
        style={{ flex: 1, textAlignVertical: "top" }}
        underlineColorAndroid={"transparent"}
        multiline
        numberOfLines={2}
      />
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    width: metrics.DEVICE_WIDTH * 0.8,
    marginBottom: 10
  },

  textInputContainer: {
    width: metrics.DEVICE_WIDTH * 0.8,
    borderRadius: 5,
    borderColor: "grey",
    borderWidth: 0.3,
    padding: 5,
    paddingHorizontal: 10,
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "row"
  },

  icon: {
    height: 25,
    width: 25,
    marginRight: 15
  }
})
