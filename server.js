// const server = require('./app');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

const serverStart = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}, http://localhost:${PORT}`));
  } catch (e) {
    console.log("Server doesn't started", e.message);
  }
};

module.exports = { serverStart, app };
