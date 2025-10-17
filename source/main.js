

import { ID, Logics, Page, Styles, Theme, ThemeColor } from 'orino';
import Card from './components/Card';

export const Theme_1 = new Theme();

Theme_1.addColor('primary', '#450693');
Theme_1.addColor('second', '#8C00FF');
Theme_1.addColor('third', '#FF3F7F');
Theme_1.addColor('fourth', '#FFC400');

export const Theme_2 = new Theme();

Theme_2.addColor('primary', '#777C6D');
Theme_2.addColor('second', '#B7B89F');
Theme_2.addColor('third', '#CBCBCB');
Theme_2.addColor('fourth', '#EEEEEE');

export const Theme_3 = new Theme();

Theme_3.addColor('primary', '#BF092F');
Theme_3.addColor('second', '#132440');
Theme_3.addColor('third', '#16476A');
Theme_3.addColor('fourth', '#3B9797');

export const Theme_4 = new Theme();

Theme_4.addColor('primary', '#0046FF');
Theme_4.addColor('second', '#73C8D2');
Theme_4.addColor('third', '#F5F1DC');
Theme_4.addColor('fourth', '#FF9013');

export const Theme_5 = new Theme();

Theme_5.addColor('primary', '#000B58');
Theme_5.addColor('second', '#003161');
Theme_5.addColor('third', '#006A67');
Theme_5.addColor('fourth', '#FDEB9E');


Theme_4.active();


const styles = Styles.createClass({
    page: {
        backgroundColor: ThemeColor('primary'),
        overflow: 'hidden'
    },
    h1: {
        margin: '10px',
        padding: '10px',
        width: '100dvw',
        fontSize: '3rem',
        color: ThemeColor('fourth')
    },
    button: {
        margin: '20px',
        width: '200px',
        height: '40px',
        backgroundColor: ThemeColor('third'),
        color: ThemeColor('primary'),
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    }
});

const SamplePage = new Page('Sample Page');

SamplePage.style(styles.page);

const id = ID();

let index = 1;

Logics(() => {
    setInterval(() => {
        switch (index) {
            case 1:
                Theme_1.active();
                break;
            case 2:
                Theme_2.active();
                break;
            case 3:
                Theme_3.active();
                break;
            case 4:
                Theme_4.active();
                break;
            case 5:
                Theme_5.active();
                break;
        }
        index++;
        if (index > 5) index = 1;
    }, 1000);
});

Logics(() => {
    document.getElementById(id).addEventListener('click', () => {
        switch (index) {
            case 1:
                Theme_1.active();
                break;
            case 2:
                Theme_2.active();
                break;
            case 3:
                Theme_3.active();
                break;
            case 4:
                Theme_4.active();
                break;
            case 5:
                Theme_5.active();
                break;
        }
        index++;
        if (index > 5) index = 1;
    });
});

SamplePage.add(/*html*/`
    <h1 class='${styles.h1}'>Home</h1>
    <div>
        ${Card('Image 1', 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg')}
        ${Card('Image 2', 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg')}
        ${Card('Image 3', 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg')}
        ${Card('Image 4', 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg')}
        ${Card('Image 5', 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg')}
    </div>
    <button id='${id}' class='${styles.button}'>Change Theme</button>
`);

SamplePage.active();