/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */


import {CSSResultOrNative} from 'lit';
import {literal} from 'lit/static-html.js';

import { TextField } from './internal/text-field.js';
import { MdOutlinedField } from '../field/MdOutlinedField.js';

import {styles as outlinedStyles} from './internal/outlined-styles.js';
import {styles as sharedStyles} from './internal/shared-styles.js';

export {type TextFieldType} from './internal/text-field.js';

/**
 * TODO(b/228525797): Add docs
 * @final
 * @suppress {visibility}
 */
export class MdOutlinedTextField extends TextField {
  static scopedElements = {
    'md-outlined-field': MdOutlinedField,
  };
  static override styles: CSSResultOrNative[] = [sharedStyles, outlinedStyles];

  protected override readonly fieldTag = literal`md-outlined-field`;
}
