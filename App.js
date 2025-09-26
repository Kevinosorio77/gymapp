import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PantallaInicio from "./src/pages/Pantalla-Inicio/PantallaInicio";
import PantallaHome from "./src/pages/Home/PantallaHome";
import PantallaRutinas from "./src/pages/principal/PantallaRutinas";
import PantallaComidas from "./src/pages/principal/PantallaComidas";
import PantallaCardio from "./src/pages/principal/PantallaCardio";
import PantallaLogin from "./src/pages/Logins/PantallaLogin";
import PantallaTienda from "./src/pages/Logins/PantallaTienda";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Inicio" screenOptions={{ headerShown: false }}>
  <Stack.Screen name="Inicio" component={PantallaInicio} />
  <Stack.Screen name="Home" component={PantallaHome} />
  <Stack.Screen name="Rutinas" component={PantallaRutinas} />
  <Stack.Screen name="Comidas" component={PantallaComidas} />
  <Stack.Screen name="Cardio" component={PantallaCardio} />
  <Stack.Screen name="Login" component={PantallaLogin} />
  <Stack.Screen name="Tienda" component={PantallaTienda} />
</Stack.Navigator>

    </NavigationContainer>
  );
}
