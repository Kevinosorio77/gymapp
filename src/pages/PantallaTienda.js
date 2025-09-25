import React from "react";
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Linking } from "react-native";

export default function PantallaTienda() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Bienvenido al Mundo Fitness</Text>

      {/* Sección de Máquinas de Gym */}
      <Text style={styles.seccionTitulo}>Máquinas y Equipos de Gym</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imagenesScroll}>
        <Image
          source={{ uri: "https://www.bodybuilding.com/images/2020/xdb-cardio-machine.jpg" }}
          style={styles.imagenMaquina}
        />
        <Image
          source={{ uri: "https://cdn.muscleandfitness.com/media/digital/ux/2021/12/free-weights-1.jpg" }}
          style={styles.imagenMaquina}
        />
        <Image
          source={{ uri: "https://www.verywellfit.com/thmb/UcY0r7QoiZ4h9JqO6h9n2P2A_7A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/exercise-machine-5a1f0e041d640400371c033e.jpg" }}
          style={styles.imagenMaquina}
        />
      </ScrollView>
      <Text style={styles.texto}>Cinta de correr, pesas libres, máquina de remo y más para tu entrenamiento.</Text>

      {/* Sección CBUM */}
      <Text style={styles.seccionTitulo}>Culturistas y Noticias</Text>
      <Image
        source={{ uri: "https://i.pinimg.com/originals/1f/56/2b/1f562bc8d48a6f5aeb1455b7f0ff9e6b.jpg" }}
        style={styles.imagenCBUM}
      />
      <Text style={styles.texto}>Chris Bumstead (CBUM) - Campeón Classic Physique Mr. Olympia</Text>
      <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com/cbum/")}>
        <Text style={styles.link}>Seguir en Instagram</Text>
      </TouchableOpacity>

      {/* Sección Olympia */}
      <Image
        source={{ uri: "https://muscleinsider.com/wp-content/uploads/2021/09/mr-olympia.jpg" }}
        style={styles.imagenCBUM}
      />
      <Text style={styles.texto}>Mr. Olympia - La competencia más prestigiosa de culturismo</Text>
      <TouchableOpacity onPress={() => Linking.openURL("https://www.olympiabodybuilding.com/")}>
        <Text style={styles.link}>Más información</Text>
      </TouchableOpacity>

      {/* Sección Redes y Contacto */}
      <Text style={styles.seccionTitulo}>Síguenos</Text>
      <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com/")}>
        <Text style={styles.link}>Instagram</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/")}>
        <Text style={styles.link}>Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL("https://www.youtube.com/")}>
        <Text style={styles.link}>YouTube</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f6f9", padding: 15 },
  titulo: { fontSize: 28, fontWeight: "bold", textAlign: "center", marginBottom: 20, color: "#222" },
  seccionTitulo: { fontSize: 22, fontWeight: "bold", color: "#28a745", marginVertical: 10 },
  texto: { fontSize: 16, color: "#444", marginBottom: 15 },
  imagenesScroll: { marginVertical: 10 },
  imagenMaquina: { width: 250, height: 150, borderRadius: 10, marginRight: 10 },
  imagenCBUM: { width: "100%", height: 250, borderRadius: 15, marginBottom: 10 },
  link: { color: "#007bff", fontSize: 16, marginBottom: 10 },
});
