import React, { useState } from "react";
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Linking } from "react-native";

export default function PantallaTienda({ navigation }) {
  const [darkMode, setDarkMode] = useState(false);
  const theme = darkMode ? dark : light;

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <View style={[styles.container, { backgroundColor: theme.fondo }]}>
      <ScrollView>
        <Text style={[styles.titulo, { color: theme.titulo }]}>
          Bienvenido al Mundo Fitness
        </Text>

        {/* --- PRODUCTOS --- */}
        <Text style={[styles.sub, { color: theme.sub }]}>💪 Productos a la venta</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {productos.map((p, i) => (
            <ProductoCard key={i} producto={p} theme={theme} />
          ))}
        </ScrollView>

        {/* --- MÁQUINAS --- */}
        <Text style={[styles.sub, { color: theme.sub }]}>🏋️ Máquinas y Equipos de Gym</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {maquinas.map((img, i) => (
            <Image
              key={i}
              source={{ uri: img }}
              style={styles.imgMaquina}
            />
          ))}
        </ScrollView>
        <Text style={[styles.texto, { color: theme.texto }]}>
          Cinta de correr, pesas libres, máquina de remo y más para tu entrenamiento.
        </Text>

        {/* --- CULTURISMO --- */}
        <Text style={[styles.sub, { color: theme.sub }]}>🔥 Culturistas y Noticias</Text>

        {cbum && (
          <>
            <Image source={{ uri: cbum.img }} style={styles.imgCBUM} />
            <Text style={[styles.texto, { color: theme.texto }]}>{cbum.desc}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(cbum.link)}>
              <Text style={[styles.link, { color: theme.link }]}>Seguir en Instagram</Text>
            </TouchableOpacity>
          </>
        )}

        {olympia && (
          <>
            <Image source={{ uri: olympia.img }} style={styles.imgCBUM} />
            <Text style={[styles.texto, { color: theme.texto }]}>{olympia.desc}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(olympia.link)}>
              <Text style={[styles.link, { color: theme.link }]}>Más información</Text>
            </TouchableOpacity>
          </>
        )}

        {/* --- REDES --- */}
        <Text style={[styles.sub, { color: theme.sub }]}>📲 Síguenos</Text>
        {["Instagram", "Facebook", "YouTube"].map((red, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => Linking.openURL(`https://www.${red.toLowerCase()}.com/`)}
          >
            <Text style={[styles.link, { color: theme.link }]}>{red}</Text>
          </TouchableOpacity>
        ))}

        <View style={{ height: 130 }} />
      </ScrollView>

      {/* --- FOOTER --- */}
      <View style={[styles.footer, { backgroundColor: theme.footer }]}>
        <TouchableOpacity
          style={[styles.btnFooter, { backgroundColor: theme.boton }]}
          onPress={() => navigation?.goBack()}
        >
          <Text style={[styles.btnFooterText, { color: theme.texto }]}>Regresar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btnFooter, { backgroundColor: theme.boton }]}
          onPress={toggleTheme}
        >
          <Text style={[styles.btnFooterText, { color: theme.texto }]}>
            {darkMode ? "🌞 Claro" : "🌙 Oscuro"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btnFooter, { backgroundColor: theme.boton }]}
          onPress={() => Linking.openURL("mailto:soporte@fitness.com")}
        >
          <Text style={[styles.btnFooterText, { color: theme.texto }]}>Dudas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// --- COMPONENTE PRODUCTO ---
