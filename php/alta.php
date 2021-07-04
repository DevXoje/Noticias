<?php
    include ("conecta.php");// inserta el código php de la página conecta.php

    // Cargo los datos del formulario
    $titulo=$_POST["noticia_titulo"];
    $subtitulo=$_POST["noticia_subtitulo"];
    $imagen=$_POST["noticia_imagen"];
    $descripcion=$_POST["noticia_descripcion"];


    //Inserto los datos en la bd

    $insertar="INSERT INTO noticia(titulo, subtitulo, imagen, descripcion)VALUES('$titulo','$subtitulo','$imagen','$descripcion')";

    $resultado=mysqli_query($con,$insertar);// se le pasa la conexión y la sql a ejecutar

    if ($resultado)// Si se ha insertado
    {
        echo "<script>alert('Se ha registrado correctamente');
            window.location='../index.html';</script>";
    }
    else
    {
        echo "<script>alert('No se ha registrado correctamente');
            window.history.back;</script>";
    }

    mysqli_close($con);// Cierra la conexión se le pasa como parámetro el objeto de conexión
