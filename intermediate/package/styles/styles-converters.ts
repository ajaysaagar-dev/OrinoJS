import StylesID from "../id/styles-id";

export function convert_json_to_css_create_class(styles = Object()) {

    // MINUS ADDED
    for (const index_1 in styles) {
        let temp: Record<string, any> = {};
        for (const index_2 in styles[index_1]) {
            temp[AddMinusPlusLowercase(index_2)] = styles[index_1][index_2];
        }
        styles[index_1] = temp;
    }

    // MAKE CSS
    let CSS = '';
    let CLASSES_RAW: Record<string, any> = {};

    for (const index in styles) {
        let styleID = StylesID();
        CLASSES_RAW[index] = ' ' + styleID;
        CSS += '\n\n.' + styleID + ' {\n';
        for (const indexL1 in styles[index]) {
            CSS += '    ' + indexL1 + ': ' + styles[index][indexL1] + ';\n';
        }
        CSS += '}';
    }
    return [CSS, CLASSES_RAW];
}

export function convert_json_to_css_hover(styleClass: string, styles = Object()) {

    // MINUS ADDED
    let temp: Record<string, any> = {};
    for (const index_1 in styles) {
        temp[AddMinusPlusLowercase(index_1)] = styles[index_1];
    }

    styles = temp;

    // MAKE CSS
    let CSS = '';

    CSS += '\n\n.' + styleClass.trim() + ':hover' + ' {\n';
    for (const indexL1 in styles) {
        CSS += '    ' + indexL1 + ': ' + styles[indexL1] + ';\n';
    }
    CSS += '}';
    return CSS;
}

export function convert_json_to_css_active(styleClass: string, styles = Object()) {

    // MINUS ADDED
    let temp: Record<string, any> = {};
    for (const index_1 in styles) {
        temp[AddMinusPlusLowercase(index_1)] = styles[index_1];
    }

    styles = temp;

    // MAKE CSS
    let CSS = '';

    CSS += '\n\n.' + styleClass.trim() + ':active' + ' {\n';
    for (const indexL1 in styles) {
        CSS += '    ' + indexL1 + ': ' + styles[indexL1] + ';\n';
    }
    CSS += '}';
    return CSS;
}

function AddMinusPlusLowercase(string = String()) {
    let data = string.split('');
    let result = '';
    data.forEach(element => {
        if (element >= 'A' && element <= 'Z') result += '-' + element.toLowerCase();
        else result += element;
    });
    return result;
}