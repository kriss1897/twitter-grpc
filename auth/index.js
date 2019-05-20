// requirements
const { ServerCredentials, Server } = require('grpc'),
  { AuthService } = require('./utils').loadServices('auth'),
  handlers = require('./handlers.js');

function main () {
  const server = new Server();

  server.addService(AuthService.service, handlers);

  // gRPC server
  server.bind('localhost:50051', ServerCredentials.createInsecure());
  server.start();

  console.log('gRPC server running at http://127.0.0.1:50051');
}

main();
