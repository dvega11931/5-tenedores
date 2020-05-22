import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import Loading from "../Loading";
import { isEmpty } from "lodash"; //libreria de funciones para hacer validaciones
import * as firebase from "firebase";
import { validateEmail } from "../../utils/validations";
import { useNavigation } from "@react-navigation/native"; //para poder redireccionar a otra screen

export default function LoginForm(props) {
  const { toastRef } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(defaultFormValue());
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  //se ejecuta al darle clic al boton
  const onSubmit = () => {
    if (
      //validar si los campos esta vacios
      isEmpty(formData.email) ||
      isEmpty(formData.password)
    ) {
      toastRef.current.show("Todos los campos son obligatorios");
    } else if (!validateEmail(formData.email)) {
      toastRef.current.show("El email no es correcto");
    } else {
      setLoading(true);
      firebase
        .auth()
        .signInWithEmailAndPassword(formData.email, formData.password)
        .then(() => {
          setLoading(false);
          navigation.navigate("account");
        })
        .catch(() => {
          setLoading(false);
          toastRef.current.show("Email o contraseña incorrecta");
        });
    }
  };

  //se ejecuta cada vez que el valor de un imput cambia, actualiza el estado
  const onChange = (e, type) => {
    //se optienen los valores del input y se guardan en un array el setFromData cambia lo q guarda fromData
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Correo"
        containerStyle={styles.inputForm}
        onChange={(e) => onChange(e, "email")}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.inputForm}
        onChange={(e) => onChange(e, "password")}
        password={true}
        secureTextEntry={true}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setShowPassword(!showPassword)} //se envia el valor contrario que tiene showPassword para eso es el !
          />
        }
      />
      <Button
        title="Iniciar sesión"
        containerStyle={styles.btnContainerLogin}
        buttonStyle={styles.btnLogin}
        onPress={onSubmit}
      />
      <Loading isVisible={loading} text="INICIANDO SESIÓN" />
    </View>
  );
}

//se inicia el objeto con datos en vacio
function defaultFormValue() {
  return {
    email: "",
    password: "",
  };
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  inputForm: {
    width: "100%",
    marginTop: 20,
  },

  btnContainerLogin: {
    width: "95%",
    marginTop: 20,
  },

  btnLogin: {
    backgroundColor: "#00a680",
  },

  iconRight: {
    color: "#c1c1c1",
  },
});
