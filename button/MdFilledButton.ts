/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {CSSResultOrNative, html} from 'lit';

import { MdFocusRing } from '../focus/MdFocusRing.js';
import { MdRipple } from '../ripple/MdRipple.js';
import {MdElevation} from '../elevation/MdElevation.js';

import { Button } from './internal/button.js';
import {styles as filledStyles} from './internal/filled-styles.js';
import {styles as sharedElevationStyles} from './internal/shared-elevation-styles.js';
import {styles as sharedStyles} from './internal/shared-styles.js';

/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * @description
 * __Emphasis:__ High emphasis – For the primary, most important, or most common
 * action on a screen
 *
 * __Rationale:__ The filled button’s contrasting surface color makes it the
 * most prominent button after the FAB. It’s used for final or unblocking
 * actions in a flow.
 *
 * __Example usages:__
 * - Save
 * - Confirm
 * - Done
 *
 * @final
 * @suppress {visibility}
 */
export class MdFilledButton extends Button {
  static scopedElements = {
    'md-elevation': MdElevation,
    'md-focus-ring': MdFocusRing,
    'md-ripple': MdRipple,
  };
    
  static override styles: CSSResultOrNative[] = [
    sharedStyles,
    sharedElevationStyles,
    filledStyles,
  ];

  protected override renderElevationOrOutline() {
      return html`<md-elevation part="elevation"></md-elevation>`;
    }
}
