// Copyright 2013-2022, University of Colorado Boulder

/**

 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

import { DragListener, Image, Node, Text, VBox, HBox } from '../../../../scenery/js/imports.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import exampleSim from '../../energyDec.js';
import RectangularPushButton from '../../../../sun/js/buttons/RectangularPushButton.js';
import Panel from '../../../../sun/js/Panel.js';
import merge from '../../../../phet-core/js/merge.js';
import but_res from '../../../images/buttons/button_rese.js';
import but_back from '../../../images/buttons/button_bac.js';

class Results extends Panel {

  /**
   * @param model - the model for the entire screen
   * @param {Object} [options] - options for the control panel, see Panel.js for options
   */
  constructor(model, options) {
  
    options = merge( {

      // Panel options
      xMargin: 10,
      yMargin: 30,
      stroke: 'orange',
      lineWidth: 5
    }, options );
  
    // The contents of the control panel
    const content = new HBox( {
      align: 'center',
      spacing: 20,
      children: [
        //Empty
      ]
    } );

    

    const choices = model.buttons_indeces;
    let Nmax = choices.length;
    const mw = 5000/Nmax;
    const mh = 50000;

    for (let i = 0; i < 1; i++) {
      let reset_but = new RectangularPushButton( {
        //Button Content
        content: new Image(but_res),
        //content: new Text( 'RESET', {font: new PhetFont( 20 )} ),
        scale: 0.1, 
        baseColor: 'grey',
        xMargin: 10,
        yMargin: 10,
        //Action of the buttons

        listener: () => {
          
          model.action = 'reset'
          model.SwitchProperties.selectionKeyProperty.set('reset');

        }
      
      } );
      let back_but = new RectangularPushButton( {

        //Button Content
        content: new Image(but_back),
        //content: new Text( 'BACK', {font: new PhetFont( 20 )} ),
        scale: 0.1, 
        baseColor: 'red',
        xMargin: 10,
        yMargin: 10,
        //Action of the buttons
  
        listener: () => {
          
          model.action = 'back'
          model.SwitchProperties.selectionKeyProperty.set('back');
  
        }
        
      } );
      content.addChild(reset_but);
      content.addChild(back_but);
      //content.addChild(new Text( 'Result Display', {font: new PhetFont( 30 )} ));
    }


    //const scaleX = 1;
    //const scaleY = 1;
    //this.scale( scaleX, scaleY )


    super( content, options );
    
  }
}


exampleSim.register( 'Results', Results );
export default Results;


