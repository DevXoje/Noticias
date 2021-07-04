<?php
 include ("conecta.php");
 $devuelve="SELECT * FROM noticia;";

    $resultado=mysqli_query($con,$devuelve);// se le pasa la conexión y la sql a ejecutar
    echo json_encode($resultado);
