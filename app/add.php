<?php
session_start();
$session_id= session_id();

include_once __DIR__.'/config/conexion.php';

$name = isset( $_POST['name'] ) ? $_POST['name'] : '';
$email = isset( $_POST['email'] ) ? $_POST['email'] : '';
$date = isset( $_POST['date'] ) ? $_POST['date'] : '';


$data = array(
	'name'=> $name,
	'email'=> $email,
	'date'=> $date
);

$PDO= Conexion::getInstance();

$stmt = $PDO->dbh->prepare("
	INSERT INTO datos
	(nombres,correo,cumpleaños) VALUES ('$name', '$email', '$date');"
);

$stmt->execute();
$stmt = null;
// var_dump($stmt->execute());

$_SESSION = array();
session_destroy();

echo json_encode($response = array(
	"result"  => true,
	"message" => "Registro insertado correctamente",
	"data"   => $data
));
