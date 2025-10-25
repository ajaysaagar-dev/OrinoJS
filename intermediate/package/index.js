// IMPORTS
import __ID from "./id/id.ts";
import { __OrinoEnvironment } from "./init/init.js";
import __Logic from "./logic/logic.ts";
import __Page from "./page/page.ts";
import __source from "./source/source.ts";
import __ReactiveState from "./state/reactive-state.ts";
import __Styles from "./styles/styles.ts";
import __Theme from "./theme/theme.ts";
import __ThemeColor from "./theme/use-theme-color.js";

// PAGE
/**
 * OrinoJS -
 * The single page view based Page class
 */
export const Page = __Page;

// STYLES
/**
 * OrinoJS -
 * The Styles is used to create the styles for the element of html
 * @returns It returns the class of the styles
 */
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

// SOURCE
/**
 * OrinoJS - The function which returns the path of the particular file.
 * @param path The path - ./ or / or http/https (url)
 * @returns The Path of the Specific File
 */
export const source = (path = String()) => __source(path);

// ORINO ENVIRONMENT
export const OrinoEnvironment = __OrinoEnvironment;