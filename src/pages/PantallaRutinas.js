import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PantallaRutinas() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Rutinas</Text>
      <Text>Lunes: Pecho</Text>
      <Text>Martes: Espalda</Text>
      <Text>Miércoles: Piernas</Text>
      <Text>Jueves: Hombros</Text>
      <Text>Viernes: Brazos</Text>
      <Text>Sábado: Full Body</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  titulo: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});
