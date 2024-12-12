import {CSSResultOrNative} from 'lit';

import {MenuItemEl} from './internal/menuitem/menu-item.js';
import {styles} from './internal/menuitem/menu-item-styles.js';

export {type MenuItem} from './internal/controllers/menuItemController.js';
export {type CloseMenuEvent} from './internal/controllers/shared.js';

export class MdMenuItem extends MenuItemEl {
  static override styles: CSSResultOrNative[] = [styles];
}
