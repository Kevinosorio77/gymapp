import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function PantallaInicio({ navigation }) {
  return (
    <View style={styles.container}>
      
      <Image source={{ uri: "https://play-lh.googleusercontent.com/saAWUYZJEVe-XaQg54HRAN_6T_y4GAEi32qP9C03VzF8jzS6JQEMIq83YJOXoyTWzw" }} style={styles.imagen} resizeMode="contain"/>
      <Text style={styles.titulo}>¡Bienvenido a la app de Gym!</Text>
      <Text style={styles.subtitulo}>Tu compañero para rutinas, comidas y cardio</Text>

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
    backgroundColor: "#1e1e2f", 
    padding: 20,
  },
  imagen: {
    width: 200,
    height: 200,
    marginBottom: 30,
    borderRadius: 100, 
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 16,
    color: "#aaa",
    marginBottom: 40,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  boton: {
    backgroundColor: "#ff3b3b",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 12,
    elevation: 5, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  textoBoton: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

