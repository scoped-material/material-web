import {CSSResultOrNative} from 'lit';

import {Menu} from './internal/menu.js';
import {styles} from './internal/menu-styles.js';

export {type ListItem} from '../list/internal/list-navigation-helpers.js';
export {type MenuItem} from './internal/controllers/menuItemController.js';
export {
  FocusState,
  type CloseMenuEvent,
  type Menu,
} from './internal/controllers/shared.js';
export {Corner} from './internal/menu.js';

export class MdMenu extends Menu {
  static override styles: CSSResultOrNative[] = [styles];
}
