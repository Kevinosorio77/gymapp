import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput, Button } from "react-native";

export default function PantallaComidas() {
  const [diaSeleccionado, setDiaSeleccionado] = useState("Lunes");
  const [comidas, setComidas] = useState([]);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoTipo, setNuevoTipo] = useState("desayuno");

  // cargar comidas desde la API
  const cargarComidas = () => {
    fetch(`http://localhost:3000/comidas/${diaSeleccionado}`)
      .then(res => res.json())
      .then(data => setComidas(data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    cargarComidas();
  }, [diaSeleccionado]);

  // agregar comida
  const agregarComida = () => {
    fetch("http://localhost:3000/comidas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        dia: diaSeleccionado,
        tipo: nuevoTipo,
        nombre: nuevoNombre,
        imagen: "https://picsum.photos/200" // por ahora una img random
      }),
    })
      .then(() => {
        setNuevoNombre("");
        cargarComidas();
      })
      .catch(err => console.error(err));
  };

  // eliminar comida
  const eliminarComida = (id) => {
    fetch(`http://localhost:3000/comidas/${id}`, { method: "DELETE" })
      .then(() => cargarComidas())
      .catch(err => console.error(err));
  };

  return (
    <View style={styles.container}>
      {/* Días */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.diasContainer}>
        {["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"].map((dia) => (
          <TouchableOpacity key={dia} onPress={() => setDiaSeleccionado(dia)} style={[styles.diaBtn, diaSeleccionado === dia && styles.diaSeleccionado]}>
            <Text style={[styles.diaTexto, diaSeleccionado === dia && styles.diaTextoSel]}>{dia}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.titulo}>Plan de Comidas ({diaSeleccionado})</Text>

      {/* Lista de comidas */}
      <ScrollView>
        {comidas.map((c) => (
          <View key={c.id} style={styles.card}>
            <Image style={styles.img} source={{ uri: c.imagen }} />
            <Text style={styles.comida}>{c.tipo}</Text>
            <Text style={styles.texto}>• {c.nombre}</Text>
            <Button title="Eliminar" color="red" onPress={() => eliminarComida(c.id)} />
          </View>
        ))}
      </ScrollView>

      {/* Formulario para agregar */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nueva comida..."
          value={nuevoNombre}
          onChangeText={setNuevoNombre}
        />
        <Button title="Agregar" onPress={agregarComida} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f6f9", paddingTop: 40 },
  diasContainer: { flexDirection: "row", 
    paddingHorizontal: 10, 
    marginBottom: 10 },
  diaBtn: { backgroundColor: "#eee",
     paddingVertical: 10, 
     paddingHorizontal: 15, 
     borderRadius: 20, 
     marginRight: 10 },
  diaSeleccionado: { backgroundColor: "#28a745" },
  diaTexto: { fontSize: 16,
     color: "#333" },
  diaTextoSel: { color: "#fff", 
    fontWeight: "bold" },
  titulo: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 15, color: "#222" },
  card: { backgroundColor: "#fff", padding: 20, borderRadius: 15, marginBottom: 20, shadowColor: "#000", shadowOpacity: 0.1, shadowOffset: { width: 0, height: 4 }, shadowRadius: 6, elevation: 5, marginHorizontal: 15 },
  img: { width: "100%", height: 150, borderRadius: 10, marginBottom: 10 },
  comida: { fontSize: 20, fontWeight: "bold", marginBottom: 10, color: "#28a745", textAlign: "center" },
  texto: { fontSize: 16, marginBottom: 5, color: "#444" },
  form: { flexDirection: "row", alignItems: "center", padding: 10, backgroundColor: "#fff" },
  input: { flex: 1, borderWidth: 1, borderColor: "#ccc", borderRadius: 10, paddingHorizontal: 10, marginRight: 10 },
});
