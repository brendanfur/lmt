'use strict';

// Instantiate Hapi
const Hapi = require('hapi');

// Add Connections
const server = new Hapi.server({
    port: 3000,
    host: 'localhost'
});

// Home Route
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, h) {
        return '<h1>Hello!</h1>';
    }
});

// Dynamic Route
server.route({
    method:'GET',
    path:'/user/{name}',
    handler: (request, h) => {
        return 'Hello, '+request.params.name;
    }
});

// Add Server
const init = async () => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

// Process Errors
process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

// Start Server
init();