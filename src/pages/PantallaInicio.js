import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function PantallaInicio({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>¡Bienvenido a la app de Gym!</Text>
      <TouchableOpacity 
        style={styles.boton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.textoBoton}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  boton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
  },
  textoBoton: {
    color: "#fff",
    fontSize: 18,
  },
});
