declare namespace StylesModuleScssNamespace {
  export interface IStylesModuleScss {
    "nav-item": string;
    navigation: string;
    navigation__logo: string;
    navigation__menu: string;
  }
}

declare const StylesModuleScssModule: StylesModuleScssNamespace.IStylesModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesModuleScssNamespace.IStylesModuleScss;
};

export = StylesModuleScssModule;
