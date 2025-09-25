import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PantallaInicio from "./src/pages/PantallaInicio";
import PantallaHome from "./src/pages/PantallaHome";
import PantallaRutinas from "./src/pages/PantallaRutinas";
import PantallaComidas from "./src/pages/PantallaComidas";
import PantallaCardio from "./src/pages/PantallaCardio";
import PantallaLogin from "./src/pages/PantallaLogin";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={PantallaInicio} />
        <Stack.Screen name="Home" component={PantallaHome} />
        <Stack.Screen name="Rutinas" component={PantallaRutinas} />
        <Stack.Screen name="Comidas" component={PantallaComidas} />
        <Stack.Screen name="Cardio" component={PantallaCardio} />
        <Stack.Screen name="Login" component={PantallaLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


