/**
 * This is the main entry point for the sim.
 *
 * @author Thomas Hujon (University of Calgary)
 */

import Sim from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import energyDecStrings from './energyDecStrings.js';
import EnergyScreen from './energy/EnergyScreen.js';

const simOptions = {

  // These credits will appear in the About dialog, accessed from the PhET menu in the navigation bar.
  // All credits fields are optional, see joist.AboutDialog.
  credits: {
    softwareDevelopment: 'Thomas Hujon',
    leadDesign: 'Maya Millard',
    team: 'Jason Donev, Ryleigh Heck, Thomas Hujon, Maya Millard',
    qualityAssurance: 'Luisa, Matthew, Andres, Diego',
    graphicArts: 'Ryleigh Heck',
    thanks: 'Thanks to ECO Canada for funding this sim!'
  }
};

simLauncher.launch( () => {
  const titleStringProperty = energyDecStrings[ 'example-sim' ].titleStringProperty;
  const screens = [ new EnergyScreen()];
  const sim = new Sim( titleStringProperty, screens, simOptions );
  sim.start();
} );