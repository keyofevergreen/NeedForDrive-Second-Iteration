declare namespace StylesModuleScssNamespace {
  export interface IStylesModuleScss {
    auth: string;
    "auth-wrap": string;
    auth__form: string;
    "btn-wrap": string;
    logo: string;
    "request-access-btn": string;
  }
}

declare const StylesModuleScssModule: StylesModuleScssNamespace.IStylesModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesModuleScssNamespace.IStylesModuleScss;
};

export = StylesModuleScssModule;
