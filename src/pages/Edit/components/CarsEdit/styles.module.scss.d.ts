declare namespace StylesModuleScssNamespace {
  export interface IStylesModuleScss {
    "cars-edit": string;
    "cars-edit-container-wrap": string;
    "cars-edit__card": string;
    "cars-edit__description-textarea": string;
    "cars-edit__details": string;
    "cars-edit__file-input": string;
    "cars-edit__progress": string;
    "cars-edit__progress-details": string;
    "cars-edit__progress-wrap": string;
    "form__colors-add-button": string;
    "form__colors-checkbox": string;
    "form__colors-input-group": string;
  }
}

declare const StylesModuleScssModule: StylesModuleScssNamespace.IStylesModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesModuleScssNamespace.IStylesModuleScss;
};

export = StylesModuleScssModule;
