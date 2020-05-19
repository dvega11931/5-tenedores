import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Account from "../screens/Account/Account";
import Login from "../screens/Account/Login";
import Register from "../screens/Account/Register";
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
      <Stack.Screen
        name="login"
        component={Login}
        options={{ title: "Iniciar sesión" }} //el nombre que sale en la barra superior
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{ title: "Registro" }} //el nombre que sale en la barra superior
      />
    </Stack.Navigator>
  );
}
