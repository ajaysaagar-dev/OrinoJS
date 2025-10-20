

import { html, Page, Styles } from 'orino';
import Hello from './components/hello';


const Home = new Page('Home');

const styles = Styles.createClass({
    h1: {
        fontSize: '8rem'
    }
})

Home.add(html`
    <h1 class='${styles.h1}'>Hello World</h1>
    <br>
    ${Hello()}
`);

Home.active();