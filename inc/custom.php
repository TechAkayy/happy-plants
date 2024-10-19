<?php
/* 
Use this file to add custom PHP code to your theme or plugin 
*/

// Registers and enqueues a module.
wp_deregister_script_module('happyplants/petite-vue');
wp_register_script_module(
  'happyplants/petite-vue',
  get_template_directory_uri() . '/modules/petite-vue-0.2.2.js',
  [],
  '1.0.7',
  true
);

?>