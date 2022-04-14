declare namespace StylesModuleScssNamespace {
  export interface IStylesModuleScss {
    "order-container": string;
    "order-header": string;
    "order-header__buttons": string;
    "order-header__options": string;
    "order-list": string;
  }
}

declare const StylesModuleScssModule: StylesModuleScssNamespace.IStylesModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesModuleScssNamespace.IStylesModuleScss;
};

export = StylesModuleScssModule;
