declare namespace StylesModuleScssNamespace {
  export interface IStylesModuleScss {
    "table-header": string;
    "table-header__buttons": string;
    "table-header__sort": string;
  }
}

declare const StylesModuleScssModule: StylesModuleScssNamespace.IStylesModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesModuleScssNamespace.IStylesModuleScss;
};

export = StylesModuleScssModule;
