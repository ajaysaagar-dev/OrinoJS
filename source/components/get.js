

import { ID, Logics, Page, Styles, Theme } from 'orino';

export default function Use() {
    const stylse = Styles.create({
        h1: {
            fontSize: '6rem',
            width: '100%',
            backgroundColor: 'var(--c1)'
        },
        button: {
            margin: '50px',
            width: '200px',
            height: '40px',
            color: 'black',
            cursor: 'pointer',
            borderRadius: '10px',
        }
    });

    const id = ID();

    Logics(() => {
        document.getElementById(id).addEventListener('click', () => {
            console.log(id);
        });
    });

    return (/*html*/`
        <h1 class="${stylse.h1}">Hello World</h1>
        <h1 class="${stylse.h1}">Hello World</h1>
        <button id="${id}" class='${stylse.button}'>Login</button>
    `);

}

const theme = new Theme();


theme.log();