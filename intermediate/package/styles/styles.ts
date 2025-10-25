
import { AspectRatio_Types, Color_Types, Display_Types, Normalized_Types, Numerical_Types, Transform_Types } from './_types.ts';
import { convert_json_to_css_active, convert_json_to_css_create_class, convert_json_to_css_hover } from './styles-converters.ts';
import RuntimeCSS from './runtime-css.ts';
import { __OrinoEnvironment } from '../init/init.js';
// GLOBAL VARs
let UniqueStyles = new Set();

// MAIN TYPE
type CSS_PROPERTIES = {

    // --- POSITIONING ---
    /** Specifies the type of positioning method used for an element. */
    position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
    /** Sets the top edge of a positioned element. */
    top?: Numerical_Types;
    /** Sets the right edge of a positioned element. */
    right?: Numerical_Types;
    /** Sets the bottom edge of a positioned element. */
    bottom?: Numerical_Types;
    /** Sets the left edge of a positioned element. */
    left?: Numerical_Types;
    /** Specifies the stack order of an element (which element should be in front of or behind others). */
    zIndex?: number | 'auto';

    // --- DISPLAY & VISIBILITY ---
    /** Specifies how an element is displayed (e.g., block, inline, flex, grid). */
    display?: Display_Types;
    /** Specifies whether an element is visible or hidden. */
    visibility?: 'visible' | 'hidden' | 'collapse';
    /** Sets the transparency level of an element (0.0 to 1.0). */
    opacity?: Normalized_Types;
    /** Specifies how to handle content that overflows the element's box in both directions. */
    overflow?: 'visible' | 'hidden' | 'scroll' | 'auto' | 'clip';
    /** Specifies how to handle content that overflows the element's box horizontally. */
    overflowX?: 'visible' | 'hidden' | 'scroll' | 'auto' | 'clip';
    /** Specifies how to handle content that overflows the element's box vertically. */
    overflowY?: 'visible' | 'hidden' | 'scroll' | 'auto' | 'clip';
    /** Specifies the type of cursor to display when pointing over an element. */
    cursor?: string;
    /** Specifies whether or not an element reacts to pointer events (e.g., mouse clicks). */
    pointerEvents?: 'auto' | 'none';
    /** Controls whether an element renders its content and allows user agents to skip its rendering if it's not relevant. */
    contentVisibility?: 'visible' | 'auto' | 'hidden';

    // --- DIMENSIONS ---
    /** Sets the width of an element. */
    width?: Numerical_Types;
    /** Sets the minimum width of an element. */
    minWidth?: Numerical_Types;
    /** Sets the maximum width of an element. */
    maxWidth?: Numerical_Types;
    /** Sets the height of an element. */
    height?: Numerical_Types;
    /** Sets the minimum height of an element. */
    minHeight?: Numerical_Types;
    /** Sets the maximum height of an element. */
    maxHeight?: Numerical_Types;
    /** Sets the preferred ratio of height to width for the box. */
    aspectRatio?: AspectRatio_Types;
    /** Defines how the width and height of an element are calculated: should include padding and border, or not. */
    boxSizing?: 'content-box' | 'border-box';

    // --- SPACING ---
    /** The shorthand for setting the gap (margin) between the current element and the nearest element on all four sides. */
    margin?: Numerical_Types;
    /** Sets the gap (margin) on the top side of the element. */
    marginTop?: Numerical_Types;
    /** Sets the gap (margin) on the right side of the element. */
    marginRight?: Numerical_Types;
    /** Sets the gap (margin) on the bottom side of the element. */
    marginBottom?: Numerical_Types;
    /** Sets the gap (margin) on the left side of the element. */
    marginLeft?: Numerical_Types;
    /** Shorthand for setting the inner spacing (padding) on all four sides of an element. */
    padding?: Numerical_Types;
    /** Sets the inner spacing (padding) on the top side of the element. */
    paddingTop?: Numerical_Types;
    /** Sets the inner spacing (padding) on the right side of the element. */
    paddingRight?: Numerical_Types;
    /** Sets the inner spacing (padding) on the bottom side of the element. */
    paddingBottom?: Numerical_Types;
    /** Sets the inner spacing (padding) on the left side of the element. */
    paddingLeft?: Numerical_Types;
    /** Specifies the size of the gaps between the rows and columns in flex and grid layouts (shorthand). */
    gap?: Numerical_Types;
    /** Specifies the size of the gap between the rows in flex and grid layouts. */
    rowGap?: Numerical_Types;
    /** Specifies the size of the gap between the columns in flex and grid layouts. */
    columnGap?: Numerical_Types;

    // --- FLEXBOX ---
    /** Shorthand for flex-grow, flex-shrink, and flex-basis. */
    flex?: string | number;
    /** Specifies how much a flex item will grow relative to the rest of the flex items. */
    flexGrow?: number;
    /** Specifies how much a flex item will shrink relative to the rest of the flex items. */
    flexShrink?: number;
    /** Specifies the initial main size of a flex item before any available space is distributed. */
    flexBasis?: Numerical_Types;
    /** Establishes the main axis, thus defining the direction of flex items. */
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    /** Specifies whether flex items are forced onto one line or can wrap onto multiple lines. */
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    /** Aligns flex items along the main axis of the current container. */
    justifyContent?:
    | 'flex-start' | 'flex-end' | 'center'
    | 'space-between' | 'space-around' | 'space-evenly';
    /** Aligns flex items along the cross axis of the current container. */
    alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
    /** Overrides the container's `alignItems` property for a single flex item. */
    alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    /** Aligns a container's lines within the flex container when there is extra space in the cross-axis. */
    alignContent?:
    | 'flex-start' | 'flex-end' | 'center'
    | 'space-between' | 'space-around' | 'stretch';

    // --- GRID ---
    /** A non-standard, convenient way to set 'display: grid' */
    displayGrid?: boolean; // syntactic sugar for display: grid
    /** Defines the names and sizes of the columns in the grid layout. */
    gridTemplateColumns?: string;
    /** Defines the names and sizes of the rows in the grid layout. */
    gridTemplateRows?: string;
    /** Defines the structure of the grid by referencing the names of the grid areas. */
    gridTemplateAreas?: string;
    /** Shorthand for grid-column-start and grid-column-end. */
    gridColumn?: string | number;
    /** Shorthand for grid-row-start and grid-row-end. */
    gridRow?: string | number;
    /** Specifies a grid item's starting position within the grid column. */
    gridColumnStart?: string | number;
    /** Specifies a grid item's ending position within the grid column. */
    gridColumnEnd?: string | number;
    /** Specifies a grid item's starting position within the grid row. */
    gridRowStart?: string | number;
    /** Specifies a grid item's ending position within the grid row. */
    gridRowEnd?: string | number;
    /** Aligns grid items along the inline (row) axis. */
    justifyItems?: 'start' | 'end' | 'center' | 'stretch';
    /** Aligns a single grid item along the inline (row) axis. */
    justifySelf?: 'auto' | 'start' | 'end' | 'center' | 'stretch';
    /** Shorthand for setting `align-items` and `justify-items`. */
    placeItems?: string;
    /** Shorthand for setting `align-content` and `justify-content`. */
    placeContent?: string;

    // --- BACKGROUND ---
    /** Shorthand property for all individual background properties. */
    background?: string;
    /** Sets the background color of an element. */
    backgroundColor?: Color_Types;
    /** Sets one or more background images for an element. */
    backgroundImage?: string;
    /** Specifies the size of the background images. */
    backgroundSize?: 'auto' | 'cover' | 'contain' | string;
    /** Specifies if/how the background image is repeated. */
    backgroundRepeat?: 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat' | string;
    /** Specifies the position of the background image. */
    backgroundPosition?: string;
    /** Specifies whether the background image scrolls with the rest of the page or is fixed. */
    backgroundAttachment?: 'scroll' | 'fixed' | 'local';
    /** Specifies the painting area of the background. */
    backgroundClip?: 'border-box' | 'padding-box' | 'content-box' | 'text';

    // --- COLOR & FILL ---
    /** Sets the foreground color of an element's text content. */
    color?: Color_Types;
    /** Sets the color of the inside of an SVG shape or text. */
    fill?: Color_Types;
    /** Sets the color of the outline or border of an SVG shape. */
    stroke?: Color_Types;

    // --- TYPOGRAPHY ---
    /** Specifies a prioritized list of font family names or generic family names. */
    fontFamily?: string;
    /** Sets the size of the font. */
    fontSize?: Numerical_Types;
    /** Specifies the weight or boldness of the font. */
    fontWeight?:
    | 'normal' | 'bold' | 'bolder' | 'lighter'
    | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    /** Specifies the font style for the text (e.g., italic). */
    fontStyle?: 'normal' | 'italic' | 'oblique';
    /** Specifies alternate glyphs and other features like small-caps. */
    fontVariant?: string;
    /** Sets the distance between lines of text. */
    lineHeight?: Numerical_Types | 'normal';
    /** Sets the spacing behavior between text characters. */
    letterSpacing?: Numerical_Types;
    /** Sets the spacing behavior between words. */
    wordSpacing?: Numerical_Types;
    /** Aligns the text content in an element. */
    textAlign?: 'left' | 'right' | 'center' | 'justify' | 'start' | 'end';
    /** Controls the capitalization of text. */
    textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
    /** Sets the style of the line applied to text (e.g., underline, overline). */
    textDecoration?: string;
    /** Specifies how hidden overflow content is signaled to users (e.g., with an ellipsis). */
    textOverflow?: 'clip' | 'ellipsis' | string;
    /** Specifies how whitespace inside an element is handled. */
    whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap';
    /** Specifies how words should break when reaching the end of a line. */
    wordBreak?: 'normal' | 'break-all' | 'keep-all' | 'break-word';

    // --- BORDERS ---
    /** Shorthand for setting border-width, border-style, and border-color for all four sides. */
    border?: string;
    /** Shorthand for setting border properties on the top edge. */
    borderTop?: string;
    /** Shorthand for setting border properties on the right edge. */
    borderRight?: string;
    /** Shorthand for setting border properties on the bottom edge. */
    borderBottom?: string;
    /** Shorthand for setting border properties on the left edge. */
    borderLeft?: string;
    /** Sets the width of an element's border. */
    borderWidth?: Numerical_Types;
    /** Sets the color of an element's border. */
    borderColor?: Color_Types;
    /** Sets the style of an element's border. */
    borderStyle?:
    | 'none' | 'solid' | 'dashed' | 'dotted' | 'double'
    | 'groove' | 'ridge' | 'inset' | 'outset';
    /** Sets the radius for all four corners, rounding the element's border. */
    borderRadius?: Numerical_Types;
    /** Sets the radius for the top-left corner. */
    borderTopLeftRadius?: Numerical_Types;
    /** Sets the radius for the top-right corner. */
    borderTopRightRadius?: Numerical_Types;
    /** Sets the radius for the bottom-left corner. */
    borderBottomLeftRadius?: Numerical_Types;
    /** Sets the radius for the bottom-right corner. */
    borderBottomRightRadius?: Numerical_Types;

    // --- EFFECTS ---
    /** Adds shadow effect(s) to an element's box. */
    boxShadow?: string;
    /** Adds shadow effect(s) to the text content. */
    textShadow?: string;
    /** Applies graphical effects like blur or color shift to an element. */
    filter?: string;
    /** Applies graphical effects to the area behind an element. */
    backdropFilter?: string;
    /** Describes how an element should blend with the content below it. */
    mixBlendMode?: string;

    // --- TRANSITIONS & ANIMATIONS ---
    /** Shorthand for all transition properties. */
    transition?: string;
    /** Specifies the CSS properties to which a transition effect should be applied. */
    transitionProperty?: string;
    /** Specifies how long a transition animation should take to complete. */
    transitionDuration?: string;
    /** Specifies the speed curve of the transition effect. */
    transitionTimingFunction?: string;
    /** Specifies a delay for the transition effect. */
    transitionDelay?: string;
    /** Shorthand for all animation properties. */
    animation?: string;
    /** Specifies the name of the @keyframes rule to use. */
    animationName?: string;
    /** Specifies how long an animation should take to complete one cycle. */
    animationDuration?: string;
    /** Specifies the speed curve of the animation. */
    animationTimingFunction?: string;
    /** Specifies a delay before the animation starts. */
    animationDelay?: string;
    /** Specifies the number of times an animation should play. */
    animationIterationCount?: string | number;
    /** Specifies whether an animation should play forwards, backwards, or alternate. */
    animationDirection?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
    /** Specifies a style for the target element when the animation is not playing (before it starts or after it ends). */
    animationFillMode?: 'none' | 'forwards' | 'backwards' | 'both';
    /** Specifies whether the animation is running or paused. */
    animationPlayState?: 'running' | 'paused';

    // --- TRANSFORM ---
    /** Applies a 2D or 3D transformation to an element (e.g., rotation, scale, skew). */
    transform?: Transform_Types;
    /** Sets the origin for an element's transformations. */
    transformOrigin?: string;
    /** Specifies the distance between the user and the z=0 plane. */
    perspective?: Numerical_Types;
    /** Defines the position of the view on the Z-axis for 3D elements. */
    perspectiveOrigin?: string;
    /** Defines whether or not the back face of an element should be visible when facing the user. */
    backfaceVisibility?: 'visible' | 'hidden';

    // --- CLIP & MASK ---
    /** Creates a clipping region that defines what part of an element should be shown. */
    clipPath?: string;
    /** Shorthand for masking properties. */
    mask?: string;
    /** Sets the image to be used as a mask. */
    maskImage?: string;
    /** Sets the size of the mask image. */
    maskSize?: string;

    // --- SCROLL ---
    /** Specifies whether scrolling is instantaneous or smooth. */
    scrollBehavior?: 'auto' | 'smooth';
    /** Sets the margin on all sides of a scroll container that defines the region to be used as the scroll snap area. */
    scrollMargin?: Numerical_Types;
    /** Sets the padding on all sides of a scroll container that defines the region to be used as the scroll snap area. */
    scrollPadding?: Numerical_Types;

    // --- MISC ---
    /** Specifies how the content of a replaced element (like an <img>) should be resized to fit its container. */
    objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
    /** Specifies the alignment of the object within the element's box. */
    objectPosition?: string;
    /** Controls whether a new stacking context should be created. */
    isolation?: 'auto' | 'isolate';
    /** Controls the selection of text and other elements by the user. */
    userSelect?: 'auto' | 'text' | 'none' | 'contain' | 'all';
    /** Specifies whether an element is resizable by the user, and in which directions. */
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
    /** Provides a hint to the browser about what aspects of an element are expected to change. */
    willChange?: string;
    /** Defines what part of an element is visible (deprecated, use `clipPath`). */
    clip?: string;
    /** A non-standard property or typo, likely a redundant version of `filter`. */
    filterEffects?: string;
};


