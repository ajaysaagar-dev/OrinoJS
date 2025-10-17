

const EXPRESS = require('express');
const CORS = require('cors');
const FSEXTRA = require('fs-extra');
const PATH = require('path');

// GLOBAL VARs
const rootPath = PATH.resolve(__dirname, './../../');

// APP
const App = EXPRESS();

// APP CONFIGS
App.use(CORS());
App.use(EXPRESS.json());

function RuntimeServer() {

    // POST
    App.post('/runtime/styles', (req, res) => {
        console.log(rootPath);
        const { styles, init } = req.body; // GET BODY
        if (init) {
            const default_styles = FSEXTRA.readFileSync(PATH.join(rootPath, 'intermediate', 'templates', 'template.css'), 'utf-8'); // GET DEFAULT STYLES
            FSEXTRA.writeFileSync(PATH.join(rootPath, 'public', 'index.css'), default_styles + styles, 'utf-8'); // WRITE FRESH STYLES
        }
        else {
            const current_styles = FSEXTRA.readFileSync(PATH.join(rootPath, 'public', 'index.css'), 'utf-8'); // GET CURRENT STYLES
            FSEXTRA.writeFileSync(PATH.join(rootPath, 'public', 'index.css'), current_styles + styles, 'utf-8'); // WRITE ADDITION STYLES
        }
        // JSON RESPONSE
        res.json({
            method: 'POST',
            operation: 'Success'
        });
    });

    // LISTEN
    App.listen(5678);

}

module.exports = RuntimeServer;