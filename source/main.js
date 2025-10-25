

<<<<<<< HEAD
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
=======
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
>>>>>>> 92cb4be774ed0c51aa3340d32715fbedd64730e7
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