import { html, ID, Logics, ReactiveState, Styles } from "orino";



export default function Hello() {

    const styles = Styles.createClass({
        button: {
            margin: '20px',
            padding: '5px',
            width: '250px',
            height: '40px',
            backgroundColor: '#2e2e2e',
            border: 'none',
            borderRadius: '5px',
            transition: '0.1s',
            outline: '2px solid rgba(255,255,255, 0)',
            cursor: 'pointer'
        },
        result: {
            fontSize: '8rem',
            width: '100%',
            margin: '20px'
        }
    });

    const id = ID();
    const button_id = ID();

    Logics(() => {

        window.port = 5678;

        const state = new ReactiveState(0);

        setInterval(() => {
            state.increment(1);
            document.getElementById(id).innerHTML = state.state;

        }, 1000);

    });

    Styles.createHover(styles.button, {
        backgroundColor: '#3e3e3e',
        outline: '2px solid rgba(255,255,255, 1)'
    });
    Styles.createActive(styles.button, {
        backgroundColor: 'black'
    });

    return (html`
        <h1 id='${id}' class='${styles.result}'>0</h1>
        <button id='${button_id}' class='${styles['button']}'>Click</button>
    `);

}