import OrinoID from "../id/orino-id.ts";

const root = document.querySelector<HTMLElement>('body > #root')!;

export default class __Page {

    // GLOBAL VARs
    pageName = 'OrinoJS';

    // PRIVATE VARs
    #pageElement = <HTMLElement>null!;

    constructor(pageName = String()) {
        // SET  
        this.pageName = pageName;
        // INIT
        this.#init();
    }

    #init() {
        // CREATE AND SET [PAGE]
        const div = document.createElement('div'); // CREATE PAGE
        div.id = String(this.pageName).toLowerCase().replaceAll(' ', '-'); // ID
        div.classList.add('page'); // CLASS NAME
        div.classList.add(String(this.pageName).toLowerCase().replaceAll(' ', '-')); // CLASS NAME
        div.classList.add('nv'); // CLASS NAME
        div.setAttribute('orino-id', OrinoID());
        this.#pageElement = div; // SET CLASS GLOBAL PAGE EL
        root.appendChild(div); // APPEND
    }

    add(html = String()) {
        const div = document.createElement('div'); // CREATE DIV
        div.innerHTML = html; // INNER HTML
        this.#pageElement.appendChild(div); // APPEND
    }

    active() {
        document.querySelectorAll('body > #root > .page').forEach(page => { page.classList.add('nv') }); // NOT VISIBLE OTHER PAGES
        document.title = this.pageName; // SET TITLE
        this.#pageElement.classList.remove('nv'); // MAKE VISIBLE
    }

}