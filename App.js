import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PantallaInicio from "./src/pages/PantallaInicio";
import PantallaHome from "./src/pages/PantallaHome";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={PantallaInicio} />
        <Stack.Screen name="Home" component={PantallaHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

