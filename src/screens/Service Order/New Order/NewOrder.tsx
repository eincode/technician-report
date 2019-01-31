import React, { Component } from "react"
import { View, StyleSheet, Text, ScrollView } from "react-native"
import { NavigationStackScreenOptions } from "react-navigation"
import CustomTextInput from "../../../components/CustomTextInput"
import FormSectionHeader from "../../../components/FormSectionHeader"
import CustomButton from "../../../components/CustomButton"

export default class NewOrder extends Component {
  static navigationOptions: NavigationStackScreenOptions = {
    title: "New Service Order"
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <View style={{ marginBottom: 10 }} />
        <FormSectionHeader title={"Service Order Details"} />
        <CustomTextInput label={"Service Order No"} placeholder={"e.g. 860032593"} />
        <CustomTextInput
          label={"Job Outline"}
          placeholder={"e.g. Inspect Machine Low Power"}
        />
        <FormSectionHeader title={"Customer Details"} />
        <CustomTextInput label={"Customer Name"} placeholder={"e.g. PT. Passokkorang"} />
        <CustomTextInput label={"Site"} placeholder={"e.g. Mamuju"} />
        <FormSectionHeader title={"Machine / Engine"} />
        <CustomTextInput label={"Model"} placeholder={"e.g. 320 O2"} />
        <CustomTextInput label={"Plant No."} placeholder={"e.g. 05"} />
        <CustomTextInput label={"Serial No."} placeholder={"e.g. XBA10212"} />
        <CustomTextInput label={"SMU"} placeholder={"e.g. 2743"} />
        <CustomButton label={"Submit Service Order"} />
        <View style={{ marginBottom: 10 }} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
