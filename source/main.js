

import { Page, Styles } from 'orino';
import Use from './components/get';

const Home_Page = new Page('Home Page');
const List_Page = new Page('List Page');

Home_Page.add(/*html*/`
    ${Use()}
    ${Use()}
    ${Use()}
`);

Home_Page.active();