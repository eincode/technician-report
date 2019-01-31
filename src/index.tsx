import React from "react"
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation"
import Login from "./screens/Login"
import metrics from "./config/metrics"
import Register from "./screens/Register"
import Home from "./screens/Home"
import { View, StatusBar } from "react-native"

const MainNav = createStackNavigator(
  {
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

const AuthNav = createStackNavigator({
  Login: { screen: Login },
  Register: { screen: Register }
})

const RootNav = createAppContainer(
  createSwitchNavigator({
    Auth: { screen: AuthNav },
    Main: { screen: MainNav }
  })
)

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle={"light-content"} backgroundColor={metrics.PRIMARY_COLOR} />
        <RootNav />
      </View>
    )
  }
}
