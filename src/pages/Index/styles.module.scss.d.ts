declare namespace StylesModuleScssNamespace {
  export interface IStylesModuleScss {
    index: string;
    "index-wrapper": string;
    index__content: string;
    "index__nav-xxl": string;
  }
}

declare const StylesModuleScssModule: StylesModuleScssNamespace.IStylesModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesModuleScssNamespace.IStylesModuleScss;
};

export = StylesModuleScssModule;
