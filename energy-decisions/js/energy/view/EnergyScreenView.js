// Copyright 2021, University of Colorado Boulder

/**
 * MagnetsScreenView is the top-level view component for the 'Magnets' screen. All of the components that make up
 * the screen's view are added here.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

import Vector2 from '../../../../dot/js/Vector2.js';
import ScreenView from '../../../../joist/js/ScreenView.js';
import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';
import exampleSim from '../../energyDec.js';
import ProgressBar from './ProgressBar.js';
import ChoicesPanel from './ChoicesPanel.js';
import ActionButtons from './ActionButtons.js';
import StageDisplay from './StageDisplay.js';
import PrimaryAndService from './PrimaryAndService.js';
import PrimaryToService from './PrimaryToService.js';
import Results from './Results.js';

// Blank
import blank from '../../../images/blank/blank_white.js';

class EnergyScreenView extends ScreenView {

  /**
   * @param model - the top-level model for this screen
   */
  constructor( model) {

    super();

    // General Positioning
    const top_y = 100
    const left_x = 0
    const cent_x = 500
    const right_x = 1050

    // Positioning of Choice Panel
    const xPos = cent_x;
    const yPos = 370;
    const Pos_panel = {centerX: xPos, centerY: yPos};

    // Positioning of Stage Display
    const sta_x = cent_x; 
    const sta_y = top_y;
    const Pos_stage = {centerX: sta_x, bottom: sta_y};

    // Positioning of Back and Reset Buttons
    const dis_x = 100
    const back_x = right_x-dis_x/2;
    const reset_x = right_x+dis_x/2;
    const back_y = top_y;  
    const reset_y = top_y;

    // Progress Bar
    const prog_x = left_x;
    const prog_bottom_y = top_y;
    const prog_del_y = 120; 
    const prog_num_pics = 5;

    // Positioning of Results Display
    const results_x = cent_x;
    const results_y = 200;
    const Pos_results = {centerX: results_x, centerY: results_y};


    // Positioning of Primary and Service
    const primary_energy_x = left_x;
    const service_x = right_x;
    const primary_energy_y = 150;
    const service_y = primary_energy_y;

    // Positioning of Path from Primary to Service
    const shift_down = 300;
    const squeeze_in = 0;


    let bmn = null;
    let mcp = null;
    let std = null;
    let bts = null;
    let pas = null;
    let pts = null;
    let rs = null;

    // Initializing buttons
    for (let i = 0; i < model.All_pics.length; i++) {
      if(model.All_stages[i] === 'Service'){
        model.buttons_indeces.push(i);
      }
    }

    bmn = new ProgressBar([blank], prog_x, prog_bottom_y, prog_del_y, prog_num_pics); 
    mcp = new ChoicesPanel( model, Pos_panel);
    std = new StageDisplay(model, Pos_stage);
    bts = new ActionButtons(model, back_x, back_y, reset_x, reset_y);
    this.addChild(bmn);
    this.addChild(mcp);
    this.addChild(std);
    this.addChild(bts);

    model.SwitchProperties.selectionKeyProperty.link( selectionKey => {
      
      // Updating
      if(model.action === 'update'){
        model.buttons_indeces = [];
        for (let i = 0; i < model.All_pics.length; i++) {
          if(model.All_inputs[i] === model.selected_output && model.All_keys[i] !== model.selected_key){
            model.buttons_indeces.push(i);
          }
        }
        this.removeChild(bmn);
        this.removeChild(mcp);
        this.removeChild(std);

        bmn = new ProgressBar( model.selections_pics, prog_x, prog_bottom_y, prog_del_y, prog_num_pics); 
        mcp = new ChoicesPanel( model, Pos_panel);
        std = new StageDisplay(model, Pos_stage);
        this.addChild(bmn);
        this.addChild(mcp);
        this.addChild(std);
      }


      // Moving back
      if(model.action === 'back'){

        let ni = model.selections_indeces.length;
        let np = model.selections_pics.length;

        if(ni === 1){

          model.buttons_indeces = [];
          model.selections_pics = [];
          model.selections_indeces = [];
          for (let i = 0; i < model.All_pics.length; i++) {
            if(model.All_stages[i] === 'Service'){
              model.buttons_indeces.push(i);
            }
          }
          if(model.selected_stage != 'Primary_Energy'){
            this.removeChild( bmn);
            this.removeChild( mcp);
            this.removeChild( std);
          }
          if(model.selected_stage === 'Primary_Energy'){

            this.removeChild( pas);
            this.removeChild( pts);
            this.removeChild( rs);
          }
          bmn = new ProgressBar( [blank], prog_x, prog_bottom_y, prog_del_y, prog_num_pics); 
          mcp = new ChoicesPanel( model, Pos_panel);
          std = new StageDisplay(model, Pos_stage);
          this.addChild(bmn);
          this.addChild(mcp);
          this.addChild(std);
          model.action = 'None';
        }


        if(ni >= 2){
        
          model.buttons_indeces = [];

          let cur_ind = model.selections_indeces[ni-1];
          let prev_ind = model.selections_indeces[ni-2];

          let prev_out = model.All_outputs[prev_ind];
          let prev_in = model.All_inputs[prev_ind];
          let prev_key = model.All_keys[prev_ind];
          let curr_spec_string = model.All_spec_string[cur_ind];
          for (let i = 0; i < model.All_pics.length; i++) {

            if(model.All_inputs[i] === prev_out && model.All_keys[i] !== prev_key){

              model.buttons_indeces.push(i);

            }

          }
          if(model.selected_stage != 'Primary Energy'){
            this.removeChild( bmn);
            this.removeChild( mcp);
            this.removeChild( std);
            this.removeChild( bts);
          }
          if(model.selected_stage === 'Primary Energy'){
            this.removeChild( pas);
            this.removeChild( pts);
            this.removeChild( rs);
          }
          if(curr_spec_string === 'Salient'){
            model.selections_pics.splice(np-1);
          }
          model.selected_stage = 'Processing';
          model.selections_indeces.splice(ni-1);
          bmn = new ProgressBar( model.selections_pics, prog_x, prog_bottom_y, prog_del_y, prog_num_pics); 
          mcp = new ChoicesPanel( model, Pos_panel);
          std = new StageDisplay(model, Pos_stage);
          this.addChild(bmn);
          this.addChild(mcp);
          this.addChild(std);
          this.addChild(bts);
          model.action = 'None';
        }
        model.SwitchProperties.selectionKeyProperty.set('Blablablublub');
      }


      // Resetting
      if(model.action === 'reset'){
        console.log("RESET BUTTON")

        model.selected_key = null;
        model.selected_output = null;
        model.selected_input = null;
        model.buttons_indeces = [];
        model.selections_pics = [];
        model.selections_indeces = [];

        for (let i = 0; i < model.All_pics.length; i++) {

          if(model.All_stages[i] === 'Service'){
            model.buttons_indeces.push(i);
            
          }
        }
        if(model.selected_stage != 'Primary Energy'){
          console.log("Inbetween");
          this.removeChild( bmn);
          this.removeChild( mcp);
          this.removeChild( std);
          this.removeChild( bts);
        }
        if(model.selected_stage === 'Primary Energy'){
          console.log("At final screen");
          this.removeChild( pas);
          this.removeChild( pts);
          this.removeChild( rs);

        }
        model.selected_stage = 'Service';
        
        bmn = new ProgressBar( [blank], prog_x, prog_bottom_y, prog_del_y, prog_num_pics);
        mcp = new ChoicesPanel( model, Pos_panel); 
        std = new StageDisplay(model, Pos_stage);
        bts = new ActionButtons(model, back_x, back_y, reset_x, reset_y);
        console.log("building up")
        this.addChild(bmn);
        this.addChild(mcp);
        this.addChild(std);
        this.addChild(bts);
        model.action = 'None';

      }


      // Final Screen
      if(model.selected_stage === 'Primary Energy'){

        this.removeChild( bmn);
        this.removeChild( mcp);
        this.removeChild( std);
        this.removeChild( bts);

        pas = new PrimaryAndService(model, primary_energy_x, service_x, primary_energy_y, primary_energy_y);
        pts = new PrimaryToService(model, primary_energy_x, service_x, primary_energy_y, primary_energy_y, shift_down, squeeze_in); 
        rs = new Results(model, Pos_results);
        
        this.addChild(pas);
        this.addChild(pts);
        this.addChild(rs);

      }

    } );



  }
}

exampleSim.register( 'EnergyScreenView', EnergyScreenView );
export default EnergyScreenView;