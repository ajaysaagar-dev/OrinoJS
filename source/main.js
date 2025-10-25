

import { html, Page, Styles } from 'orino';
import Hello from './components/hello';
import GoogleFonts from '@orinojs/google-fonts';
import { OrinoEnvironment } from 'orino/init/init';

GoogleFonts.fontFamily('Aladin').load();
GoogleFonts.fontFamily('Aclonica').load();
GoogleFonts.fontFamily('Alike').load();
GoogleFonts.fontFamily('Handlee').load();
GoogleFonts.fontFamily('B612 Mono').load();
GoogleFonts.fontFamily('Radley').load();
GoogleFonts.fontFamily('NTR').load();
GoogleFonts.fontFamily('IBM Plex Sans').load();

OrinoEnvironment.internalLogs(true);

const Home = new Page('Home');
const Dashboard = new Page('Dashboard');

const styles = Styles.createClass({
    h1: {
        fontSize: '8rem',
        borderTopLeftRadius: '50px',
        fontFamily: 'Aladin'
    }
})

Home.add(html`
    <h1 class='${styles.h1}'>Hello World</h1>
    <br>
    ${Hello()}
`);

Home.active();