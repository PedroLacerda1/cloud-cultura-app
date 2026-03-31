const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Aplicação rodando na nuvem com CI/CD 🚀❤️');
});

app.get('/status', (req, res) => {
  res.json({
    status: "OK",
    mensagem: "Pipeline funcionando com sucesso"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});