class Noticias {
  constructor() {
    this.datos = [
      {
        titulo: "Titulo 1",
        subtitulo: "Subtitulo 2",
        img: "periodista",
        descripcion:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
    ];
    this.resultado = "";
  }
  buscar() {
    const form_searcher = document.getElementById("form_searcher");
    const user_input = document.getElementById("search_box");
    let isEncontrada = false;
    let noticia_select = {
      titulo: "",
      subtitulo: "",
      img: "",
      descripcion: "",
    };

    form_searcher.onsubmit = () => {
      const user_titulo = user_input.value;
      if (user_titulo == "") {
        alert("introduzca un titulo para buscar");
      } else {
        this.datos.forEach((dato) => {
          if (dato.titulo.includes(user_titulo)) {
            noticia_select = dato;
          }
        });
        isEncontrada = noticia_select.titulo != "";
        alert(`Noticia ${isEncontrada ? "" : "no "}encontrada`);
      }
      this.resultado = isEncontrada ? noticia_select : null;
      this.imprimirResultado();
      return false;
    };
  }
  async getDataBD() {
    const url = "./php/getData.php";
    const respuesta = await fetch(url, {});
    return respuesta.json();
  }
  imprimir() {
    const galery_cards = document.getElementById("galery_cards");
    const con = this.getDataBD();
    con
      .then((respuesta) => console.log(respuesta.json()))
      .then((data) => console.log(data.json()))
      .catch((e) => console.log(e));
    galery_cards.innerHTML = "";

    this.datos.forEach((dato) => {
      galery_cards.innerHTML += `<div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
                    <div class="card-header">Header</div>
                    <img src="./img/${dato.img}.jpg" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${dato.titulo}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${dato.subtitulo}</h6>
                        <p class="card-text">
						${dato.descripcion}
                        </p>
                    </div>
                </div>`;
    });
  }
  imprimirResultado() {
    const dato = `<div class="card text-white bg-primary mb-3" style="max-width: 20rem;" id="resultado">
				<div class="card-header">Noticia</div>
				<img src="../img/${this.resultado.img}.jpg" class="card-img-top">
				<div class="card-body">
					<h5 class="card-title">${this.resultado.titulo}</h5>
					<h6 class="card-subtitle mb-2 text-muted">${this.resultado.subtitulo}</h6>
					<p class="card-text">${this.resultado.descripcion}</p>
				</div>
                 <div class="card-footer"><button type="button" class="btn btn-warning">Accion</button></div>
			</div>`;
    document.body.innerHTML += dato;
  }
  crear() {
    const form = document.getElementById("crear_noticia");
    form.onsubmit = () => {
      const noticia = {
        titulo: document.getElementById("noticia_titulo").value,
        subtitulo: document.getElementById("noticia_subtitulo").value,
        img: document.getElementById("noticia_imagen").value,
        descripcion: document.getElementById("noticia_descripcion").value,
      };
      this.datos.push(noticia);
      //actualizar en bd
    };
  }
}
