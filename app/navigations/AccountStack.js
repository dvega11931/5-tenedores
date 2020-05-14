import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Account from "../screens/Account";

const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    //Al ser la primera es la visible por default
    <Stack.Navigator>
      <Stack.Screen
        name="restaurants"
        component={Account}
        options={{ title: "Cuenta" }} //el nombre que sale en la barra superior
      />
    </Stack.Navigator>
  );
}
