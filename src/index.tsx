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
import NewOrder from "./screens/Service Order/New Order"
import FOR from "./screens/Service Order/Field Operation Report"

const MainNav = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: "Technician Pocket",
        headerLeft: null
      }
    },
    NewServiceOrder: { screen: NewOrder },
    FOR: { screen: FOR }
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
