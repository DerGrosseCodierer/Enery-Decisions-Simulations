// Copyright 2021, University of Colorado Boulder

/**
 * Constants is a collection of constants that are used throughout this simulation.
 * If a constant is used in more than one place in the code, it is preferrable to put that constant here,
 * rather than duplicating it.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Property from '../../../axon/js/Property.js';
import exampleSim from '../energyDec.js';

const SimConstants = {

  // Margins around the edge of the view
  SCREEN_VIEW_X_MARGIN: 20,
  SCREEN_VIEW_Y_MARGIN: 20,

  // Options common to all Screens
  SCREEN_OPTIONS: {
    backgroundColorProperty: new Property( 'white' ),

    // put a gray border around unselected icons on the home screen
    showUnselectedHomeScreenIconFrame: false,

    // put a gray border around screen icons when the navigation bar is black
    showScreenIconFrameForNavigationBarFill: 'purple'
  }
  
};

exampleSim.register( 'SimConstants', SimConstants );
export default SimConstants;