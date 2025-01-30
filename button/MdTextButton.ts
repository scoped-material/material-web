/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import {CSSResultOrNative} from 'lit';

import { Button } from './internal/button.js';

import {styles as sharedStyles} from './internal/shared-styles.js';
import {styles as textStyles} from './internal/text-styles.js';
import { MdFocusRing } from '../focus/MdFocusRing.js';
import { MdRipple } from '../ripple/MdRipple.js';

/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * @description
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence
 *
 * __Rationale:__ Text buttons have less visual prominence, so should be used
 * for low emphasis actions, such as an alternative option.
 *
 * __Example usages:__
 * - Learn more
 * - View all
 * - Change account
 * - Turn on
 *
 * @final
 * @suppress {visibility}
 */
export class MdTextButton extends Button {
  static scopedElements = {
    'md-focus-ring': MdFocusRing,
    'md-ripple': MdRipple,
  };

  static override styles: CSSResultOrNative[] = [sharedStyles, textStyles];
}
