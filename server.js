
const server = require('./app');

const PORT = process.env.PORT || 5000;

const serverStart = async () => {
  try {
    server.listen(PORT, () => console.log(`Server started on port ${PORT}, http://localhost:${PORT}`));
  } catch (e) {
    console.log("Server doesn't started", e.message);
  }
};
serverStart();
