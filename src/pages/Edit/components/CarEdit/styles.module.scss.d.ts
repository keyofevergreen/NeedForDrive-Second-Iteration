declare namespace StylesModuleScssNamespace {
  export interface IStylesModuleScss {
    "car-edit": string;
    "car-edit-container-wrap": string;
    "car-edit__card": string;
    "car-edit__description-textarea": string;
    "car-edit__details": string;
    "car-edit__file-input-container": string;
    "car-edit__progress": string;
    "car-edit__progress-details": string;
    "car-edit__progress-wrap": string;
    "car-form-container": string;
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
