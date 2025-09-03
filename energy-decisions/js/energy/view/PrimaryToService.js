// Copyright 2013-2022, University of Colorado Boulder

/**
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

import { DragListener, Image, Node } from '../../../../scenery/js/imports.js';
import exampleSim from '../../energyDec.js';
import ArrowNode from '../../../../scenery-phet/js/ArrowNode.js';

class PrimaryToService extends Node {

  /**
   * @param model - the model for the entire screen
   * @param {Object} [options] - options for the control panel, see Panel.js for options
   */
  constructor(model, primary_energy_x, service_x, primary_energy_y, service_y, shift_down, squeeze_in) {
  
    super( {

      cursor: 'pointer'
    } );

    const scaleX = 0.25;
    const scaleY = 0.25;

    // All elements in final screen
    const pictures = model.selections_pics;

    let Nmax = pictures.length;
    // Placement for all remaining elemnts in final screen
    const add_width = 0;
    const add_height = 0;
    const width_x = service_x - primary_energy_x + add_width;
    const width_y = service_y - primary_energy_y;
    const delta_x = (width_x - 2*squeeze_in)/(Nmax-3);
    const delta_y = shift_down - add_height
    const arrowLength = 1/20;
    const arrowLengthY = 1/15;

    let atlX = primary_energy_x + squeeze_in; 
    let atlY = primary_energy_y + delta_y/2 - delta_y*arrowLengthY;
    let atpX = primary_energy_x + squeeze_in;
    let atpY = primary_energy_y + delta_y/2 + delta_y*arrowLengthY;
    let arrowNode = new ArrowNode( atlX/scaleX, atlY/scaleY, atpX/scaleX, atpY/scaleY, {
      doubleHead: false,
      tailWidth: 50,
      headHeight: 50,
      headWidth: 100,
      stroke: 'red',
      fill: 'red'
    } );
    this.addChild( arrowNode );

    for (let i = 2; i < Nmax; i++) {

      let x_val = primary_energy_x + squeeze_in + delta_x*(i-2); 
      let y_val = primary_energy_y + delta_y;

      this.addChild(new Image( pictures[Nmax-i],  {centerX: x_val/scaleX , centerY: y_val/scaleY}));

      let atlX = (x_val+delta_x/2-delta_x*arrowLength);
      let atlY = y_val;
      let atpX = (x_val+delta_x/2+delta_x*arrowLength);
      let atpY = y_val;

      if(i < Nmax-1){

        let arrowNode = new ArrowNode( atlX/scaleX, atlY/scaleY, atpX/scaleX, atpY/scaleY, {
          doubleHead: false,
          tailWidth: 50,
          headHeight: 50,
          headWidth: 100,
          stroke: 'red',
          fill: 'red'
        } );
        this.addChild( arrowNode );

      }
    }

    atlX = service_x + squeeze_in; 
    atlY = service_y + delta_y/2 + delta_y*arrowLengthY;
    atpX = service_x + squeeze_in;
    atpY = service_y + delta_y/2 - delta_y*arrowLengthY;
    arrowNode = new ArrowNode( atlX/scaleX, atlY/scaleY, atpX/scaleX, atpY/scaleY, {
      doubleHead: false,
      tailWidth: 50,
      headHeight: 50,
      headWidth: 100,
      stroke: 'red',
      fill: 'red'
    } );
    this.addChild( arrowNode );

    this.scale( scaleX, scaleY );
  }
}

exampleSim.register( 'PrimaryToService', PrimaryToService );
export default PrimaryToService;


