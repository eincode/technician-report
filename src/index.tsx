import React from "react"
import { createStackNavigator, createAppContainer } from "react-navigation"
import Login from "./screens/Login"
import metrics from "./config/metrics"
import Register from "./screens/Register"
import Home from "./screens/Home"

const RootNav = createAppContainer(
  createStackNavigator(
    {
      Login: { screen: Login },
      Register: { screen: Register },
      Home: {
        screen: Home,
        navigationOptions: {
          title: "Technician Pocket",
          headerLeft: null
        }
      }
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: metrics.PRIMARY_COLOR
        },
        headerTintColor: "white"
      },
      headerLayoutPreset: "center"
    }
  )
)

export default class App extends React.Component {
  render() {
    return <RootNav />
  }
}
