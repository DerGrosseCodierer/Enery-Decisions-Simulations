// Copyright 2013-2021, University of Colorado Boulder

/**
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

import Property from '../../../../axon/js/Property.js';
import exampleSim from '../../energyDec.js';

class SwitchProperties {

  /**
   * @param selectionKey - the flag when a button has been pressed
   */
  constructor(selectionKey) {


    // Property to check if a selection has been made
    this.selectionKeyProperty = new Property(selectionKey);

  }
}

exampleSim.register( 'SwitchProperties', SwitchProperties );
export default SwitchProperties;