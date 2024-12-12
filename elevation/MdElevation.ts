import {CSSResultOrNative} from 'lit';

import {Elevation} from './internal/elevation.js';
import {styles} from './internal/elevation-styles.js';

export class MdElevation extends Elevation {
  static override styles: CSSResultOrNative[] = [styles];
}
