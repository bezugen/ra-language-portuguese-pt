# Portuguese (pt-PT) Translations for react-admin

Portuguese translations for [react-admin](https://github.com/marmelab/react-admin), the frontend framework for building admin applications on top of REST services.

## Installation

```sh
yarn add ra-language-portuguese-pt
```

## Usage

```js
import portugueseMessages from "ra-language-portuguese-pt";

const messages = {
  pt: portugueseMessages
};
const i18nProvider = locale => messages[locale];

<Admin locale="pt" i18nProvider={i18nProvider}>
  ...
</Admin>;
```
