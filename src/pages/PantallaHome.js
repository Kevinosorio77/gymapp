import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function PantallaHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Menú Principal</Text>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.textoCard}>Rutinas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.textoCard}>Comidas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
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
