<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept, Origin, Authorization, Cache-Control, X-File-Name");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");


class Conexion{

	// ADAPTADOR DE LA CONEXIÓN A LA BD
	public $dbh;
	private $dsn = 'mysql:host=localhost;dbname=don_santiago;charset=utf8';
	// private $db_user = 'inoutletpe_v-dep';
	private $db_user = 'root';
	// private $bd_pass = '1n0utl3t@';
	private $bd_pass = '';

	// VARIABLE ARRAY PARA LA RESPUESTA DEL SERVIDOR
	public $response = array(
		"result"  => false,
		"message" => "No fue posible ejecutar la petición",
		"data"   => []
	);

	// VARIABLE PARA INSTANCIAR LA CLASE UNA SOLA VEZ
	private static $instance;

	protected function __construct(){

		try{
			// CONFIGURAR CONEXION CON LA BD
			$this->dbh= new PDO($this->dsn, $this->db_user, $this->bd_pass);

		}catch(Exception $e){
			die($e->getMessage());
		}
	}

	public static function getInstance(){
		if( static::$instance === null ){
			static::$instance= new static();
		}

		return static::$instance;
	}
}
