import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Restaurants from "../screens/Restaurants";

const Stack = createStackNavigator();

export default function RestaurantsStack() {
  return (
    //Al ser la primera es la visible por default
    <Stack.Navigator>
      <Stack.Screen
        name="restaurants"
        component={Restaurants}
        options={{ title: "Restaurantes" }} //el nombre que sale en la barra superior
      />
    </Stack.Navigator>
  );
}