const __Styles = {
    /**
     * OrinoJS -
     * Used to create the styles classes names of the styles for the element
     * @param styles Create classNames for the styles
     * @returns It returns the className of the styles
     */
    createClass: <T extends Record<string, CSS_PROPERTIES>>(styles: T) => {
        const [CSS, CLASSES_RAW] = convert_json_to_css_create_class(styles);
        if (!UniqueStyles.has(JSON.stringify(CLASSES_RAW))) {
            if (__OrinoEnvironment.isLocalhost())
                RuntimeCSS(String(CSS));
            UniqueStyles.add(JSON.stringify(CLASSES_RAW));
        }

        return CLASSES_RAW;
    },
    /**
     * OrinoJS -
     * Makes to change the styles when the cursor is hover the element
     * @param styleClass The className of the element
     * @param styles The styles of the element
     */
    createHover: (styleClass: string, styles: CSS_PROPERTIES) => {
        const data = convert_json_to_css_hover(styleClass, styles);
        if (__OrinoEnvironment.isLocalhost())
            RuntimeCSS(data);
    },
    createActive: (styleClass: string, styles: CSS_PROPERTIES) => {

        const data = convert_json_to_css_active(styleClass, styles);
        if (__OrinoEnvironment.isLocalhost())
            RuntimeCSS(data);
    }
}

export default __Styles;