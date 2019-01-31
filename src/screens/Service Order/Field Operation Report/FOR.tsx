import React, { Component } from "react"
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TimePickerAndroid,
  DatePickerAndroid,
  Keyboard
} from "react-native"
import { NavigationStackScreenOptions, NavigationScreenProp } from "react-navigation"
import metrics from "../../../config/metrics"
import MultilineTextInput from "../../../components/MultilineTextInput"
import CustomTextInput from "../../../components/CustomTextInput"
import FormSectionHeader from "../../../components/FormSectionHeader"

interface Props {
  navigation: NavigationScreenProp<any, any>
}

interface State {
  startTime: string
  endTime: string
  date: Date
}

export default class FOR extends Component<Props, State> {
  static navigationOptions: NavigationStackScreenOptions = {
    title: "Field Operation Report"
  }

  state = {
    startTime: "07:00",
    endTime: "19:00",
    date: new Date()
  }

  public async openTimePicker(type: "start" | "end"): Promise<void> {
    Keyboard.dismiss()
    const timePickerResult = await TimePickerAndroid.open({
      hour: 7,
      minute: 0,
      is24Hour: true
    })
    if (timePickerResult.action !== TimePickerAndroid.dismissedAction) {
      let { hour, minute } = timePickerResult
      let hourString: string, minuteString: string
      if (hour < 10) {
        hourString = `0${hour.toString()}`
      } else {
        hourString = hour.toString()
      }
      if (minute < 10) {
        minuteString = `0${minute.toString()}`
      } else {
        minuteString = minute.toString()
      }
      switch (type) {
        case "start": {
          this.setState({
            startTime: `${hourString}:${minuteString}`
          })
          break
        }
        case "end": {
          this.setState({
            endTime: `${hourString}:${minuteString}`
          })
        }
      }
    }
  }

  public async openDatePicker(): Promise<void> {
    Keyboard.dismiss()
    const datePickerResult = await DatePickerAndroid.open()
    if (datePickerResult.action !== DatePickerAndroid.dismissedAction) {
      this.setState({
        date: new Date(
          datePickerResult.year,
          datePickerResult.month,
          datePickerResult.day
        )
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FormSectionHeader title={"Time Record"} style={{ alignSelf: "center" }} />
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <CustomTextInput
            label={"Date"}
            value={this.state.date.toDateString()}
            onFocus={() => this.openDatePicker()}
          />
          <View
            style={{
              flexDirection: "row",
              width: metrics.DEVICE_WIDTH,
              paddingHorizontal: 50,
              marginBottom: 10,
              justifyContent: "space-around"
            }}
          >
            <View>
              <Text style={{ color: "black" }}>Start Time</Text>
              <View style={styles.timeContainer}>
                <TextInput
                  value={this.state.startTime}
                  style={{ flex: 1, textAlign: "center", width: 100 }}
                  onFocus={() => this.openTimePicker("start")}
                />
              </View>
            </View>
            <View>
              <Text style={{ color: "black" }}>End Time</Text>
              <View style={styles.timeContainer}>
                <TextInput
                  value={this.state.endTime}
                  style={{ flex: 1, textAlign: "center", width: 100 }}
                  onFocus={() => this.openTimePicker("end")}
                />
              </View>
            </View>
          </View>
          <MultilineTextInput label={"Description"} placeholder={"What did you do?"} />
          <CustomTextInput label={"Segment"} placeholder={"e.g. T/T"} />
          <CustomTextInput label={"OPR"} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  timeContainer: {
    height: 50,
    width: 100,
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: "grey",
    borderWidth: 0.3,
    justifyContent: "center",
    alignItems: "center"
  }
})
