import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TopRestaurants from "../screens/TopRestaurants";

const Stack = createStackNavigator();

export default function TopRestaurantsStack() {
  return (
    //Al ser la primera es la visible por default
    <Stack.Navigator>
      <Stack.Screen
        name="top-restaurants"
        component={TopRestaurants}
        options={{ title: "Top 5" }} //el nombre que sale en la barra superior
      />
    </Stack.Navigator>
  );
}
