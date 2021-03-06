/**
 * singing
 *
 * Copyright © 2016 . All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

class Greeting {

  constructor(name) {
    this.name = name || 'gast';
  }

  hello() {
    return `Welkom, ${this.name}!`;
  }

}

export default Greeting;
