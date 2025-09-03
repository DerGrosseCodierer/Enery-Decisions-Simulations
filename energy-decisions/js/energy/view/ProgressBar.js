// Copyright 2013-2022, University of Colorado Boulder

/**
 
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';
import { DragListener, Image, Node } from '../../../../scenery/js/imports.js';

import exampleSim from '../../energyDec.js';

class ProgressBar extends Node {

  constructor(Picture_Set, left_x, align_y, del_y, NMaxPics) {

    super( {

      cursor: 'pointer'
    } );

    const nmax = Picture_Set.length;
    const scl = 0.18;
    let scaleX = scl*(NMaxPics/nmax);
    let scaleY = scl*(NMaxPics/nmax);
    if(nmax < NMaxPics+1){
      scaleX = scl;
      scaleY = scl;
    }

    const first_x = left_x/scaleX;
    const delta_x = 0/scaleX;
    const first_y = align_y/scaleY;
    const delta_y = del_y/scaleY;

    for (let i = 0; i < nmax; i++) {
        this.addChild( new Image( Picture_Set[i], {
        centerX: first_x+i*delta_x,
        centerY: first_y+i*delta_y
      } ) );
    }
    
    // Scale this Node, so that it matches the model width and height.
    


    this.scale( scaleX, scaleY );

  }
}

exampleSim.register( 'ProgressBar', ProgressBar );
export default ProgressBar;