const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:5173', // Porta padrão do Vite/SvelteKit
  credentials: true,
};

module.exports = cors(corsOptions);
