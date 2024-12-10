const express = require("express");
const image_routes = require("./routes/image_route");
require("dotenv").config();

const app = express();
app.use(image_routes);

// 404 Not Found Middleware (for undefined routes)
app.use((req, res, next) => {
    console.error(`404 Error - URL not found: ${req.originalUrl}`);
    res.status(404).json({ error: '404: Resource Not Found' });
});

const PORT = process.env.PORT_IMAGE_SERVICE || 3001;

app.listen(PORT, () => {
  console.log(`Image service is running at ${PORT}`);
});
