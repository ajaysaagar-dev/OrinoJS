
const ESBUILD = require('esbuild');
const FSEXTRA = require('fs-extra');
const JSOB = require('javascript-obfuscator');
const OPEN = require('open');
const PATH = require('path');


async function BUILD() {

    setTimeout(() => {
        FSEXTRA.mkdirSync('./dist', { recursive: true });

        // BUILD HTML
        FSEXTRA.copyFileSync('./intermediate/templates/index.html', './dist/index.html');

        // BUILD JS
        ESBUILD.buildSync({
            entryPoints: ['./source/main.js'],
            bundle: true,
            platform: 'browser',
            outfile: './dist/index.js',
        });
        let indexJS = FSEXTRA.readFileSync('./dist/index.js', 'utf-8');
        indexJS = JSOB.obfuscate(indexJS, {
            compact: false,
            simplify: true,
            stringArray: true,
            stringArrayEncoding: ['base64'],
            stringArrayIndexShift: true,
            ignoreImports: true,
            numbersToExpressions: true
        });
        console.log(indexJS._obfuscatedCode);
        FSEXTRA.writeFileSync('./dist/index.js', indexJS._obfuscatedCode, 'utf-8');

        // BUILD CSS
        FSEXTRA.copyFileSync('./public/index.css', './dist/index.css');
    }, 2000);

}

BUILD();