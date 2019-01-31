import { createBottomTabNavigator } from "react-navigation"
import Jobs from "./Jobs"
import SAR from "./SAR"
import metrics from "../../config/metrics"

export default createBottomTabNavigator(
  {
    Jobs: { screen: Jobs },
    SAR: { screen: SAR }
  },
  {
    tabBarOptions: {
      activeTintColor: metrics.SECONDARY_COLOR
    }
  }
)
