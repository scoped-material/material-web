import {CSSResultOrNative} from 'lit';

import {FocusRing} from './internal/focus-ring.js';
import {styles} from './internal/focus-ring-styles.js';

export class MdFocusRing extends FocusRing {
  static override styles: CSSResultOrNative[] = [styles];
}
