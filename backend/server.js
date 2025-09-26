const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
  host: "localhost",
  user: "root",       // tu usuario de MySQL
  password: "papitas12",       // tu password de MySQL
  database: "gymapp"
});


app.get("/comidas/:dia", (req, res) => {
  const { dia } = req.params;
  db.query("SELECT * FROM comidas WHERE dia = ?", [dia], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});


app.post("/comidas", (req, res) => {
  const { dia, tipo, nombre, imagen } = req.body;
  db.query(
    "INSERT INTO comidas (dia, tipo, nombre, imagen) VALUES (?, ?, ?, ?)",
    [dia, tipo, nombre, imagen],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ id: result.insertId });
    }
  );
});


app.delete("/comidas/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM comidas WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ success: true });
  });
});

app.listen(3000, () => console.log("✅ Servidor corriendo en http://localhost:3000"));
