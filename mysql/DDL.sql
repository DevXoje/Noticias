use noticiero;

DROP TABLE IF EXISTS noticia;

CREATE TABLE noticia(
	id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(50) NOT NULL UNIQUE,
    subtitulo VARCHAR(100) NOT NULL,
    imagen VARCHAR(50) NOT NULL,
    descripcion TEXT NOT NULL
);

SELECT * FROM noticia;