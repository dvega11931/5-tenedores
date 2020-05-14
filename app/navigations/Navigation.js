import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Restaurants from "../screens/Restaurants";
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigation>
        <Tab.Screen name="restaurants" component={Restaurants} />
      </Tab.Navigation>
    </NavigationContainer>
  );
}
