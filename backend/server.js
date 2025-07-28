import http from 'node:http';
import { sendJSONResponse } from './utils/sendJSONResponse.js';

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  sendJSONResponse(res, 200, 'Hello Server');
});

server.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
