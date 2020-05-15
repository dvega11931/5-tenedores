import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import RestaurantsStack from "../navigations/RestaurantsStack";
import FavoritesStack from "../navigations/FavoritesStack";
import TopRestaurantsStack from "../navigations/TopRestaurantsStack";
import SearchStack from "../navigations/SearchStack";
import AccountStack from "../navigations/AccountStack";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="restaurants" //la primera pagina q carga el navegador al entrar al app
        tabBarOptions={{
          //color del tab cuando no esta seleccionado
          inactiveTintColor: "#646464",
          //color del tab cuando esta seleccionado
          activeTintColor: "#00a680",
        }}
        screenOptions={({ route }) => ({
          //optiene la ruta del q esta seleccionado
          //obtiene el color dependiendo si esta seleccionado o no
          tabBarIcon: ({ color }) => screenOptions(route, color), //envia los datos a la funcion
        })}
      >
        <Tab.Screen
          name="restaurants"
          component={RestaurantsStack} //se llama el stak y el stack se agrega la screen ademas de la barra de arriba con el nombre de la pagina
          options={{ title: "Restaurantes" }}
        />
        <Tab.Screen
          name="favorites"
          component={FavoritesStack}
          options={{ title: "Favoritos" }}
        />
        <Tab.Screen
          name="top-restaurants"
          component={TopRestaurantsStack}
          options={{ title: "Top 5" }}
        />
        <Tab.Screen
          name="search"
          component={SearchStack}
          options={{ title: "Buscar" }}
        />
        <Tab.Screen
          name="account"
          component={AccountStack}
          options={{ title: "Cuenta" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function screenOptions(route, color) {
  let iconName;

  //segun el nomnbre del tan se le asigna el icono el tamaño y el color
  switch (route.name) {
    case "restaurants":
      iconName = "compass-outline";
      break;
    case "favorites":
      iconName = "heart-outline";
      break;
    case "top-restaurants":
      iconName = "star-outline";
      break;
    case "search":
      iconName = "magnify";
      break;
    case "account":
      iconName = "home-outline";
      break;

    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} /> //se le inserta el icono al tab del menu
  );
}
