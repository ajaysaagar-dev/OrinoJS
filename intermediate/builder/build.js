
const ESBUILD = require('esbuild');
const FSEXTRA = require('fs-extra');
const JSOB = require('javascript-obfuscator');
const OPEN = require('open');
const PATH = require('path');


async function BUILD() {

    console.log('orino -> configuring...');

    setTimeout(() => {

        // CREATE DIST
        FSEXTRA.mkdirSync('./dist', { recursive: true });

        // BUILD HTML
        console.log('orino -> building html...');
        FSEXTRA.copyFileSync('./intermediate/templates/index.html', './dist/index.html');

        // BUILD CSS
        console.log('orino -> building css...');
        FSEXTRA.copyFileSync('./public/index.css', './dist/index.css');

        // BUILD JS
        console.log('orino -> building javascript...');
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
        FSEXTRA.writeFileSync('./dist/index.js', indexJS._obfuscatedCode, 'utf-8');

        console.log('orino -> build complete...');

    }, 1000);

}

BUILD();