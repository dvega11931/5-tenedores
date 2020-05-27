import React from "react";
import { YellowBox } from "react-native";
import Navigation from "./app/navigations/Navigation";
import { firebaseApp } from "./app/utils/firebase";

YellowBox.ignoreWarnings(["Setting a timer"]); //ignora el warning de timepo de resouesta al hacer una consuta grande a firebase

export default function App() {
  return <Navigation />;
}
