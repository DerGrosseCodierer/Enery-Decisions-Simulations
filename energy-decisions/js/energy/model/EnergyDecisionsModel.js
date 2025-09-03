// Copyright 2013-2021, University of Colorado Boulder

/**
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

import exampleSim from '../../energyDec.js';
import SwitchProperties from './SwitchProperties.js';


// Service
import service_p_transport from '../../../images/service/service_p_trans.js';
import service_g_transport from '../../../images/service/service_g_trans.js';
import service_lighting from '../../../images/service/service_lighting.js';
import service_kitchen from '../../../images/service/service_kitchen.js';


// Tool Category
import tool_bicycle from '../../../images/tool/categories/tool_bicycle.js';
import tool_bus from '../../../images/tool/categories/tool_bus.js';
import tool_car from '../../../images/tool/categories/tool_car.js';
import tool_fridge from '../../../images/tool/categories/tool_fridge.js';
import tool_p_train from '../../../images/tool/categories/tool_p_train.js';
import tool_g_train from '../../../images/tool/categories/tool_g_train.js';
import tool_g_boat from '../../../images/tool/categories/tool_g_boat.js';
import tool_bulb_incand from '../../../images/tool/categories/tool_incand_bulb.js';
import tool_bulb_led from '../../../images/tool/categories/tool_led_bulb.js';
import tool_microwave from '../../../images/tool/categories/tool_microwave.js';
import tool_scooter from '../../../images/tool/categories/tool_scooter.js';
import tool_semitruck from '../../../images/tool/categories/tool_semitruck.js';
import tool_stove from '../../../images/tool/categories/tool_stove.js';

// Tool Specific
import curr_bus_oil from '../../../images/tool/specifiers/curr_bus_oil.js';
import curr_bus_elec from '../../../images/tool/specifiers/curr_bus_elec.js';
import curr_bus_ng from '../../../images/tool/specifiers/curr_bus_ng.js';
import curr_car_elec from '../../../images/tool/specifiers/curr_car_elec.js';
import curr_car_oil from '../../../images/tool/specifiers/curr_car_oil.js';
import curr_car_ng from '../../../images/tool/specifiers/curr_car_ng.js';
import curr_p_train_elec from '../../../images/tool/specifiers/curr_p_train_elec.js';
import curr_p_train_oil from '../../../images/tool/specifiers/curr_p_train_oil.js';

import curr_scooter_elec from '../../../images/tool/specifiers/curr_scooter_elec.js';
import curr_bicycle_elec from '../../../images/tool/specifiers/curr_bicycle_elec.js';

import curr_semitruck_oil from '../../../images/tool/specifiers/curr_semitruck_oil.js';
import curr_boat_oil from '../../../images/tool/specifiers/curr_boat_oil.js';
import curr_g_train_oil from '../../../images/tool/specifiers/curr_g_train_oil.js';

import curr_stove_elec from '../../../images/tool/specifiers/curr_stove_elec.js';
import curr_stove_ng from '../../../images/tool/specifiers/curr_stove_ng.js';
import curr_microwave_elec from '../../../images/tool/specifiers/curr_microwave_elec.js';
import curr_fridge_elec from '../../../images/tool/specifiers/curr_fridge_elec.js';

import curr_incand_bulb_elec from '../../../images/tool/specifiers/curr_incand_bulb_elec.js';
import curr_led_bulb_elec from '../../../images/tool/specifiers/curr_led_bulb_elec.js';



// Distribution
import dist_oil_pipe from '../../../images/distribution/dist_oil_pipe.js';
import dist_oil_train from '../../../images/distribution/dist_oil_train.js';
import dist_ng_pipe from '../../../images/distribution/dist_ng_pipe.js';
import dist_elec_grid from '../../../images/distribution/dist_elec_grid.js';


// Processing
import process_frac_dist from '../../../images/processing/process_frac_dist.js';
import process_candu from '../../../images/processing/process_candu.js';
import process_coal_pp from '../../../images/processing/process_coal_pp.js';
import process_hydro from '../../../images/processing/process_hydro.js';
import process_ng_pp from '../../../images/processing/process_ng_pp.js';
import process_ng_process from '../../../images/processing/process_ng_process.js';
import process_solar_pp from '../../../images/processing/process_solar_pp.js';
import process_wind_pp from '../../../images/processing/process_wind_pp.js';


// Primary Energy
import primary_crude_oil from '../../../images/primary_energy/primary_crude_oil.js';
import primary_uranium from '../../../images/primary_energy/primary_uranium.js';
import primary_methane from '../../../images/primary_energy/primary_methane.js';
import primary_raw_ng from '../../../images/primary_energy/primary_raw_ng.js';
import primary_sun from '../../../images/primary_energy/primary_sun.js';
import primary_water from '../../../images/primary_energy/primary_water.js';
import primary_wind from '../../../images/primary_energy/primary_wind.js';
import primary_coal from '../../../images/primary_energy/primary_coal.js';


class EnergyDecisionsModel {

  constructor() {

    // Units and quantities of service and primary energy
    this.service_quant = null;
    this.primary_quant = null;
    this.service_unit = null;
    this.primary_unit = null;

    // Initializing
    this.All_keys = [];
    this.All_pics = [];
    this.All_stages = [];  
    this.All_inputs = [];
    this.All_outputs = [];
    this.All_quant = [];
    this.All_unit = [];
    this.All_conv = [];
    this.All_env_cons = [];
    this.All_env_cons_unit = [];
    this.All_env_cons_conv = [];
    this.All_spec_string = [];


    // Loading Elements

    /////////////////////////////////////////////////////////////////////////////////////////////////////
    // SERVICE
    this.All_keys.push('Personal Transport');
    this.All_pics.push(service_p_transport);
    this.All_stages.push('Service');
    this.All_inputs.push('p_trans');
    this.All_outputs.push('p_trans_tools');
    this.All_quant.push(1);
    this.All_unit.push('km');
    this.All_conv.push(0);
    this.All_env_cons.push('NONE');
    this.All_env_cons_unit.push('NONE');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Salient');
    
    this.All_keys.push('Goods Transport');
    this.All_pics.push(service_g_transport);
    this.All_stages.push('Service');
    this.All_inputs.push('g_trans');
    this.All_outputs.push('g_trans_tools');
    this.All_quant.push(1);
    this.All_unit.push('km');
    this.All_conv.push(0);
    this.All_env_cons.push('NONE');
    this.All_env_cons_unit.push('NONE');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Salient');

    this.All_keys.push('Kitchen Appliances');
    this.All_pics.push(service_kitchen);
    this.All_stages.push('Service');
    this.All_inputs.push('kitchen');
    this.All_outputs.push('kitchen_tools');
    this.All_quant.push(1);
    this.All_unit.push('h');
    this.All_conv.push(0);
    this.All_env_cons.push('NONE');
    this.All_env_cons_unit.push('NONE');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Salient');

    this.All_keys.push('Lighting');
    this.All_pics.push(service_lighting);
    this.All_stages.push('Service');
    this.All_inputs.push('light');
    this.All_outputs.push('light_tools');
    this.All_quant.push(1);
    this.All_unit.push('h');
    this.All_conv.push(0);
    this.All_env_cons.push('NONE');
    this.All_env_cons_unit.push('NONE');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Salient');


    /////////////////////////////////////////////////////////////////////////////////////////////////////
    // TOOL CATEGORIES
    //======================================= Personal Transport ========================================
    this.All_keys.push('Car');
    this.All_pics.push(tool_car);
    this.All_stages.push('Tool');
    this.All_inputs.push('p_trans_tools');
    this.All_outputs.push('tool_car');
    this.All_quant.push(0);
    this.All_unit.push('km/km');
    this.All_conv.push(1);
    this.All_env_cons.push('NONE');
    this.All_env_cons_unit.push('NONE');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Specifier');

    this.All_keys.push('Bus');
    this.All_pics.push(tool_bus);
    this.All_stages.push('Tool');
    this.All_inputs.push('p_trans_tools');
    this.All_outputs.push('tool_bus');
    this.All_quant.push(0);
    this.All_unit.push('km/km');
    this.All_conv.push(1);
    this.All_env_cons.push('NONE');
    this.All_env_cons_unit.push('NONE');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Specifier');

    this.All_keys.push('Train/Trolley');
    this.All_pics.push(tool_p_train);
    this.All_stages.push('Tool');
    this.All_inputs.push('p_trans_tools');
    this.All_outputs.push('tool_p_train');
    this.All_quant.push(0);
    this.All_unit.push('km/km');
    this.All_conv.push(1);
    this.All_env_cons.push('NONE');
    this.All_env_cons_unit.push('NONE');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Specifier');

    this.All_keys.push('Bicycle');
    this.All_pics.push(tool_bicycle);
    this.All_stages.push('Tool');
    this.All_inputs.push('p_trans_tools');
    this.All_outputs.push('tool_bike');
    this.All_quant.push(0);
    this.All_unit.push('km/km');
    this.All_conv.push(1);
    this.All_env_cons.push('NONE');
    this.All_env_cons_unit.push('NONE');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Specifier');

    this.All_keys.push('Scooter');
    this.All_pics.push(tool_scooter);
    this.All_stages.push('Tool');
    this.All_inputs.push('p_trans_tools');
    this.All_outputs.push('tool_scooter');
    this.All_quant.push(0);
    this.All_unit.push('km/km');
    this.All_conv.push(1);
    this.All_env_cons.push('NONE');
    this.All_env_cons_unit.push('NONE');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Specifier');
  
    //======================================= Goods Transport ========================================
    this.All_keys.push('Semi-Truck');
    this.All_pics.push(tool_semitruck);
    this.All_stages.push('Tool');
    this.All_inputs.push('g_trans_tools');
    this.All_outputs.push('tool_semitruck');
    this.All_quant.push(0);
    this.All_unit.push('km/km');
    this.All_conv.push(1);
    this.All_env_cons.push('NONE');
    this.All_env_cons_unit.push('NONE');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Specifier');

    this.All_keys.push('Cargo Train');
    this.All_pics.push(tool_g_train);
    this.All_stages.push('Tool');
    this.All_inputs.push('g_trans_tools');
    this.All_outputs.push('tool_g_train');
    this.All_quant.push(0);
    this.All_unit.push('km/km');
    this.All_conv.push(1);
    this.All_env_cons.push('NONE');
    this.All_env_cons_unit.push('NONE');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Specifier');

    this.All_keys.push('Freight Boat');
    this.All_pics.push(tool_g_boat);
    this.All_stages.push('Tool');
    this.All_inputs.push('g_trans_tools');
    this.All_outputs.push('tool_g_boat');
    this.All_quant.push(0);
    this.All_unit.push('km/km');
    this.All_conv.push(1);
    this.All_env_cons.push('NONE');
    this.All_env_cons_unit.push('NONE');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Specifier');

    //======================================= Kitchen Appliances ========================================
    this.All_keys.push('Refrigerator');
    this.All_pics.push(tool_fridge);
    this.All_stages.push('Tool');
    this.All_inputs.push('kitchen_tools');
    this.All_outputs.push('tool_fridge');
    this.All_quant.push(0);
    this.All_unit.push('km/km');
    this.All_conv.push(1);
    this.All_env_cons.push('NONE');
    this.All_env_cons_unit.push('NONE');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Specifier');

    this.All_keys.push('Microwave');
    this.All_pics.push(tool_microwave);
    this.All_stages.push('Tool');
    this.All_inputs.push('kitchen_tools');
    this.All_outputs.push('tool_microwave');
    this.All_quant.push(0);
    this.All_unit.push('km/km');
    this.All_conv.push(1);
    this.All_env_cons.push('NONE');
    this.All_env_cons_unit.push('NONE');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Specifier');

    this.All_keys.push('Stove');
    this.All_pics.push(tool_stove);
    this.All_stages.push('Tool');
    this.All_inputs.push('kitchen_tools');
    this.All_outputs.push('tool_stove');
    this.All_quant.push(0);
    this.All_unit.push('km/km');
    this.All_conv.push(1);
    this.All_env_cons.push('NONE');
    this.All_env_cons_unit.push('NONE');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Specifier');

    //======================================= Lighting ========================================
    this.All_keys.push('Incandescent Bulb');
    this.All_pics.push(tool_bulb_incand);
    this.All_stages.push('Tool');
    this.All_inputs.push('light_tools');
    this.All_outputs.push('tool_bulb_incand');
    this.All_quant.push(0);
    this.All_unit.push('km/km');
    this.All_conv.push(1);
    this.All_env_cons.push('NONE');
    this.All_env_cons_unit.push('NONE');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Specifier');

    this.All_keys.push('LED Bulb');
    this.All_pics.push(tool_bulb_led);
    this.All_stages.push('Tool');
    this.All_inputs.push('light_tools');
    this.All_outputs.push('tool_bulb_led');
    this.All_quant.push(0);
    this.All_unit.push('km/km');
    this.All_conv.push(1);
    this.All_env_cons.push('NONE');
    this.All_env_cons_unit.push('NONE');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Specifier');


    /////////////////////////////////////////////////////////////////////////////////////////////////////
    // TOOLS
    //======================================= Personal Transport ========================================
    this.All_keys.push('Oil Product Bus');
    this.All_pics.push(curr_bus_oil);
    this.All_stages.push('Currency');
    this.All_inputs.push('tool_bus');
    this.All_outputs.push('oil_products');
    this.All_quant.push(0);
    this.All_unit.push('km/L');
    this.All_conv.push(1);
    this.All_env_cons.push('CO2');
    this.All_env_cons_unit.push('L/L');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Salient');

    this.All_keys.push('Electric Bus');
    this.All_pics.push(curr_bus_elec);
    this.All_stages.push('Currency');
    this.All_inputs.push('tool_bus');
    this.All_outputs.push('electricity');
    this.All_quant.push(0);
    this.All_unit.push('km/kWh');
    this.All_conv.push(1);
    this.All_env_cons.push('Toxic_Production');
    this.All_env_cons_unit.push('kg/unit');
    this.All_env_cons_conv.push(-1);
    this.All_spec_string.push('Salient');

    this.All_keys.push('Natural Gas Bus');
    this.All_pics.push(curr_bus_ng);
    this.All_stages.push('Currency');
    this.All_inputs.push('tool_bus');
    this.All_outputs.push('nat_gas');
    this.All_quant.push(0);
    this.All_unit.push('km/L');
    this.All_conv.push(1);
    this.All_env_cons.push('CO2');
    this.All_env_cons_unit.push('L/L');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Salient');

    this.All_keys.push('Oil Product Car');
    this.All_pics.push(curr_car_oil);
    this.All_stages.push('Currency');
    this.All_inputs.push('tool_car');
    this.All_outputs.push('oil_products');
    this.All_quant.push(0);
    this.All_unit.push('km/L');
    this.All_conv.push(1);
    this.All_env_cons.push('CO2');
    this.All_env_cons_unit.push('L/L');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Salient');

    this.All_keys.push('Electric Car');
    this.All_pics.push(curr_car_elec);
    this.All_stages.push('Currency');
    this.All_inputs.push('tool_car');
    this.All_outputs.push('electricity');
    this.All_quant.push(0);
    this.All_unit.push('km/kWh');
    this.All_conv.push(1);
    this.All_env_cons.push('Toxic_Production');
    this.All_env_cons_unit.push('kg/unit');
    this.All_env_cons_conv.push(-1);
    this.All_spec_string.push('Salient');

    this.All_keys.push('Natural Gas Car');
    this.All_pics.push(curr_car_ng);
    this.All_stages.push('Currency');
    this.All_inputs.push('tool_car');
    this.All_outputs.push('nat_gas');
    this.All_quant.push(0);
    this.All_unit.push('km/L');
    this.All_conv.push(1);
    this.All_env_cons.push('CO2');
    this.All_env_cons_unit.push('L/L');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Salient');

    this.All_keys.push('Oil Product Train');
    this.All_pics.push(curr_p_train_oil);
    this.All_stages.push('Currency');
    this.All_inputs.push('tool_p_train');
    this.All_outputs.push('oil_products');
    this.All_quant.push(0);
    this.All_unit.push('km/L');
    this.All_conv.push(1);
    this.All_env_cons.push('CO2');
    this.All_env_cons_unit.push('L/L');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Salient');

    this.All_keys.push('Electric Train/Trolley');
    this.All_pics.push(curr_p_train_elec);
    this.All_stages.push('Currency');
    this.All_inputs.push('tool_p_train');
    this.All_outputs.push('electricity');
    this.All_quant.push(0);
    this.All_unit.push('km/kWh');
    this.All_conv.push(1);
    this.All_env_cons.push('Toxic_Production');
    this.All_env_cons_unit.push('kg/unit');
    this.All_env_cons_conv.push(-1);
    this.All_spec_string.push('Salient');

    this.All_keys.push('Electric Scooter');
    this.All_pics.push(curr_scooter_elec);
    this.All_stages.push('Currency');
    this.All_inputs.push('tool_scooter');
    this.All_outputs.push('electricity');
    this.All_quant.push(0);
    this.All_unit.push('km/kWh');
    this.All_conv.push(1);
    this.All_env_cons.push('Toxic Production');
    this.All_env_cons_unit.push('kg/unit');
    this.All_env_cons_conv.push(-1);
    this.All_spec_string.push('Salient');

    this.All_keys.push('Electric Bike');
    this.All_pics.push(curr_bicycle_elec);
    this.All_stages.push('Currency');
    this.All_inputs.push('tool_bike');
    this.All_outputs.push('electricity');
    this.All_quant.push(0);
    this.All_unit.push('km/kWh');
    this.All_conv.push(1);
    this.All_env_cons.push('Toxic Production');
    this.All_env_cons_unit.push('kg/unit');
    this.All_env_cons_conv.push(-1);
    this.All_spec_string.push('Salient');

    //=========================================== Freight Transport =================================
    this.All_keys.push('Oil Product Semi-Truck');
    this.All_pics.push(curr_semitruck_oil);
    this.All_stages.push('Currency');
    this.All_inputs.push('tool_semitruck');
    this.All_outputs.push('oil_products');
    this.All_quant.push(0);
    this.All_unit.push('km/L');
    this.All_conv.push(1);
    this.All_env_cons.push('CO2');
    this.All_env_cons_unit.push('L/L');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Salient');

    this.All_keys.push('Oil Product Cargo Train');
    this.All_pics.push(curr_g_train_oil);
    this.All_stages.push('Currency');
    this.All_inputs.push('tool_g_train');
    this.All_outputs.push('oil_products');
    this.All_quant.push(0);
    this.All_unit.push('km/L');
    this.All_conv.push(1);
    this.All_env_cons.push('CO2');
    this.All_env_cons_unit.push('L/L');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Salient');

    this.All_keys.push('Oil Product Freight Boat');
    this.All_pics.push(curr_boat_oil);
    this.All_stages.push('Currency');
    this.All_inputs.push('tool_g_boat');
    this.All_outputs.push('oil_products');
    this.All_quant.push(0);
    this.All_unit.push('km/L');
    this.All_conv.push(1);
    this.All_env_cons.push('CO2');
    this.All_env_cons_unit.push('L/L');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Salient');

    //============================================ Kitchen ==================================================
    this.All_keys.push('Electric Stove');
    this.All_pics.push(curr_stove_elec);
    this.All_stages.push('Currency');
    this.All_inputs.push('tool_stove');
    this.All_outputs.push('electricity');
    this.All_quant.push(0);
    this.All_unit.push('h/kWh');
    this.All_conv.push(1);
    this.All_env_cons.push('Toxic Production');
    this.All_env_cons_unit.push('kg/unit');
    this.All_env_cons_conv.push(-1);
    this.All_spec_string.push('Salient');

    this.All_keys.push('Gas Stove');
    this.All_pics.push(curr_stove_ng);
    this.All_stages.push('Currency');
    this.All_inputs.push('tool_stove');
    this.All_outputs.push('nat_gas');
    this.All_quant.push(0);
    this.All_unit.push('h/kWh');
    this.All_conv.push(1);
    this.All_env_cons.push('Toxic Production');
    this.All_env_cons_unit.push('kg/unit');
    this.All_env_cons_conv.push(-1);
    this.All_spec_string.push('Salient');

    this.All_keys.push('Electirc Microwave');
    this.All_pics.push(curr_microwave_elec);
    this.All_stages.push('Currency');
    this.All_inputs.push('tool_microwave');
    this.All_outputs.push('electricity');
    this.All_quant.push(0);
    this.All_unit.push('h/kWh');
    this.All_conv.push(1);
    this.All_env_cons.push('Toxic Production');
    this.All_env_cons_unit.push('kg/unit');
    this.All_env_cons_conv.push(-1);
    this.All_spec_string.push('Salient');

    this.All_keys.push('Electric Refrigerator');
    this.All_pics.push(curr_fridge_elec);
    this.All_stages.push('Currency');
    this.All_inputs.push('tool_fridge');
    this.All_outputs.push('electricity');
    this.All_quant.push(0);
    this.All_unit.push('h/kWh');
    this.All_conv.push(1);
    this.All_env_cons.push('Toxic Production');
    this.All_env_cons_unit.push('kg/unit');
    this.All_env_cons_conv.push(-1);
    this.All_spec_string.push('Salient');

    //============================================ Lighting ==================================================
    this.All_keys.push('Electric Incandescent Bulb');
    this.All_pics.push(curr_incand_bulb_elec);
    this.All_stages.push('Currency');
    this.All_inputs.push('tool_bulb_incand');
    this.All_outputs.push('electricity');
    this.All_quant.push(0);
    this.All_unit.push('h/kWh');
    this.All_conv.push(1);
    this.All_env_cons.push('Toxic_Production');
    this.All_env_cons_unit.push('kg/unit');
    this.All_env_cons_conv.push(-1);
    this.All_spec_string.push('Salient');

    this.All_keys.push('Electric LED Bulb');
    this.All_pics.push(curr_led_bulb_elec);
    this.All_stages.push('Currency');
    this.All_inputs.push('tool_bulb_led');
    this.All_outputs.push('electricity');
    this.All_quant.push(0);
    this.All_unit.push('h/kWh');
    this.All_conv.push(1);
    this.All_env_cons.push('Toxic_Production');
    this.All_env_cons_unit.push('kg/unit');
    this.All_env_cons_conv.push(-1);
    this.All_spec_string.push('Salient');
    //==============================================================================================


    // DISTRIBUTIONS
    this.All_keys.push('Oil Pipelines');
    this.All_pics.push(dist_oil_pipe);
    this.All_stages.push('Distribution');
    this.All_inputs.push('oil_products');
    this.All_outputs.push('oil_pipes');
    this.All_quant.push(0);
    this.All_unit.push('L/L');
    this.All_conv.push(1);
    this.All_env_cons.push('Maintanance_Cost');
    this.All_env_cons_unit.push('$/L');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Salient');

    this.All_keys.push('Oil Trains');
    this.All_pics.push(dist_oil_train);
    this.All_stages.push('Distribution');
    this.All_inputs.push('oil_products');
    this.All_outputs.push('oil_trains');
    this.All_quant.push(0);
    this.All_unit.push('L/L');
    this.All_conv.push(1);
    this.All_env_cons.push(['Maintanance_Cost', 'CO2']);
    this.All_env_cons_unit.push(['$/L', 'L/L']);
    this.All_env_cons_conv.push([1,1]);
    this.All_spec_string.push('Salient');

    this.All_keys.push('Natural Gas Pipelines');
    this.All_pics.push(dist_ng_pipe);
    this.All_stages.push('Distribution');
    this.All_inputs.push('nat_gas');
    this.All_outputs.push('ng_pipes');
    this.All_quant.push(0);
    this.All_unit.push('L/L');
    this.All_conv.push(1);
    this.All_env_cons.push('Maintanance_Cost');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Salient');

    this.All_keys.push('Electricity Grid');
    this.All_pics.push(dist_elec_grid);
    this.All_stages.push('Distribution');
    this.All_inputs.push('electricity');
    this.All_outputs.push('elec_grid');
    this.All_quant.push(0);
    this.All_unit.push('kWh/kWh');
    this.All_conv.push(1);
    this.All_env_cons.push('Maintanance_Cost');
    this.All_env_cons_unit.push('$/L');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Salient');



    // PROCESSING
    this.All_keys.push('Fractional Distillation');
    this.All_pics.push(process_frac_dist);
    this.All_stages.push('Processing');
    this.All_inputs.push('oil_pipes');
    this.All_outputs.push('crude_oil');
    this.All_quant.push(0);
    this.All_unit.push('L/L');
    this.All_conv.push(1);
    this.All_env_cons.push('Pollution');
    this.All_env_cons_unit.push('kg/L');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Salient');

    this.All_keys.push('Fractional Distillation');
    this.All_pics.push(process_frac_dist);
    this.All_stages.push('Processing');
    this.All_inputs.push('oil_trains');
    this.All_outputs.push('crude_oil');
    this.All_quant.push(0);
    this.All_unit.push('L/L');
    this.All_conv.push(1);
    this.All_env_cons.push('Pollution');
    this.All_env_cons_unit.push('kg/L');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Salient');

    this.All_keys.push('Fractional Distillation');
    this.All_pics.push(process_frac_dist);
    this.All_stages.push('Processing');
    this.All_inputs.push('oil_tankers');
    this.All_outputs.push('crude_oil');
    this.All_quant.push(0);
    this.All_unit.push('L/L');
    this.All_conv.push(1);
    this.All_env_cons.push('Pollution');
    this.All_env_cons_unit.push('kg/L');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Salient');


    this.All_keys.push('Natural Gas Processing');
    this.All_pics.push(process_ng_process);
    this.All_stages.push('Processing');
    this.All_inputs.push('ng_pipes');
    this.All_outputs.push('raw_ng');
    this.All_quant.push(0);
    this.All_unit.push('kWh/kg');
    this.All_conv.push(1);
    this.All_env_cons.push(['Maintanance_Cost', 'Radiation']);
    this.All_env_cons_unit.push(['$/L', 'Ci/kg']);
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Salient');

    this.All_keys.push('Natural Gas Processing');
    this.All_pics.push(process_ng_process);
    this.All_stages.push('Processing');
    this.All_inputs.push('ng_boats');
    this.All_outputs.push('raw_ng');
    this.All_quant.push(0);
    this.All_unit.push('kWh/kg');
    this.All_conv.push(1);
    this.All_env_cons.push(['Maintanance_Cost', 'Radiation']);
    this.All_env_cons_unit.push(['$/L', 'Ci/kg']);
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Salient');


    this.All_keys.push('Nuclear Power Plant (CANDU)');
    this.All_pics.push(process_candu);
    this.All_stages.push('Processing');
    this.All_inputs.push('elec_grid');
    this.All_outputs.push('candu_pp');
    this.All_quant.push(0);
    this.All_unit.push('kWh/kg');
    this.All_conv.push(1);
    this.All_env_cons.push(['Maintanance_Cost', 'Radiation']);
    this.All_env_cons_unit.push(['$/L', 'Ci/kg']);
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Salient');

    this.All_keys.push('Hydropower');
    this.All_pics.push(process_hydro);
    this.All_stages.push('Processing');
    this.All_inputs.push('elec_grid');
    this.All_outputs.push('hydro_pp');
    this.All_quant.push(0);
    this.All_unit.push('kWh/kg');
    this.All_conv.push(1);
    this.All_env_cons.push(['Maintanance_Cost', 'Radiation']);
    this.All_env_cons_unit.push(['$/L', 'Ci/kg']);
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Salient');

    this.All_keys.push('Coal Power Plant');
    this.All_pics.push(process_coal_pp);
    this.All_stages.push('Processing');
    this.All_inputs.push('elec_grid');
    this.All_outputs.push('coal_pp');
    this.All_quant.push(0);
    this.All_unit.push('kWh/kg');
    this.All_conv.push(1);
    this.All_env_cons.push(['Maintanance_Cost', 'Radiation']);
    this.All_env_cons_unit.push(['$/L', 'Ci/kg']);
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Salient');

    this.All_keys.push('Natural Gas Power Plant');
    this.All_pics.push(process_ng_pp);
    this.All_stages.push('Processing');
    this.All_inputs.push('elec_grid');
    this.All_outputs.push('ng_pp');
    this.All_quant.push(0);
    this.All_unit.push('kWh/kg');
    this.All_conv.push(1);
    this.All_env_cons.push(['Maintanance_Cost', 'Radiation']);
    this.All_env_cons_unit.push(['$/L', 'Ci/kg']);
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Salient');

    this.All_keys.push('Solar Power');
    this.All_pics.push(process_solar_pp);
    this.All_stages.push('Processing');
    this.All_inputs.push('elec_grid');
    this.All_outputs.push('solar_pp');
    this.All_quant.push(0);
    this.All_unit.push('kWh/kg');
    this.All_conv.push(1);
    this.All_env_cons.push(['Maintanance_Cost', 'Radiation']);
    this.All_env_cons_unit.push(['$/L', 'Ci/kg']);
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Salient');

    this.All_keys.push('Wind Power');
    this.All_pics.push(process_wind_pp);
    this.All_stages.push('Processing');
    this.All_inputs.push('elec_grid');
    this.All_outputs.push('wind_pp');
    this.All_quant.push(0);
    this.All_unit.push('kWh/kg');
    this.All_conv.push(1);
    this.All_env_cons.push(['Maintanance_Cost', 'Radiation']);
    this.All_env_cons_unit.push(['$/L', 'Ci/kg']);
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Salient');



    // Primary Energy
    this.All_keys.push('Uranium Ore');
    this.All_pics.push(primary_uranium);
    this.All_stages.push('Primary Energy');
    this.All_inputs.push('candu_pp');
    this.All_outputs.push('uranium_ore_amount');
    this.All_quant.push(0);
    this.All_unit.push('kg');
    this.All_conv.push(0);
    this.All_env_cons.push('Radiation');
    this.All_env_cons_unit.push('Ci/kg');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Salient');

    this.All_keys.push('Crude Oil');
    this.All_pics.push(primary_crude_oil);
    this.All_stages.push('Primary Energy');
    this.All_inputs.push('crude_oil');
    this.All_outputs.push('crude_oil_amount');
    this.All_quant.push(1);
    this.All_unit.push('L');
    this.All_conv.push(0);
    this.All_env_cons.push('Oil_Spillage');
    this.All_env_cons_unit.push('L/L');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Salient');

    this.All_keys.push('Raw Natural Gas');
    this.All_pics.push(primary_raw_ng);
    this.All_stages.push('Primary Energy');
    this.All_inputs.push('raw_ng');
    this.All_outputs.push('raw_ng_amount');
    this.All_quant.push(1);
    this.All_unit.push('L');
    this.All_conv.push(0);
    this.All_env_cons.push('Oil_Spillage');
    this.All_env_cons_unit.push('L/L');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Salient');

    this.All_keys.push('Natural Gas');
    this.All_pics.push(primary_methane);
    this.All_stages.push('Primary Energy');
    this.All_inputs.push('ng_pp');
    this.All_outputs.push('methane_amaount');
    this.All_quant.push(1);
    this.All_unit.push('L');
    this.All_conv.push(0);
    this.All_env_cons.push('Oil_Spillage');
    this.All_env_cons_unit.push('L/L');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Salient');

    this.All_keys.push('Coal');
    this.All_pics.push(primary_coal);
    this.All_stages.push('Primary Energy');
    this.All_inputs.push('coal_pp');
    this.All_outputs.push('coal_amount');
    this.All_quant.push(1);
    this.All_unit.push('L');
    this.All_conv.push(0);
    this.All_env_cons.push('Oil_Spillage');
    this.All_env_cons_unit.push('L/L');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Salient');

    this.All_keys.push('Wind');
    this.All_pics.push(primary_wind);
    this.All_stages.push('Primary Energy');
    this.All_inputs.push('wind_pp');
    this.All_outputs.push('wind_amount');
    this.All_quant.push(1);
    this.All_unit.push('L');
    this.All_conv.push(0);
    this.All_env_cons.push('Oil_Spillage');
    this.All_env_cons_unit.push('L/L');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Salient');

    this.All_keys.push('Sun');
    this.All_pics.push(primary_sun);
    this.All_stages.push('Primary Energy');
    this.All_inputs.push('solar_pp');
    this.All_outputs.push('sun_amount');
    this.All_quant.push(1);
    this.All_unit.push('L');
    this.All_conv.push(0);
    this.All_env_cons.push('Oil_Spillage');
    this.All_env_cons_unit.push('L/L');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Salient');

    this.All_keys.push('Water');
    this.All_pics.push(primary_water);
    this.All_stages.push('Primary Energy');
    this.All_inputs.push('hydro_pp');
    this.All_outputs.push('water_amount');
    this.All_quant.push(1);
    this.All_unit.push('L');
    this.All_conv.push(0);
    this.All_env_cons.push('Oil_Spillage');
    this.All_env_cons_unit.push('L/L');
    this.All_env_cons_conv.push(1);
    this.All_spec_string.push('Salient');


    // Action Types
    this.action = null;

    // Initializing information about selected item
    this.selected_key = null;
    this.selected_output = null;
    this.selected_input = null;
    this.selected_stage = null;

    // Initializing information for buttons
    this.buttons_indeces = [];

    // Initializing infrmation about selections
    this.selections_indeces = [];
    this.selections_pics = [];

    this.SwitchProperties = new SwitchProperties('BlaBlaBlubBlub');

  }
}

exampleSim.register( 'EnergyDecisionsModel', EnergyDecisionsModel );
export default EnergyDecisionsModel;