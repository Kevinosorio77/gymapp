import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function PantallaCardio() {
  const cardioPlan = {
    Lunes: { ejercicio: "Cinta", tiempo: "20 min", color: "#FF6B6B" },
    Martes: { ejercicio: "Descanso", tiempo: "", color: "#CED4DA" },
    Miércoles: { ejercicio: "Bicicleta", tiempo: "30 min", color: "#4ECDC4" },
    Jueves: { ejercicio: "Descanso", tiempo: "", color: "#CED4DA" },
    Viernes: { ejercicio: "Escaladora", tiempo: "15 min", color: "#45B7D1" },
    Sábado: { ejercicio: "HIIT", tiempo: "25 min", color: "#FFA502" },
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Plan de Cardio</Text>

      {Object.entries(cardioPlan).map(([dia, datos]) => (
        <View key={dia} style={[styles.card, { backgroundColor: datos.color }]}>
          <Text style={styles.dia}>{dia}</Text>
          {datos.ejercicio !== "Descanso" ? (
            <>
              <Text style={styles.ejercicio}>{datos.ejercicio}</Text>
              <Text style={styles.tiempo}>{datos.tiempo}</Text>
            </>
          ) : (
            <Text style={styles.descanso}>Día de descanso 😴</Text>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f9",
    paddingTop: 40,
    paddingHorizontal: 15,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#222",
  },
  card: {
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
  },
  dia: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  ejercicio: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 5,
  },
  tiempo: {
    fontSize: 16,
    color: "#fff",
    fontStyle: "italic",
  },
  descanso: {
    fontSize: 18,
    color: "#fff",
    fontStyle: "italic",
  },
}); 
