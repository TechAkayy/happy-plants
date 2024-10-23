<?php
/* 
Use this file to add custom PHP code to your theme or plugin 
*/

// Registers and enqueues a module.
wp_deregister_script_module('happyplants/petitevue');
wp_register_script_module(
  'happyplants/petitevue',
  get_template_directory_uri() . '/modules/petite-vue-0.2.2.js',
  [],
  '1.0.7',
  true
);
wp_deregister_script_module('happyplants/weathercard');
wp_register_script_module(
  'happyplants/weathercard',
  get_template_directory_uri() . '/modules/weather-card.js',
  [],
  '1.0.7',
  true
);

?>