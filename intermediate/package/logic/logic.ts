

export default function __Logic(logics: Function) {
    setTimeout(() => {
        logics();
    }, 0);
}