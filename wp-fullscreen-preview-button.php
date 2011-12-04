<?php
/*
Plugin Name: wp-fullscreen-preview-button
Plugin URI: http://fukata.org/dev/wp-plugin/wp-fullscreen-preview-button/
Description: Add preview button at fullscreen writing mode.
Version: 0.1.0
Author: Tatsuya Fukata
Author URI: http://fukata.org
*/

function wfpb_add_button_script($hook) {
	if ( !in_array($hook, array('post.php', 'post-new.php', 'edit.php')) ) {
		return ;
	}
	
	$plugin_dir = '';
	if ( !defined('WP_PLUGIN_DIR') ) {
		$plugin_dir = str_replace( ABSPATH, '', dirname(__FILE__) );
	} else {
		$plugin_dir = dirname( plugin_basename(__FILE__) );
	}

	wp_enqueue_script( 'fullscreen_preview_button', '/' . PLUGINDIR . '/' . $plugin_dir . '/fullscreen_preview_button.js', false, '', false );
}

add_action('admin_enqueue_scripts', 'wfpb_add_button_script');
?>
