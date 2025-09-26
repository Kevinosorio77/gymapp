import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function PantallaRutinas() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Rutinas de la Semana</Text>

      {/* Lunes */}
      <View style={styles.card}>
        <Image
          style={styles.img}
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/2964/2964514.png" }}
        />
        <Text style={styles.dia}>Lunes - Piernas</Text>
        <Text style={styles.ejercicio}>1. Sentadillas</Text>
        <Text style={styles.ejercicio}>2. Prensa de Piernas</Text>
        <Text style={styles.ejercicio}>3. Zancadas</Text>
        <Text style={styles.ejercicio}>4. Peso Muerto Rumano</Text>
        <Text style={styles.ejercicio}>5. Elevaciones de Talones</Text>
      </View>

      {/* Martes */}
      <View style={styles.card}>
        <Image
          style={styles.img}
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/2964/2964513.png" }}
        />
        <Text style={styles.dia}>Martes - Pecho</Text>
        <Text style={styles.ejercicio}>1. Press Banca</Text>
        <Text style={styles.ejercicio}>2. Press Inclinado</Text>
        <Text style={styles.ejercicio}>3. Fondos en Paralelas</Text>
        <Text style={styles.ejercicio}>4. Aperturas con Mancuernas</Text>
        <Text style={styles.ejercicio}>5. Push Ups</Text>
        <Text style={styles.ejercicio}>6. Cruce en Poleas</Text>
      </View>

      {/* Miércoles */}
      <View style={styles.card}>
        <Image
          style={styles.img}
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/2964/2964511.png" }}
        />
        <Text style={styles.dia}>Miércoles - Espalda</Text>
        <Text style={styles.ejercicio}>1. Dominadas</Text>
        <Text style={styles.ejercicio}>2. Remo con Barra</Text>
        <Text style={styles.ejercicio}>3. Remo con Mancuerna</Text>
        <Text style={styles.ejercicio}>4. Jalón al Pecho</Text>
        <Text style={styles.ejercicio}>5. Peso Muerto</Text>
      </View>

      {/* Jueves */}
      <View style={styles.card}>
        <Image
          style={styles.img}
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/2964/2964523.png" }}
        />
        <Text style={styles.dia}>Jueves - Hombros</Text>
        <Text style={styles.ejercicio}>1. Press Militar</Text>
        <Text style={styles.ejercicio}>2. Elevaciones Laterales</Text>
        <Text style={styles.ejercicio}>3. Elevaciones Frontales</Text>
        <Text style={styles.ejercicio}>4. Pájaros (Posterior)</Text>
        <Text style={styles.ejercicio}>5. Encogimientos con Barra</Text>
      </View>

      {/* Viernes */}
      <View style={styles.card}>
        <Image
          style={styles.img}
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/2964/2964519.png" }}
        />
        <Text style={styles.dia}>Viernes - Brazos</Text>
        <Text style={styles.ejercicio}>1. Curl con Barra</Text>
        <Text style={styles.ejercicio}>2. Curl Alterno Mancuernas</Text>
        <Text style={styles.ejercicio}>3. Curl Martillo</Text>
        <Text style={styles.ejercicio}>4. Press Francés</Text>
        <Text style={styles.ejercicio}>5. Jalón en Polea (Tríceps)</Text>
      </View>

      {/* Sábado */}
      <View style={styles.card}>
        <Image
          style={styles.img}
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/2964/2964517.png" }}
        />
        <Text style={styles.dia}>Sábado - Full Body</Text>
        <Text style={styles.ejercicio}>1. Sentadillas</Text>
        <Text style={styles.ejercicio}>2. Press Banca</Text>
        <Text style={styles.ejercicio}>3. Peso Muerto</Text>
        <Text style={styles.ejercicio}>4. Dominadas</Text>
        <Text style={styles.ejercicio}>5. Press Militar</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f9",
    padding: 15,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#222",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  img: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  dia: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#007bff",
    textAlign: "center",
  },
  ejercicio: {
    fontSize: 16,
    marginBottom: 5,
    color: "#444",
  },
});
