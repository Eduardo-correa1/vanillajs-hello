/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#La-Excusa").innerHTML = laExcusa();
  });

  //write your code here
  console.log("Hello Rigo from the console!");
};

let laExcusa = () => {
  let pronombre = ["Un", "El", "Mi"];
  let sujeto = [
    "perro",
    "extraterrestre",
    "vecino",
    "Presidente",
    "robot",
    "unicornio",
    "prestamista"
  ];
  let accion = [
    "se comió",
    "incendió",
    "robó",
    "sacudió",
    "inhundó",
    "bailo con",
    "hizo una fiesta con"
  ];
  let cosa = [
    "mis deberes",
    "mi casa",
    "mi dinero",
    "mi cabeza",
    "mis calzoncillos"
  ];
  let como = [
    "mientras reía",
    "con sus patitas",
    "toda la noche",
    "haciendo un moonwalk",
    "al ritmo de reggaeton"
  ];

  let propro = Math.floor(Math.random() * pronombre.length);
  let prosuj = Math.floor(Math.random() * sujeto.length);
  let proacc = Math.floor(Math.random() * accion.length);
  let procos = Math.floor(Math.random() * cosa.length);
  let procom = Math.floor(Math.random() * como.length);
  return (
    pronombre[propro] +
    " " +
    sujeto[prosuj] +
    " " +
    accion[proacc] +
    " " +
    cosa[procos] +
    " " +
    como[procom]
  );
};
