import React from "react"
import { createStackNavigator, createAppContainer } from "react-navigation"
import Login from "./screens/Login"
import metrics from "./config/metrics"
import Register from "./screens/Register"

const RootNav = createAppContainer(
  createStackNavigator(
    {
      Login: { screen: Login },
      Register: { screen: Register }
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: metrics.PRIMARY_COLOR
        },
        headerTintColor: "white"
      }
    }
  )
)

export default class App extends React.Component {
  render() {
    return <RootNav />
  }
}
