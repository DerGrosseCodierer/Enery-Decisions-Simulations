// Copyright 2013-2022, University of Colorado Boulder

/**
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

import { DragListener, Image, Node, Text, VBox, HBox } from '../../../../scenery/js/imports.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import exampleSim from '../../energyDec.js';
import RectangularPushButton from '../../../../sun/js/buttons/RectangularPushButton.js';

class PrimaryAndService extends Node {

  /**
   * @param model - the model for the entire screen
   * @param {Object} [options] - options for the control panel, see Panel.js for options
   */
  constructor(model, primary_energy_x, service_x, primary_energy_y, service_y) {
  
    super( {

      cursor: 'pointer'
    } );

    const pictures = model.selections_pics;
    let Nmax = pictures.length;
    const scaleX = 0.3;
    const scaleY = 0.3;


    this.addChild(new Image( pictures[Nmax-1],  {centerX: primary_energy_x/scaleX, centerY : primary_energy_y/scaleY}));
    this.addChild(new Image( pictures[0],  {centerX: service_x/scaleX, centerY: service_y/scaleY}));


    
    
    this.scale( scaleX, scaleY );
  }
}

exampleSim.register( 'PrimaryAndService', PrimaryAndService );
export default PrimaryAndService;


