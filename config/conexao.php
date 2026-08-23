<?php
require_once __DIR__ . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$host = $_ENV['URL_DB'];
$user = $_ENV['USER_DB'];
$pass = $_ENV['PASSWORD_DB'];
$port = $_ENV['PORT_DB'];
$name = $_ENV['NAME_DB'];


$conn = new pgsql($name, $host, $user, $pass, $port);


?>