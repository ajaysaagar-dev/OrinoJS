
import { AspectRatio_Types, Color_Types, Display_Types, Normalized_Types, Numerical_Types } from './_types.ts';
import ConvertJsonToCSS from './converters.ts';
import RuntimeCSS from './runtime-css.ts';

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

        const [CSS, CLASSES_RAW] = ConvertJsonToCSS(styles);
        if (!UniqueStyles.has(JSON.stringify(CLASSES_RAW))) {
            RuntimeCSS(String(CSS));
            UniqueStyles.add(JSON.stringify(CLASSES_RAW));
        }

        return CLASSES_RAW;
    }
}

export default __Styles;