
let themes: Record<string, any> = {};
let themeIndex = 0;

const style = document.createElement('style')!;
style.id = 'themes';
document.head.appendChild(style);

export default class __Theme {

    #themeIndex: Number = themeIndex++;

    constructor() { }

    addColor(name: string, value: string) {
        if (!themes[String(this.#themeIndex)])
            themes[String(this.#themeIndex)] = {}
        themes[String(this.#themeIndex)][name] = value;
    }

    useColor(name: string) {
        return `var(--${name})`;
    }

    active() {
        style.innerHTML = `:root {`;
        for (const key in themes[String(this.#themeIndex)]) {
            style.innerHTML += '--' + key + ':';
            style.innerHTML += themes[String(this.#themeIndex)][key] + ';';
        }
        style.innerHTML += '}';
    }

    log() {
        console.log(themes, themeIndex);
    }
}