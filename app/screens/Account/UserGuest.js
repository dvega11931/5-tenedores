import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native"; //para llamar otras screens dentro de otra screen

export default function UserGuest() {
  const navigation = useNavigation(); //se inisializa el hook

  return (
    <ScrollView centerContent={true} style={styles.viewBoby}>
      <Image
        source={require("../../../assets/img/original.jpg")}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.title}>Consulta tu perfil de 5 tenedores</Text>
      <Text style={styles.description}>
        Como describirias tu mejor restaurantes? Busca y visualiza los mejores
        restaurantes de una forma sencilla, vota cual te ha gustado mas y
        comenta como ha sido tu experincia.
      </Text>
      <View style={styles.viewBtn}>
        <Button
          title="Ver perfil"
          buttonStyle={styles.buttonStyle}
          containerStyle={styles.buttonContainer}
          onPress={() => navigation.navigate("login")} //aqui se indica el screen q se quiere llamar
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewBoby: {
    marginLeft: 30,
    marginRight: 30,
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    marginBottom: 20,
    textAlign: "center",
  },

  viewBtn: {
    flex: 1,
    alignItems: "center",
  },

  buttonStyle: {
    backgroundColor: "#00a680",
  },
  buttonContainer: {
    width: "70%",
  },
});
