import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import { NavigationStackScreenOptions, createBottomTabNavigator } from "react-navigation"
import Jobs from "./Jobs"
import SAR from "./SAR"

export default createBottomTabNavigator({
  Jobs: { screen: Jobs },
  SAR: { screen: SAR }
})
