const express = require("express");
const itemRoutes = require("./routes/itemRoutes");
const app = express();
const PORT = 5000;


app.use(express.json());


app.use("/api", itemRoutes);


app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});