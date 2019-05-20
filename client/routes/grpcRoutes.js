// requirements
const path = require('path');
const protoLoader = require('@grpc/proto-loader');
const grpc = require('grpc');

const authProtoPath = path.join(__dirname, '..', '..', 'protos', 'auth.proto');
const authProtoDefinition = protoLoader.loadSync(authProtoPath);
const { AuthService } = grpc.loadPackageDefinition(authProtoDefinition).auth;
const client = new AuthService('localhost:50051', grpc.credentials.createInsecure());

const login = (req, res) => {
  client.login(req.body, (err, result) => {
    res.json(result);
  });
};
const register = (req, res) => {
  client.register(req.body, (err, result) => {
    res.json(result);
  });
};

module.exports = { login, register };