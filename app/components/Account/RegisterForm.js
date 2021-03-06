import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import Loading from "../Loading";
import { validateEmail } from "../../utils/validations";
import { size, isEmpty } from "lodash"; //libreria de funciones para hacer validaciones
import * as firebase from "firebase";
import { useNavigation } from "@react-navigation/native"; //para poder redireccionar a otra screen

export default function RegisterForm(props) {
  const { toastRef } = props;
  //estados para mostrar y ocultar las contraseñas
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  //donde se van a guardar todos los valores del formulario
  const [formData, setFormData] = useState(defaultFormValue());
  //se inicializa el hook
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);

  //se ejecuta al darle clic al boton
  const onSubmit = () => {
    if (
      //validar si los campos esta vacios
      isEmpty(formData.email) ||
      isEmpty(formData.password) ||
      isEmpty(formData.repeatPassword)
    ) {
      toastRef.current.show("Todos los campos son obligatorios");
    } else if (!validateEmail(formData.email)) {
      toastRef.current.show("El email no es valido");
    } else if (formData.password !== formData.repeatPassword) {
      toastRef.current.show("Las contraseñas deben ser iguales");
    } else if (size(formData.password) < 6) {
      toastRef.current.show("Las contraseña debe ser mayor a 6 caracteres");
    } else {
      setLoading(true);
      firebase
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password)
        .then(() => {
          setLoading(false);
          navigation.navigate("account");
        })
        .catch(() => {
          setLoading(false);
          toastRef.current.show("El email ya esta en uso, intente con otro.");
        });
    }
  };

  //se ejecuta cada vez que el valor de un imput cambia
  const onChange = (e, type) => {
    //se optienen los valores del input y se guardan en un array el setFromData cambia lo q guarda fromData
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.inputform}
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
        placeholder="Contaseña"
        containerStyle={styles.inputform}
        password={true}
        secureTextEntry={showPassword ? false : true}
        onChange={(e) => onChange(e, "password")}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setShowPassword(!showPassword)} //se envia el valor contrario que tiene showPassword para eso es el !
          />
        }
      />
      <Input
        placeholder="Repetir contaseña"
        containerStyle={styles.inputform}
        password={true}
        secureTextEntry={showRepeatPassword ? false : true}
        onChange={(e) => onChange(e, "repeatPassword")}
        rightIcon={
          <Icon
            type="material-community"
            name={showRepeatPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setShowRepeatPassword(!showRepeatPassword)} //se envia el valor contrario que tiene showPassword para eso es el !
          />
        }
      />
      <Button
        title="Unirse"
        containerStyle={styles.btnContainerRegister}
        buttonStyle={styles.btnRegister}
        onPress={onSubmit}
      />
      <Loading isVisible={loading} text="CREANDO CUENTA" />
    </View>
  );
}

//se inicia el objeto con datos en vacio
function defaultFormValue() {
  return {
    email: "",
    password: "",
    repeatPassword: "",
  };
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  inputform: {
    width: "100%",
    marginTop: 20,
  },
  btnContainerRegister: {
    marginTop: 20,
    width: "95%",
  },
  btnRegister: {
    backgroundColor: "#00a680",
  },
  iconRight: {
    color: "#c1c1c1",
  },
});
