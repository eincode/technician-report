import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import {
  NavigationStackScreenOptions,
  NavigationScreenProp
} from "react-navigation";
import FormSectionHeader from "../../../components/FormSectionHeader";
import CustomTextInput from "../../../components/CustomTextInput";
import CustomButton from "../../../components/CustomButton";
import MultilineTextInput from "../../../components/MultilineTextInput";

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

export default class ServiceReport extends Component<Props> {
  static navigationOptions: NavigationStackScreenOptions = {
    title: "Service Report"
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <FormSectionHeader title={"Dealer Information"} />
        <CustomTextInput label={"Dealer Code"} placeholder={"e.g. J195"} />
        <FormSectionHeader title={"Parts"} />
        <CustomTextInput
          label={"Part Number Responsible"}
          placeholder={"e.g. IR0715"}
        />
        <CustomTextInput label={"Part Name"} placeholder={"Filler"} />
        <CustomTextInput label={"Qty."} placeholder={"e.g. 1"} />
        <CustomTextInput label={"Description Code"} placeholder={"e.g. 52"} />
        <CustomTextInput
          label={"Group Number Containing Part"}
          placeholder={"e.g. 115-2713"}
        />
        <CustomTextInput
          label={"Group Name"}
          placeholder={"e.g. Fueling group"}
        />
        <CustomTextInput
          label={"Descriptive Comments"}
          placeholder={"e.g. Corrosion"}
        />
        <CustomButton label={"Add More Parts"} />
        <FormSectionHeader title={"Summary"} />
        <MultilineTextInput
          label={"What was the customer complaint?"}
          placeholder={"Explain the problem here"}
        />
        <MultilineTextInput
          label={"Additional comment on the cause of failure?"}
          placeholder={"What causes the damage?"}
        />
        <MultilineTextInput
          label={"What was the resultant damaged?"}
          placeholder={"What damage does it make?"}
        />
        <MultilineTextInput
          label={"How did you repair it?"}
          placeholder={"Explain the troubleshooting here"}
        />
        <CustomButton
          label={"Submit Service Report"}
          onPress={() => this.props.navigation.goBack()}
        />
        <View style={{ marginTop: 10 }} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
