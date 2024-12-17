# Material Web

This is a fork of Material web in its newest version. This repository uses [Scoped Custom Element](https://open-wc.org/docs/development/scoped-elements/) to make sure that components are side-effect free and as such can be used in deistributed application better.

## Breaking Change to fork
>This changes requires the [Scoped CustomElementRegistry polyfill ](https://www.npmjs.com/package/@webcomponents/scoped-custom-element-registry).

## Usage
```ts
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { MdFilledTextField } from '@scoped-material/matarial-web/textfield/MdFilledTextField.js';

class MyElement extends ScopedElementsMixin(LitElement) {
  static scopedElements = {
    'md-filled-text-field': MdFilledTextField,
  };

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = '<md-filled-text-field>click</md-filled-text-field>';
  }
}

```

