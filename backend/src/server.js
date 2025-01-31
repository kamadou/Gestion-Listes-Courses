const express = require("express");
const itemRoutes = require("./routes/itemRoutes");
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Routes
app.use("/api", itemRoutes);

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});