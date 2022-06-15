import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import { getStatusBarHeight } from "react-native-status-bar-height"

import Home from "../screens/home"
import MoreInfo from "../screens/moreinfo"

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: "Chord Progressions",
            headerShown: true,
            animationEnabled: true,
            headerStyle: {
                backgroundColor: "dodgerblue",
            },
            safeAreaInsets: { top: getStatusBarHeight(true) > 20 ? getStatusBarHeight(true) : 0, bottom: 0 },
        },
    },
    MoreInfo: {
        screen: MoreInfo,
        navigationOptions: {
            title: "More Info",
            headerShown: true,
            animationEnabled: true,
            headerStyle: {
                backgroundColor: "#81D2C7",
            },
            safeAreaInsets: { top: getStatusBarHeight(true) > 20 ? getStatusBarHeight(true) : 0, bottom: 0 },
        }
    }
}

const HomeStack = createStackNavigator(screens)
export default createAppContainer(HomeStack)