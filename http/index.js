const http = require("http"); //se carga el módulo 'http' para generar un servidor en node.js
const host = 'localhost'; //constante del host (dirección IP del servidor)
const port = 8000; //Puerto al que se conectará

//Los puertos 8080 y 8000 se usan como puertos para desarrollo y se utilizan cuando los servidores se están creando o probando.

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.end('<html><body><h1>This is HTML. Mi primer servidor. Atentamente Luz</h1></body></html>');
};
const server = http.createServer(requestListener);
//El servidor escucha las solicitudes
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);  
});
