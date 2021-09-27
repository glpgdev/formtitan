# GLPG Reset

<img src="https://glpg-public-assets.s3.us-east-2.amazonaws.com/glpg-logo-reset.svg" alt="Great Lakes Psychology Group Reset Logo" width="400" style="margin: 30px 0;"/>

`GLPG Reset` is a package that contains base global styles for GLPG projects such as a CSS reset, typography, colors, and other styles that aren't typically scoped.

You can reference GLPG Style Guidelines [here](https://style.glpg.dev/).

### Install

`npm install --save-dev glpg-reset`

### Import

`import "glpg-reset"`

Because this is a true reset with added global styles, this should be called before other styles so that when compiled, it comes first.

### Dependencies

- [Karla Font](https://fonts.google.com/specimen/Karla "Karla Google Fonts") - Your project must include this Google Font, otherwise fallbacks will be served.

#### Uses

- [Normalize](https://necolas.github.io/normalize.css/ "Normalize CSS") - This package comes pre-packaged with Normalize css.
- [TypeScale](https://bit.ly/3As2D3L "GLPG TypeScale") - 1.250 Major Third type scale is used.
