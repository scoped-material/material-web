import {CSSResultOrNative} from 'lit';

import {FilledField} from './internal/filled-field.js';
import {styles as filledStyles} from './internal/filled-styles.js';
import {styles as sharedStyles} from './internal/shared-styles.js';

export class MdFilledField extends FilledField {
  static override styles: CSSResultOrNative[] = [sharedStyles, filledStyles];
}
