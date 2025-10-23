import { html, Styles } from "orino";

const styles = Styles.createClass({
    sam1: {
        margin: '10px',
        fontSize: '8rem',
    },
    sam2: {
        margin: '10px',
        fontSize: '8rem',
    }
});

export default function Sam(name, _class) {
    return html`
        <h1 class='${styles.sam}'>${name}</h1>
        <br>
        <p class='${styles.sam}'>${_class}</p>
    `;
}