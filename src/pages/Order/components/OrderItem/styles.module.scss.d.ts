declare namespace StylesModuleScssNamespace {
  export interface IStylesModuleScss {
    "order-item": string;
    "order-item__details": string;
    "order-item__info": string;
    "order-item__price": string;
  }
}

declare const StylesModuleScssModule: StylesModuleScssNamespace.IStylesModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesModuleScssNamespace.IStylesModuleScss;
};

export = StylesModuleScssModule;
