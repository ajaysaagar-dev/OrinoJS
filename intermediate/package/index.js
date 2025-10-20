// IMPORTS
import __ID from "./id/id.ts";
import __Logic from "./logic/logic.ts";
import __Page from "./page/page.ts";
import __ReactiveState from "./state/reactive-state.ts";
import __Styles from "./styles/styles.ts";
import __Theme from "./theme/theme.ts";
import __ThemeColor from "./theme/use-theme-color.js";

// PAGE
export const Page = __Page;

// STYLES
export const Styles = __Styles;

// IDs
export const ID = () => __ID();

// LOGICS
export const Logics = (function_logics) => __Logic(function_logics);

// STATE
export const ReactiveState = __ReactiveState;

// THEME
export const Theme = __Theme;
export const ThemeColor = (name) => __ThemeColor(name);

// HTML
export const html = (strings, ...values) => String.raw(strings, ...values);