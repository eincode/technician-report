import React, { Component } from "react"
import { View, StyleSheet, Text, Image, FlatList, SectionList } from "react-native"
import FloatingActionButton from "../../../components/FloatingActionButton"
import { NavigationTabScreenOptions, NavigationScreenProp } from "react-navigation"
import JobItem from "./JobItem"
import metrics from "../../../config/metrics"

const IC_JOBS_ACTIVE = require("../../../../assets/ic_jobs_active.png")
const IC_JOBS_INACTIVE = require("../../../../assets/ic_jobs_inactive.png")

interface State {
  isJobsAvailable: boolean
}

interface Props {
  navigation: NavigationScreenProp<any, any>
}

export default class Jobs extends Component<Props, State> {
  static navigationOptions: NavigationTabScreenOptions = {
    tabBarIcon: ({ focused }) => {
      switch (focused) {
        case true:
          return (
            <Image
              source={IC_JOBS_ACTIVE}
              style={{ width: 20, height: 20 }}
              resizeMode={"contain"}
            />
          )
        case false:
          return (
            <Image
              source={IC_JOBS_INACTIVE}
              style={{ width: 20, height: 20 }}
              resizeMode={"contain"}
            />
          )
      }
    }
  }

  state = {
    isJobsAvailable: true
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.isJobsAvailable ? (
          <View style={{ flex: 1 }}>
            <SectionList
              sections={[
                { title: "Jobs in progress", data: DUMMY },
                { title: "Jobs completed", data: DUMMY }
              ]}
              style={{ width: metrics.DEVICE_WIDTH }}
              contentContainerStyle={{ alignItems: "center" }}
              renderSectionHeader={({ section: { title } }) => (
                <View
                  style={{
                    width: metrics.DEVICE_WIDTH,
                    height: 30,
                    paddingLeft: 20,
                    justifyContent: "center",
                    marginTop: 5
                  }}
                >
                  <Text style={{ fontWeight: "bold", color: "black" }}>{title}</Text>
                </View>
              )}
              renderItem={({ item }) => (
                <JobItem
                  soNumber={item.soNumber}
                  customerName={item.customerName}
                  site={item.site}
                  jobOutline={item.jobOutline}
                  onPress={() => this.props.navigation.navigate("FOR")}
                />
              )}
              keyExtractor={item => item.soNumber}
            />
          </View>
        ) : (
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text>You haven't completed any jobs yet!</Text>
            <Text>Start by pressing add button below</Text>
          </View>
        )}
        <FloatingActionButton
          onPress={() => {
            this.props.navigation.navigate("NewServiceOrder")
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  }
})

const DUMMY = [
  {
    soNumber: "860032593",
    customerName: "PT. Passokkorang",
    site: "Mamuju",
    jobOutline: "Inspect Machine Low Power"
  }
]
