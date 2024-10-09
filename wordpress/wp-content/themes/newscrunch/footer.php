<?php
/**
 * The template for displaying the footer
 *
 * @package Newscrunch
 */
if ( class_exists('Newscrunch_Plus') ):
	do_action('spncp_footer_widgets');
else:
	do_action('newscrunch_footer_widgets');
endif;

do_action('newscrunch_scrolltotop');
?>
</div>
<?php 
if(get_theme_mod('hide_show_dark_light_icon',true) == true): do_action('newscrunch_script_footer'); endif;
wp_footer(); ?>
</body>
</html>