// Copyright 2013-2022, University of Colorado Boulder

/**
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

import { DragListener, Image, Node, Text, VBox, HBox } from '../../../../scenery/js/imports.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import Panel from '../../../../sun/js/Panel.js';
import exampleSim from '../../energyDec.js';
import RectangularPushButton from '../../../../sun/js/buttons/RectangularPushButton.js';
import but_res from '../../../images/buttons/button_rese.js';
import but_back from '../../../images/buttons/button_bac.js';

class ActionButtons extends Node {

  /**
   * @param model - the model for the entire screen
   * @param {Object} [options] - options for the control panel, see Panel.js for options
   */
  constructor(model, back_x, back_y, reset_x, reset_y) {
  
    super( {

      cursor: 'pointer'
    } );
  

    let back_but = new RectangularPushButton( {

      //Button Content
      content: new Image(but_back),
      //content: new Text( 'BACK', {font: new PhetFont( 20 )} ),
      scale: 0.1, 
      baseColor: 'red',
      centerX: back_x, 
      bottom: back_y,
      xMargin: 10,
      yMargin: 10,
      //Action of the buttons

      listener: () => {
        
        model.action = 'back'
        model.SwitchProperties.selectionKeyProperty.set('back');

      }
      
    } );


    let reset_but = new RectangularPushButton( {

      //Button Content
      content: new Image(but_res),
      //content: new Text( 'RESET', {font: new PhetFont( 20 )} ),
      scale: 0.1, 
      baseColor: 'grey',
      centerX: reset_x,
      bottom: reset_y,
      xMargin: 10,
      yMargin: 10,
      //Action of the buttons

      listener: () => {
        
        model.action = 'reset'
        model.SwitchProperties.selectionKeyProperty.set('reset');

      }
      
    } );

    //this.addChild(stage_display);
    this.addChild(back_but);
    this.addChild(reset_but);


    
    const scaleX = 1;
    const scaleY = 1;
    this.scale( scaleX, scaleY );
  }
}

exampleSim.register( 'ActionButtons', ActionButtons );
export default ActionButtons;


