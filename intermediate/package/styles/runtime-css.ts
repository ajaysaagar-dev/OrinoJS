
let initial = true;

export default function RuntimeCSS(styles: string, init: boolean = false) {

    if (initial) init = true;
    initial = false;

    fetch('http://localhost:5678/runtime/styles/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ styles, init })
    })
}