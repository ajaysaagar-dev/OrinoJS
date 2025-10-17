// IMPORTS
import __ID from "./id/id.ts";
import __Logic from "./logic/logic.ts";
import __Page from "./page/page.ts";
import __Styles from "./styles/styles.ts";
import __Theme from "./theme/theme.ts";

// PAGE
export const Page = __Page;

// STYLES
export const Styles = __Styles;

// IDs
export const ID = () => __ID();

// LOGICS
export const Logics = (function_logics) => __Logic(function_logics);

// THEME
export const Theme = __Theme;