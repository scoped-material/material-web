import {CSSResultOrNative} from 'lit';

import {Switch} from './internal/switch.js';
import {styles} from './internal/switch-styles.js';

export class MdSwitch extends Switch {
  static override styles: CSSResultOrNative[] = [styles];
}
