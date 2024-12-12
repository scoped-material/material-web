import {CSSResultOrNative} from 'lit';

import {Icon} from './internal/icon.js';
import {styles} from './internal/icon-styles.js';

export class MdIcon extends Icon {
  /** @nocollapse */
  static override styles: CSSResultOrNative[] = [styles];
}
