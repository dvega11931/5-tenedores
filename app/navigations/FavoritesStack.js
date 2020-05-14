import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Favorites from "../screens/Favorites";

const Stack = createStackNavigator();

export default function FavoritesStack() {
  return (
    //Al ser la primera es la visible por default
    <Stack.Navigator>
      <Stack.Screen
        name="favorites"
        component={Favorites}
        options={{ title: "Favoritos" }} //el nombre que sale en la barra superior
      />
    </Stack.Navigator>
  );
}
