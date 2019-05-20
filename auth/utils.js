const path = require('path'),
  grpc = require('grpc'),
  protoLoader = require('@grpc/proto-loader');

module.exports = {
  loadServices: (package) => {
    const authProtoPath = path.join(__dirname, '..', 'protos', `${package}.proto`),
      authProtoDefination = protoLoader.loadSync(authProtoPath, {});
 
    return grpc.loadPackageDefinition(authProtoDefination)[package];
  }
}