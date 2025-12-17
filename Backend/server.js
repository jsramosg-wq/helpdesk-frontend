const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Servir frontend
app.use(express.static(path.join(__dirname, "public")));

// Rutas API
const ticketsRoutes = require(".Routes/tickets.js");
app.use("/api/tickets", ticketsRoutes);

// Ruta principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});
