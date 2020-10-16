import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Login from "./pages/Login"
import Inicio from "./pages/Inicio"
import NaoEncontrado from "./pages/NaoEncontrado"
import MenuInicial from './pages/MenuInicial'
import RotasPrivadas from './rotasPrivadas'


export default function Rotas(){
  return(
<BrowserRouter basename={process.env.PUBLIC_URL}>
  <Switch>
    <Route exact path="/" component={Inicio} />
    <Route exact path="/login" component={Login} />
    <RotasPrivadas exact path="/menu" component={MenuInicial} />
    <Route component={NaoEncontrado} />
  </Switch>
</BrowserRouter>
  )
}