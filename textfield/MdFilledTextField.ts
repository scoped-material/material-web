import {CSSResultOrNative} from 'lit';
import {literal} from 'lit/static-html.js';

import { TextField } from './internal/text-field.js';
import {MdFilledField} from '../field/MdFilledField.js';

import {styles as filledStyles} from './internal/filled-styles.js';
import {styles as sharedStyles} from './internal/shared-styles.js';


/**
 * TODO(b/228525797): Add docs
 * @final
 * @suppress {visibility}
 */
export class MdFilledTextField extends TextField {
    static scopedElements = {
        'md-filled-field': MdFilledField,
    };

  static override styles: CSSResultOrNative[] = [sharedStyles, filledStyles];

  protected override readonly fieldTag = literal`md-filled-field`;
}
