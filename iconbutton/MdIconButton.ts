import {CSSResultOrNative} from 'lit';

import {IconButton} from './internal/icon-button.js';
import {styles as sharedStyles} from './internal/shared-styles.js';
import {styles} from './internal/standard-styles.js';

export class MdIconButton extends IconButton {
  static override styles: CSSResultOrNative[] = [sharedStyles, styles];

  protected override getRenderClasses() {
    return {
      ...super.getRenderClasses(),
      'standard': true,
    };
  }
}
