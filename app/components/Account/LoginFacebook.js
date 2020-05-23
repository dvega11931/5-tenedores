import React, { useRef } from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { SocialIcon } from "react-native-elements";

export default function LoginFacebook() {
  const login = () => {
    console.log("Login...");
  };

  return (
    <SocialIcon
      title="Iniciar sesión con Facebook"
      button
      type="facebook"
      onPress={login}
    />
  );
}
