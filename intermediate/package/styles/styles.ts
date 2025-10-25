
import { AspectRatio_Types, Color_Types, Display_Types, Normalized_Types, Numerical_Types } from './_types.ts';
import { convert_json_to_css_active, convert_json_to_css_create_class, convert_json_to_css_hover } from './styles-converters.ts';
import RuntimeCSS from './runtime-css.ts';
import { OrinoEnvironment } from '../init/init.js';
// GLOBAL VARs
let UniqueStyles = new Set();

// MAIN TYPE
type CSS_PROPERTIES = {
    // --- POSITIONING ---
    position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
    top?: Numerical_Types;
    right?: Numerical_Types;
    bottom?: Numerical_Types;
    left?: Numerical_Types;
    zIndex?: number | 'auto';

    // --- DISPLAY & VISIBILITY ---
    display?: Display_Types;
    visibility?: 'visible' | 'hidden' | 'collapse';
    opacity?: Normalized_Types;
    overflow?: 'visible' | 'hidden' | 'scroll' | 'auto' | 'clip';
    overflowX?: 'visible' | 'hidden' | 'scroll' | 'auto' | 'clip';
    overflowY?: 'visible' | 'hidden' | 'scroll' | 'auto' | 'clip';
    cursor?: string;
    pointerEvents?: 'auto' | 'none';
    contentVisibility?: 'visible' | 'auto' | 'hidden';

    // --- DIMENSIONS ---
    width?: Numerical_Types;
    minWidth?: Numerical_Types;
    maxWidth?: Numerical_Types;
    height?: Numerical_Types;
    minHeight?: Numerical_Types;
    maxHeight?: Numerical_Types;
    aspectRatio?: AspectRatio_Types;
    boxSizing?: 'content-box' | 'border-box';

    // --- SPACING ---
    margin?: Numerical_Types;
    marginTop?: Numerical_Types;
    marginRight?: Numerical_Types;
    marginBottom?: Numerical_Types;
    marginLeft?: Numerical_Types;
    padding?: Numerical_Types;
    paddingTop?: Numerical_Types;
    paddingRight?: Numerical_Types;
    paddingBottom?: Numerical_Types;
    paddingLeft?: Numerical_Types;
    gap?: Numerical_Types;
    rowGap?: Numerical_Types;
    columnGap?: Numerical_Types;

    // --- FLEXBOX ---
    flex?: string | number;
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: Numerical_Types;
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    justifyContent?:
    | 'flex-start' | 'flex-end' | 'center'
    | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
    alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    alignContent?:
    | 'flex-start' | 'flex-end' | 'center'
    | 'space-between' | 'space-around' | 'stretch';

    // --- GRID ---
    displayGrid?: boolean; // syntactic sugar for display: grid
    gridTemplateColumns?: string;
    gridTemplateRows?: string;
    gridTemplateAreas?: string;
    gridColumn?: string | number;
    gridRow?: string | number;
    gridColumnStart?: string | number;
    gridColumnEnd?: string | number;
    gridRowStart?: string | number;
    gridRowEnd?: string | number;
    justifyItems?: 'start' | 'end' | 'center' | 'stretch';
    justifySelf?: 'auto' | 'start' | 'end' | 'center' | 'stretch';
    placeItems?: string;
    placeContent?: string;

    // --- BACKGROUND ---
    background?: string;
    backgroundColor?: Color_Types;
    backgroundImage?: string;
    backgroundSize?: 'auto' | 'cover' | 'contain' | string;
    backgroundRepeat?: 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat' | string;
    backgroundPosition?: string;
    backgroundAttachment?: 'scroll' | 'fixed' | 'local';
    backgroundClip?: 'border-box' | 'padding-box' | 'content-box' | 'text';

    // --- COLOR & FILL ---
    color?: Color_Types;
    fill?: Color_Types;
    stroke?: Color_Types;

    // --- TYPOGRAPHY ---
    fontFamily?: string;
    fontSize?: Numerical_Types;
    fontWeight?:
    | 'normal' | 'bold' | 'bolder' | 'lighter'
    | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    fontStyle?: 'normal' | 'italic' | 'oblique';
    fontVariant?: string;
    lineHeight?: Numerical_Types | 'normal';
    letterSpacing?: Numerical_Types;
    wordSpacing?: Numerical_Types;
    textAlign?: 'left' | 'right' | 'center' | 'justify' | 'start' | 'end';
    textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
    textDecoration?: string;
    textOverflow?: 'clip' | 'ellipsis' | string;
    whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap';
    wordBreak?: 'normal' | 'break-all' | 'keep-all' | 'break-word';

    // --- BORDERS ---
    border?: string;
    borderTop?: string;
    borderRight?: string;
    borderBottom?: string;
    borderLeft?: string;
    borderWidth?: Numerical_Types;
    borderColor?: Color_Types;
    borderStyle?:
    | 'none' | 'solid' | 'dashed' | 'dotted' | 'double'
    | 'groove' | 'ridge' | 'inset' | 'outset';
    borderRadius?: Numerical_Types;
    borderTopLeftRadius?: Numerical_Types;
    borderTopRightRadius?: Numerical_Types;
    borderBottomLeftRadius?: Numerical_Types;
    borderBottomRightRadius?: Numerical_Types;

    // --- EFFECTS ---
    boxShadow?: string;
    textShadow?: string;
    filter?: string;
    backdropFilter?: string;
    mixBlendMode?: string;

    // --- TRANSITIONS & ANIMATIONS ---
    transition?: string;
    transitionProperty?: string;
    transitionDuration?: string;
    transitionTimingFunction?: string;
    transitionDelay?: string;
    animation?: string;
    animationName?: string;
    animationDuration?: string;
    animationTimingFunction?: string;
    animationDelay?: string;
    animationIterationCount?: string | number;
    animationDirection?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
    animationFillMode?: 'none' | 'forwards' | 'backwards' | 'both';
    animationPlayState?: 'running' | 'paused';

    // --- TRANSFORM ---
    transform?: string;
    transformOrigin?: string;
    perspective?: Numerical_Types;
    perspectiveOrigin?: string;
    backfaceVisibility?: 'visible' | 'hidden';

    // --- CLIP & MASK ---
    clipPath?: string;
    mask?: string;
    maskImage?: string;
    maskSize?: string;

    // --- SCROLL ---
    scrollBehavior?: 'auto' | 'smooth';
    scrollMargin?: Numerical_Types;
    scrollPadding?: Numerical_Types;

    // --- MISC ---
    objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
    objectPosition?: string;
    isolation?: 'auto' | 'isolate';
    userSelect?: 'auto' | 'text' | 'none' | 'contain' | 'all';
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
    willChange?: string;
    clip?: string;
    filterEffects?: string;
};


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