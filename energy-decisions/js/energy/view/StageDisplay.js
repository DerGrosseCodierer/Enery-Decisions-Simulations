// Copyright 2013-2022, University of Colorado Boulder

/**

 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

import merge from '../../../../phet-core/js/merge.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import { Text, VBox, HBox, GridBox, Image } from '../../../../scenery/js/imports.js';
import RectangularPushButton from '../../../../sun/js/buttons/RectangularPushButton.js';
import Panel from '../../../../sun/js/Panel.js';
import exampleSim from '../../energyDec.js';

class StageDisplay extends Panel {

  /**
   * @param model - the model for the entire screen
   * @param {Object} [options] - options for the control panel, see Panel.js for options
   */
  constructor( model, options) {

    // Demonstrate a common pattern for specifying options and providing default values
    options = merge( {

      // Panel options
      xMargin: 5,
      yMargin: 5,
      stroke: 'grey',
      lineWidth: 4, 
    }, options );


    
    let sta = model.All_stages[model.buttons_indeces[0]];
    const content = new VBox({
      align: 'center',
      spacing: 0,
      children: [new Text( sta, {font: new PhetFont( 30 )} )]

    })
    

    super( content, options );
    
  }
}

exampleSim.register( 'StageDisplay', StageDisplay );
export default StageDisplay;


