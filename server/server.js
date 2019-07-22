const express = require("express");
const app = express();
const skateCtrl = require("./skateCtrl");
app.use(express.json());

app.get("/api/skateboards", skateCtrl.getAll);
app.get("/api/skateboardBrands", skateCtrl.getByName);
app.post("/api/skateboards", skateCtrl.addBoard);
app.put("/api/skateboards/:id", skateCtrl.update);
app.delete("/api/skateboards/:id", skateCtrl.delete);

const PORT = 5000;
app.listen(PORT, () => console.log(` Pikachu use Thunderbolt on ${PORT}!`));
