/**
 * singing
 *
 * Copyright © 2016 . All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import Greeting from '../src/Greeting';

describe('Greeting', () => {

  describe('greeting.hello()', () => {

    it('should return welcome message for a guest user', () => {
      const greeting = new Greeting();
      const message = greeting.hello();
      expect(message).to.be.equal('Welkom, gast!');
    });

    it('should return welcome message for a named user', () => {
      const greeting = new Greeting('Jan');
      const message = greeting.hello();
      expect(message).to.be.equal('Welkom, Jan!');
    });

  });

});
