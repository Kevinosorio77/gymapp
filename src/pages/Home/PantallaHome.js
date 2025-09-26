import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function PantallaHome({ navigation }) {
  return (
    <View style={styles.container}>
     
      <TouchableOpacity 
        style={styles.loginButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.loginText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>🏋️ Menú Principal</Text>

      <TouchableOpacity 
        style={[styles.card, { backgroundColor: "#4e73df" }]}
        onPress={() => navigation.navigate("Rutinas")}
      >
        <Text style={styles.textoCard}>Rutinas</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.card, { backgroundColor: "#1cc88a" }]}
        onPress={() => navigation.navigate("Comidas")}
      >
        <Text style={styles.textoCard}>Comidas</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.card, { backgroundColor: "#e74a3b" }]}
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
    backgroundColor: "#f8f9fc", 
    paddingTop: 60,
  },
  loginButton: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "#2c3e50",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  loginText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#2c3e50",
  },
  card: {
    width: "80%",
    paddingVertical: 20,
    borderRadius: 15,
    marginBottom: 20,
    alignItems: "center",
    elevation: 5, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  textoCard: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
});

