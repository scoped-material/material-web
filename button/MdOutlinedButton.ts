/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { MdRipple } from '../ripple/MdRipple.js';
import { MdFocusRing } from '../focus/MdFocusRing.js';

import {CSSResultOrNative, html} from 'lit';

import { Button } from './internal/button.js';
import {styles as outlinedStyles} from './internal/outlined-styles.js';
import {styles as sharedStyles} from './internal/shared-styles.js';

/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * @description
 * __Emphasis:__ Medium emphasis – For important actions that don’t distract
 * from other onscreen elements.
 *
 * __Rationale:__ Use an outlined button for actions that need attention but
 * aren’t the primary action, such as “See all” or “Add to cart.” This is also
 * the button to use for giving someone the opportunity to change their mind or
 * escape a flow.
 *
 * __Example usages:__
 * - Reply
 * - View all
 * - Add to cart
 * - Take out of trash
 *
 * @final
 * @suppress {visibility}
 */
export class MdOutlinedButton extends Button {
  static scopedElements = {
    'md-focus-ring': MdFocusRing,
    'md-ripple': MdRipple,
  };

  static override styles: CSSResultOrNative[] = [sharedStyles, outlinedStyles];

  protected override renderElevationOrOutline() {
      return html`<div class="outline"></div>`;
    }
}
