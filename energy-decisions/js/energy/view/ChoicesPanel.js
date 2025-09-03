// Copyright 2013-2022, University of Colorado Boulder

/**
 *
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

class ChoicesPanel extends Panel {

  /**
   * @param model - the model for the entire screen
   * @param {Object} [options] - options for the control panel, see Panel.js for options
   */
  constructor( model, options) {

    // Demonstrate a common pattern for specifying options and providing default values
    options = merge( {

      // Panel options
      xMargin: 10,
      yMargin: 10,
      stroke: 'orange',
      lineWidth: 5, 
    }, options );

    // Formatting
    let row_space = 20;
    let col_space = 20;
    let text_space = 5;
    let text_size = 20;
    let image_scale = 0.2;

    // Arrangement
    let maxCol = 3;
    let maxRow = 2;
    let countCol = 0;
    let countRow = 0;

    const choices = model.buttons_indeces;
    let Nmax = choices.length;

    const content = new VBox( {
      align: 'center',
      spacing: row_space,
      children: []
    } );

    let button_row = [];

    for (let i = 0; i < Nmax; i++) {
      let indx = choices[i];
      let pic = model.All_pics[indx];
      let key = model.All_keys[indx];
      let sta = model.All_stages[indx];
      // Button
      let butn = new RectangularPushButton( {
        content: new Image( pic ),
        scale: image_scale, 
        baseColor: 'grey',
        xMargin: 2,
        yMargin: 2,
        listener: () => {
          if (model.All_spec_string[indx] === 'Salient'){
            model.selections_pics.push(pic);
          }
          model.selections_indeces.push(indx);
          model.selected_key = key;
          model.selected_output = model.All_outputs[indx];
          model.selected_input = model.All_inputs[indx];
          model.action = 'update'
          model.selected_stage = sta;
          if (sta === 'Primary_Energy'){
            model.service_quant = 123;
          }
          model.SwitchProperties.selectionKeyProperty.set(key);
        }        
      } );
      let txt = new Text( key, {font: new PhetFont( text_size ) } );
      let elmnt = new VBox({
        align: 'center',
        spacing: 0,
        children: [butn, txt]
        }
      )

      if(countCol === maxCol-1){
        button_row.push(elmnt);
        let ROW = new HBox( {
          align: 'center',
          spacing: col_space,
          children: button_row
        } );
        content.addChild(ROW);
        button_row = [];
        countCol = countCol+1;
      }

      if(countCol < maxCol-1){
        button_row.push(elmnt);
        countCol = countCol+1;
        if(i === Nmax-1){
          let ROW = new HBox( {
            align: 'center',
            spacing: col_space,
            children: button_row
          } );
          content.addChild(ROW);
        }
      }

      if(countCol === maxCol){
        countCol = 0;
      }

      if(countRow === maxRow-1){
        console.log("Hey");
      }

      if(countRow != maxRow-1){
        console.log("Boo");
      }

    }

    

    super( content, options );
    
  }
}

exampleSim.register( 'ChoicesPanel', ChoicesPanel );
export default ChoicesPanel;


