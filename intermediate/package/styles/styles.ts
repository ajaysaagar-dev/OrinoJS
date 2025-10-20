
import { AspectRatio_Types, Color_Types, Display_Types, Normalized_Types, Numerical_Types } from './_types.ts';
import { convert_json_to_css_active, convert_json_to_css_create_class, convert_json_to_css_hover } from './styles-converters.ts';
import RuntimeCSS from './runtime-css.ts';
import OrinoEnvironment from '../init/init.js';
// GLOBAL VARs
let UniqueStyles = new Set();

// MAIN TYPE
type CSS_PROPERTIES = {

    // GAPS
    margin?: Numerical_Types,
    padding?: Numerical_Types,

    // DIMENTIONS
    width?: Numerical_Types,
    height?: Numerical_Types,
    aspectRatio?: AspectRatio_Types,

    // FILLs
    color?: Color_Types,

    // VISIBILITY
    display?: Display_Types,
    opacity?: Normalized_Types,
}

const __Styles = {
    createClass: <T extends Record<string, CSS_PROPERTIES>>(styles: T) => {
        const [CSS, CLASSES_RAW] = convert_json_to_css_create_class(styles);
        if (!UniqueStyles.has(JSON.stringify(CLASSES_RAW))) {
            if (OrinoEnvironment.isLocalhost())
                RuntimeCSS(String(CSS));
            UniqueStyles.add(JSON.stringify(CLASSES_RAW));
        }

        return CLASSES_RAW;
    },
    createHover: (styleClass: string, styles: CSS_PROPERTIES) => {
        console.log(OrinoEnvironment.isLocalhost());
        const data = convert_json_to_css_hover(styleClass, styles);
        if (OrinoEnvironment.isLocalhost())
            RuntimeCSS(data);
    },
    createActive: (styleClass: string, styles: CSS_PROPERTIES) => {

        const data = convert_json_to_css_active(styleClass, styles);
        if (OrinoEnvironment.isLocalhost())
            RuntimeCSS(data);
    }
}

export default __Styles;