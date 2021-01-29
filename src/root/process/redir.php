<?php
// requested URL
$addr = strtolower($_SERVER['REQUEST_URI']);
$url = '';

// redirects
$redir = array(

	'index'		=> '',
	'welcome' => '',
	'home' 		=> '',
	'hotel' 	=> 'rooms/',
	'room' 		=> 'rooms/',
	'stay' 		=> 'rooms/',
	'break' 	=> 'rooms/',
	'din' 		=> 'restaurant/',
	'lunch' 	=> 'restaurant/',
	'order'		=> 'restaurant/takeaway/',
	'take'		=> 'restaurant/takeaway/',
	'away'		=> 'restaurant/takeaway/',
	'locat' 	=> 'location/',
	'dir' 		=> 'location/',
	'map' 		=> 'location/',
	'find' 		=> 'location/',
	'area' 		=> 'location/',
	'contact' => 'contact/',
	'book' 		=> 'contact/',
	'mail' 		=> 'contact/',
	'tel' 		=> 'contact/',
	'phone' 	=> 'contact/',
	'priv' 		=> 'privacy/',

);
foreach ($redir as $pold => $pnew) if (strpos($addr, $pold) !== false) $url = '/* @echo rootURL */' . $pnew;

if ($url !== '') {

	// redirect found
	header('HTTP/1.1 301 Moved Permanently');
	header('Location: ' . $url);

}
else {

	// show error page
	header('HTTP/1.1 404 Not Found');
	include('error/index.html');

}
