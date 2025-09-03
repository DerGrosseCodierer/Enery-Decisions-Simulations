// Copyright 2013-2022, University of Colorado Boulder

/**
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Property from '../../../axon/js/Property.js';
import Screen from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import merge from '../../../phet-core/js/merge.js';
import { Image } from '../../../scenery/js/imports.js';
import process_candu from '../../images/processing/process_candu.js';
import SimConstants from '../common/SimConstants.js';
import exampleSim from '../energyDec.js';
import energyDecStrings from '../energyDecStrings.js';
import EnergyDecisionsModel from './model/EnergyDecisionsModel.js';
import EnergyScreenView from './view/EnergyScreenView.js';

// constants
const BACKGROUND_COLOR_PROPERTY = new Property( 'white' );

class EnergyScreen extends Screen {

  constructor() {

    const options = merge( {
      name: energyDecStrings.screen.magnetsStringProperty,
      homeScreenIcon: createScreenIcon()
    }, SimConstants.SCREEN_OPTIONS );

    super(
      () => new EnergyDecisionsModel(),
      model => new EnergyScreenView( model),
      options
    );
  }
}

/**
 * Creates the icon for this screen. This will be used for the home screen and navigation bar.
 * Always use ScreenIcon for screen icons.
 * @returns {ScreenIcon}
 */
function createScreenIcon() {
  const iconNode = new Image( process_candu );
  return new ScreenIcon( iconNode, {
    fill: BACKGROUND_COLOR_PROPERTY
  } );
}

exampleSim.register( 'EnergyScreen', EnergyScreen );
export default EnergyScreen;