
const { createServer } = require('vite');
const path = require('path');
const RuntimeServer = require('./runtime');

// GLOBAL VARs
const rootPath = path.resolve(__dirname, './../../');

// START DEV
const StartDev = async () => {
    const server = await createServer({
        root: rootPath,
        server: {
            port: 5173,
            hmr: {
                host: 'localhost',
                protocol: 'ws',
                port: 5173
            }
        }
    });

    await server.listen(5173, true);
    console.log('Web Host :', 'http://localhost:5173');
    RuntimeServer();

}

// START
StartDev();

module.exports = StartDev;