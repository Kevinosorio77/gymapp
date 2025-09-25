import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";

export default function PantallaComidas() {
  const [diaSeleccionado, setDiaSeleccionado] = useState("Lunes");

  // Plan de comidas por día
  const planComidas = {
    Lunes: {
      desayuno: {
        img: "https://www.cocinavital.mx/wp-content/uploads/2021/01/avena-con-frutas.jpg",
        items: ["80g de avena", "1 plátano o 1 manzana", "1 taza de leche descremada", "10 almendras"],
      },
      almuerzo: {
        img: "https://www.recetasderechupete.com/wp-content/uploads/2021/07/Arroz-integral-con-pollo.jpg",
        items: ["150g de pechuga de pollo", "100g de arroz integral", "1 taza de brócoli", "1 cdita de aceite de oliva"],
      },
      merienda: {
        img: "https://www.clara.es/medio/2023/03/22/yogur-griego-propiedades_04bff9b0_230322145900_1280x720.jpg",
        items: ["1 taza de yogurt griego natural", "1 cdita de miel", "30g de nueces o almendras"],
      },
      cena: {
        img: "https://www.recetasderechupete.com/wp-content/uploads/2022/01/filetes-de-merluza-a-la-plancha.jpg",
        items: ["150g de pescado (salmón o merluza)", "1 taza de ensalada verde", "½ aguacate", "1 rodaja de pan integral"],
      },
    },
    Martes: {
      desayuno: {
        img: "https://t2.uc.ltmcdn.com/es/posts/8/8/1/huevos_revueltos_con_tostadas_21188_600.jpg",
        items: ["2 huevos revueltos", "2 rebanadas de pan integral", "1 taza de café o té"],
      },
      almuerzo: {
        img: "https://www.pequerecetas.com/wp-content/uploads/2016/08/lentejas-con-verduras.jpg",
        items: ["150g de lentejas cocidas", "Verduras al vapor", "1 cdita de aceite de oliva"],
      },
      merienda: {
        img: "https://www.pequerecetas.com/wp-content/uploads/2019/05/smoothie-fresa.jpg",
        items: ["1 batido de fresa y plátano", "10 almendras"],
      },
      cena: {
        img: "https://www.paulinacocina.net/wp-content/uploads/2021/03/ensalada-mixta-receta.jpg",
        items: ["Ensalada mixta (tomate, lechuga, pepino)", "1 lata de atún en agua", "1 rebanada de pan integral"],
      },
    },
    Miércoles: {
      desayuno: {
        img: "https://www.recetasderechupete.com/wp-content/uploads/2016/03/smoothie-verde.jpg",
        items: ["1 smoothie verde (espinaca, piña, plátano)", "2 galletas integrales"],
      },
      almuerzo: {
        img: "https://www.recetasderechupete.com/wp-content/uploads/2015/06/pasta-integral-con-verduras.jpg",
        items: ["100g de pasta integral", "150g de pechuga de pavo", "Verduras salteadas"],
      },
      merienda: {
        img: "https://www.recetasderechupete.com/wp-content/uploads/2018/01/fruta.jpg",
        items: ["1 manzana", "1 puñado de nueces"],
      },
      cena: {
        img: "https://www.recetasderechupete.com/wp-content/uploads/2017/11/sopa-calabaza.jpg",
        items: ["Sopa de calabaza", "1 tostada integral", "1 yogur natural"],
      },
    },
    Jueves: {
      desayuno: {
        img: "https://www.recetasderechupete.com/wp-content/uploads/2014/06/tostadas-aguacate.jpg",
        items: ["2 tostadas con aguacate", "1 huevo cocido", "1 vaso de leche descremada"],
      },
      almuerzo: {
        img: "https://www.recetasderechupete.com/wp-content/uploads/2019/01/filete-ternera-plancha.jpg",
        items: ["150g de carne magra", "Ensalada de espinaca y tomate", "100g de arroz integral"],
      },
      merienda: {
        img: "https://www.recetasderechupete.com/wp-content/uploads/2015/03/batido-chocolate.jpg",
        items: ["1 batido de cacao sin azúcar", "2 galletas integrales"],
      },
      cena: {
        img: "https://www.recetasderechupete.com/wp-content/uploads/2017/06/pollo-plancha.jpg",
        items: ["150g de pechuga de pollo a la plancha", "1 ensalada verde", "½ aguacate"],
      },
    },
    Viernes: {
      desayuno: {
        img: "https://www.recetasderechupete.com/wp-content/uploads/2014/03/pan-integral-mantequilla.jpg",
        items: ["2 rebanadas de pan integral", "1 cdita de mantequilla de maní", "1 taza de café"],
      },
      almuerzo: {
        img: "https://www.recetasderechupete.com/wp-content/uploads/2017/07/garbanzos-ensalada.jpg",
        items: ["Ensalada de garbanzos", "1 rebanada de pan integral", "1 cdita de aceite de oliva"],
      },
      merienda: {
        img: "https://www.recetasderechupete.com/wp-content/uploads/2017/02/yogur-natural.jpg",
        items: ["1 yogur natural", "30g de almendras"],
      },
      cena: {
        img: "https://www.recetasderechupete.com/wp-content/uploads/2018/03/tortilla-espinacas.jpg",
        items: ["Tortilla de espinacas", "1 ensalada pequeña", "1 rebanada de pan integral"],
      },
    },
    Sábado: {
      desayuno: {
        img: "https://www.recetasderechupete.com/wp-content/uploads/2015/03/panqueques.jpg",
        items: ["2 panqueques integrales", "Miel natural", "1 vaso de leche descremada"],
      },
      almuerzo: {
        img: "https://www.recetasderechupete.com/wp-content/uploads/2017/03/pollo-asado.jpg",
        items: ["150g de pollo asado", "Papas al horno", "Ensalada verde"],
      },
      merienda: {
        img: "https://www.recetasderechupete.com/wp-content/uploads/2018/02/smoothie-mango.jpg",
        items: ["1 smoothie de mango", "1 puñado de nueces"],
      },
      cena: {
        img: "https://www.recetasderechupete.com/wp-content/uploads/2016/07/sopa-verduras.jpg",
        items: ["Sopa de verduras", "1 rebanada de pan integral", "1 yogur natural"],
      },
    },
    Domingo: {
      desayuno: {
        img: "https://www.recetasderechupete.com/wp-content/uploads/2015/06/huevos-tomate.jpg",
        items: ["2 huevos estrellados", "2 tostadas integrales", "1 vaso de jugo de naranja"],
      },
      almuerzo: {
        img: "https://www.recetasderechupete.com/wp-content/uploads/2018/02/paella.jpg",
        items: ["150g de paella de mariscos", "1 ensalada pequeña"],
      },
      merienda: {
        img: "https://www.recetasderechupete.com/wp-content/uploads/2016/05/batido-chocolate-platano.jpg",
        items: ["1 batido de plátano y cacao", "10 almendras"],
      },
      cena: {
        img: "https://www.recetasderechupete.com/wp-content/uploads/2016/09/ensalada-pollo.jpg",
        items: ["Ensalada de pollo", "1 tostada integral", "1 yogur natural"],
      },
    },
  };

  const comidas = planComidas[diaSeleccionado];

  return (
    <View style={styles.container}>
      {/* Selector de días */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.diasContainer}>
        {Object.keys(planComidas).map((dia) => (
          <TouchableOpacity key={dia} onPress={() => setDiaSeleccionado(dia)} style={[styles.diaBtn, diaSeleccionado === dia && styles.diaSeleccionado]}>
            <Text style={[styles.diaTexto, diaSeleccionado === dia && styles.diaTextoSel]}>{dia}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView>
        <Text style={styles.titulo}>Plan de Comidas ({diaSeleccionado})</Text>

        {/* Render dinámico de comidas */}
        {Object.entries(comidas).map(([tipo, datos]) => (
          <View key={tipo} style={styles.card}>
            <Image style={styles.img} source={{ uri: datos.img }} />
            <Text style={styles.comida}>{tipo.charAt(0).toUpperCase() + tipo.slice(1)}</Text>
            {datos.items.map((item, i) => (
              <Text key={i} style={styles.texto}>• {item}</Text>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f9",
    paddingTop: 40,
  },
  diasContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  diaBtn: {
    backgroundColor: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
  },
  diaSeleccionado: {
    backgroundColor: "#28a745",
  },
  diaTexto: {
    fontSize: 16,
    color: "#333",
  },
  diaTextoSel: {
    color: "#fff",
    fontWeight: "bold",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
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
    marginHorizontal: 15,
  },
  img: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  comida: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#28a745",
    textAlign: "center",
  },
  texto: {
    fontSize: 16,
    marginBottom: 5,
    color: "#444",
  },
});

