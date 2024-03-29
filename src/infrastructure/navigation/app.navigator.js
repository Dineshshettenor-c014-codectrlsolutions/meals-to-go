import React from "react";



// import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// import { RestaurantsScreen } from '../../features/restaurants/screens/restaurant.screen'
// import { SafeArea } from '../../components/utility/safe-area.components'
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
// import { AuthenticationContext } from "../../services/authentication/authentication.context";

import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { SettingsNavigator } from "./settings.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Restaurants: "restaurant",
    Map: "map",
    Settings: "settings",
};




const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
        tabBarIcon: ({ size, color }) => (
            <Ionicons name={iconName} size={size} color={color} />
        ),
    };
};

export const AppNavigator = () => (

    // <NavigationContainer>

    <FavouritesContextProvider>
        <LocationContextProvider>
            <RestaurantsContextProvider>
                <Tab.Navigator
                    screenOptions={createScreenOptions}
                    tabBarOptions={{
                        activeTintColor: "tomato",
                        inactiveTintColor: "gray",
                    }}
                >
                    <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
                    <Tab.Screen name="Map" component={MapScreen} />
                    <Tab.Screen name="Settings" component={SettingsNavigator} />
                </Tab.Navigator>
            </RestaurantsContextProvider>
        </LocationContextProvider>
    </FavouritesContextProvider>
    // </NavigationContainer>
);