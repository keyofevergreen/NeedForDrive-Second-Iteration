declare namespace StylesModuleScssNamespace {
  export interface IStylesModuleScss {
    "close-btn": string;
    header: string;
    header__account: string;
    "header__menu-btn": string;
    "header__notifications-btn": string;
    header__search: string;
  }
}

declare const StylesModuleScssModule: StylesModuleScssNamespace.IStylesModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesModuleScssNamespace.IStylesModuleScss;
};

export = StylesModuleScssModule;
