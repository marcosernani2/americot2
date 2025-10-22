const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send(`
    <!doctype html>
    <html>
      <head><meta charset="utf-8"><title>Home</title></head>
      <body>
        <h1>Bem-vindo(a) ao trabalho Node.js 2</h1>
        <p>Rota: /</p>
        <nav>
          <a href="/sobre">Sobre</a> |
          <a href="/contato">Contato</a> |
          <a href="/status">Status</a>
        </nav>
      </body>
    </html>
  `);
});


app.get('/sobre', (req, res) => {
  res.send(`
    <!doctype html>
    <html>
      <head><meta charset="utf-8"><title>Sobre</title></head>
      <body>
        <h1>Sobre esta aplicação perante as proximas</h1>
        <p>Esta é uma aplicação simples baseada no modelo request-response usando Express.</p>
        <a href="/">Voltar</a>
      </body>
    </html>
  `);
});


app.get('/contato', (req, res) => {
  res.send(`
    <!doctype html>
    <html>
      <head><meta charset="utf-8"><title>Contato</title></head>
      <body>
        <h1>Fale conosco prante as orximas </h1>
        <p>E-mail fictício: aluno@example.com</p>
        <a href="/">Voltar</a>
      </body>
    </html>
  `);
});


app.get('/status', (req, res) => {
  res.json({
    status: 'ok',
    servidor: 'rodando corretamente',
    port: PORT,
    versao: '1.1', 
    hora: new Date().toLocaleString()
  });
});



app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});
