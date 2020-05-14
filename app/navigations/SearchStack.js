import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Search from "../screens/Search";

const Stack = createStackNavigator();

export default function SearchStack() {
  return (
    //Al ser la primera es la visible por default
    <Stack.Navigator>
      <Stack.Screen
        name="search"
        component={Search}
        options={{ title: "Buscar" }} //el nombre que sale en la barra superior
      />
    </Stack.Navigator>
  );
}
