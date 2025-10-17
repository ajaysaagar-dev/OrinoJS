

let themes = {};
let themeIndex = 0;

const style = document.createElement('style')!;

export default class __Theme {

    #themeIndex: Number = themeIndex++;

    constructor() { }

    addColor(name: string, value: string) {
    }

    log() {
        console.log(themes, themeIndex);
    }
}