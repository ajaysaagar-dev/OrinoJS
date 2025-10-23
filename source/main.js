

import { html, Page, Styles, Theme, ThemeColor } from 'orino';
import Sam from './components/sam';

const Home = new Page('Home');
const About = new Page('About');

export const theme1 = new Theme();
export const theme2 = new Theme();

theme1.addColor('pri', '#1e1e1e');
theme1.addColor('sec', '#ffffff');

theme2.addColor('sec', '#1e1e1e');
theme2.addColor('pri', '#ffffff');

theme1.active();

setTimeout(() => {
    theme2.active();
}, 3000);

const styles = Styles.createClass({
    h1: {
        color: ThemeColor('pri'),
    },
    view: {
        backgroundColor: ThemeColor('sec')
    }
})

Home.style(styles.view);

Home.add(html`
    <h1 class='${styles.h1}'>Hello World</h1>
    <br>
    ${Sam('ajay', 'ai')}
    ${Sam('samuel', 'ai')}
    ${Sam('ajay', 'ai')}
    ${Sam('ajay', 'ai')}
`);

Home.active();