function ProductoCard({ producto, theme }) {
  const [comprado, setComprado] = useState(false);

  return (
    <View style={[styles.cardProducto, { backgroundColor: theme.card }]}>
      <Image source={{ uri: producto.img }} style={styles.imgProducto} />
      <Text style={[styles.nombreProd, { color: theme.titulo }]}>{producto.nombre}</Text>
      <Text style={[styles.precioProd, { color: theme.sub }]}>${producto.precio} MXN</Text>
      <TouchableOpacity
        style={[styles.btnCompra, { backgroundColor: comprado ? "#28a745" : "#007bff" }]}
        onPress={() => setComprado(true)}
      >
        <Text style={styles.btnCompraText}>
          {comprado ? "Compra realizada" : "Comprar"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// --- DATOS ---
const productos = [
  {
    nombre: "Proteína Whey",
    precio: 799,
    img: "https://gnc.com.mx/media/catalog/product/1/0/107206002_a.png",
  },
  {
    nombre: "Creatina Monohidratada",
    precio: 499,
    img: "https://m.media-amazon.com/images/I/71O3oYyFxBL._UF1000,1000_QL80_.jpg",
  },
  {
    nombre: "Pre-Entreno Explosivo",
    precio: 650,
    img: "https://ultratechnutrition.com/wp/wp-content/uploads/2018/11/pre-no-energy-frutos-rojos.png",
  },
];

const maquinas = [
  "https://www.ironside.com.mx/cdn/shop/files/WhatsAppImage2025-06-05at20.35.49.jpg",
  "https://altera.fit/cdn/shop/files/1600_1600_79a4d32e-1930cacbd52--7ff91923573990805979943.upload.png",
];

const cbum = {
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGtixe6fITROe2rShcxc8YporFSFiPO7LKkg&s",
  desc: "Chris Bumstead (CBUM) - Campeón Classic Physique Mr. Olympia",
  link: "https://www.instagram.com/cbum/",
};

const olympia = {
  img: "https://logos-world.net/wp-content/uploads/2024/01/Olympia-Emblem.png",
  desc: "Mr. Olympia - La competencia más prestigiosa de culturismo",
  link: "https://www.olympiabodybuilding.com/",
};

// --- ESTILOS ---
const styles = StyleSheet.create({
  container: { flex: 1 },
  titulo: { fontSize: 26, fontWeight: "bold", textAlign: "center", marginVertical: 20 },
  sub: { fontSize: 20, fontWeight: "bold", marginVertical: 10, paddingHorizontal: 10 },
  texto: { fontSize: 16, marginBottom: 15, textAlign: "justify", paddingHorizontal: 10 },
  link: { fontSize: 16, marginBottom: 10, paddingHorizontal: 10 },
  cardProducto: { width: 180, borderRadius: 12, padding: 10, marginHorizontal: 5, alignItems: "center", elevation: 3 },
  imgProducto: { width: 140, height: 140, borderRadius: 10, marginBottom: 5 },
  nombreProd: { fontSize: 16, fontWeight: "600", marginBottom: 4 },
  precioProd: { fontSize: 18, fontWeight: "bold" },
  imgMaquina: { width: 240, height: 150, borderRadius: 10, marginHorizontal: 5 },
  imgCBUM: { width: "95%", alignSelf: "center", height: 250, borderRadius: 15, marginBottom: 10 },
  footer: { position: "absolute", bottom: 0, flexDirection: "row", justifyContent: "space-around", width: "100%", paddingVertical: 15, borderTopWidth: 1 },
  btnFooter: { paddingVertical: 10, paddingHorizontal: 12, borderRadius: 10 },
  btnFooterText: { fontSize: 16, fontWeight: "bold" },
  btnCompra: { marginTop: 10, paddingVertical: 8, paddingHorizontal: 15, borderRadius: 8 },
  btnCompraText: { color: "#fff", fontWeight: "bold", fontSize: 14, textAlign: "center" },
});

// --- TEMAS ---
const light = {
  fondo: "#f4f6f9",
  titulo: "#222",
  sub: "#28a745",
  texto: "#444",
  link: "#007bff",
  boton: "#28a745",
  footer: "#fff",
  card: "#ffffff",
};

const dark = {
  fondo: "#111",
  titulo: "#fff",
  sub: "#00ff95",
  texto: "#ddd",
  link: "#4da6ff",
  boton: "#444",
  footer: "#222",
  card: "#333",
};
