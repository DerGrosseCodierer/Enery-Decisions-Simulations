/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import energyDec from './energyDec.js';

type StringsType = {
  'example-sim': {
    'titleStringProperty': 'Energy Decisions';
  };
  'screen': {
    'magnetsStringProperty': 'Energy Decisions';
  };
  'magnetControlsStringProperty': 'Energy Decisions';
};

const energyDecStrings = getStringModule( 'EXAMPLE_SIM' ) as StringsType;

energyDec.register( 'energyDecStrings', energyDecStrings );

export default energyDecStrings;
