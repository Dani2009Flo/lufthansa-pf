const express = require('express'); // Express Framework verwenden
const path = require('path'); // Zum Umgang mit Dateipfaden

const app = express();
const PORT = 3000;

// Statische Dateien (HTML und CSS) bereitstellen
app.use(express.static(path.join(__dirname, '/')));

// Server starten
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
