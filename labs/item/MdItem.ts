import {CSSResultOrNative} from 'lit';

import {Item} from './internal/item.js';
import {styles} from './internal/item-styles.js';

export class MdItem extends Item {
  static override styles: CSSResultOrNative[] = [styles];
}
