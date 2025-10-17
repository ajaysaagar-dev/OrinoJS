import { Styles, ThemeColor } from "orino";


const styles = Styles.createClass({
    div: {
        margin: '10px',
        width: '250px',
        aspectRatio: '3/4',
        backgroundColor: ThemeColor('fourth'),
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 0 20px rgba(80,80,80, 0.5)',
        outline: '1px solid white'
    },
    p: {
        margin: '10px',
        width: '100%',
        color: ThemeColor('primary'),
        fontSize: '2rem'
    },
    image: {
        width: '100%'
    }
})

export default function Card(name, url) {
    return (/*html*/`
        <div class='${styles.div}'>
            <p class='${styles.p}'>${name}</p>
            <img class='${styles.image}' src="${url}" alt="">
        </div>
    `);
}