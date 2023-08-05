<?php

define('DEBUG', true);

if (!defined('S_VERSION')) {
    define('S_VERSION', DEBUG ? microtime() : '0.9');
}

add_theme_support( 'title-tag' );

if( !is_admin() ) {

    function vxlpro9_theme_setup() {
        
        // Styles
        wp_enqueue_style( 'vxlpro9-styles', get_theme_file_uri( '/assets/styles/styles.css' ), array(), S_VERSION, 'all' );
    
        // Scripts
        wp_enqueue_script( 'vxlpro9-script', get_theme_file_uri( '/assets/js/main.js' ), array(), S_VERSION, true);
    
    }
    add_action( 'after_setup_theme', 'vxlpro9_theme_setup' );
}
