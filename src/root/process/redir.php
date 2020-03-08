<?php
// requested URL
$addr = strtolower($_SERVER['REQUEST_URI']);
$url = '';

// redirects
$redir = array(

	'index' => '',
	'welcome' => '',
	'home' => '',
	'about' => 'about/',
	'privacy' => 'about/privacy/',
	'serv' => 'service/',
	'contact' => 'contact/',
	'mail' => 'contact/',
	'tel' => 'contact/'

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
