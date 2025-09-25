import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function PantallaHome({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Botón de inicio de sesión arriba a la derecha */}
      <TouchableOpacity 
        style={styles.loginButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.loginText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>Menú Principal</Text>

      <TouchableOpacity 
        style={styles.card}
        onPress={() => navigation.navigate("Rutinas")}
      >
        <Text style={styles.textoCard}>Rutinas</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.card}
        onPress={() => navigation.navigate("Comidas")}
      >
        <Text style={styles.textoCard}>Comidas</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.card}
        onPress={() => navigation.navigate("Cardio")}
      >
        <Text style={styles.textoCard}>Cardio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 60, // deja espacio para el botón arriba
  },
  loginButton: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "#007bff",
    padding: 8,
    borderRadius: 8,
  },
  loginText: {
    color: "#fff",
    fontWeight: "bold",
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
  },
  card: {
    width: "80%",
    backgroundColor: "#e0e0e0",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: "center",
  },
  textoCard: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

