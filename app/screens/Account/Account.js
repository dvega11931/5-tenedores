import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";
import Loading from "../../components/Loading";

export default function Account() {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      !user ? setLogin(false) : setLogin(true); //si user es null entonces el state es false de lo contrario es true
    });
  }, []); // si algo se modifica el useEffect se vuelve a ejecutar

  if (login === null) return <Loading isVisible={true} text="Cargando..." />; //en espera de que se ejecute el useEffect

  return login ? <UserLogged /> : <UserGuest />;
}
