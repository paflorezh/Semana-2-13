<template>
  <div id="MenuBanner">
    <header class="header">
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light justify-content-center"
      >
        <a class="navbar-brand d-inline-block align-top" href="#">
          <img
            src="../assets/SN.png"
            width="200"
            height="90"
            class="d-inline-block align-top"
            alt=""
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="index.hmtl"
                >Inicio<span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Noticias">Noticias</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#Equipo">Equipo</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </nav>
    </header>
    <div id="demo" class="carousel slide" data-ride="carousel">
      <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
        <li data-target="#demo" data-slide-to="3"></li>
        <li data-target="#demo" data-slide-to="4"></li>
        <li data-target="#demo" data-slide-to="5"></li>
      </ul>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src= "../assets/1.jpg"
            alt="Los Angeles"
            width="1100"
            height="300"
          />
          <div class="carousel-caption">
            <p class="txt_c">LAS ÚLTIMAS NOTICIAS DEL DEPORTE</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/2.jpeg" alt="Chicago" width="1100" height="300" />
          <div class="carousel-caption">
            <p class="txt_c">LAS ÚLTIMAS NOTICIAS DEL DEPORTE</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/3.jpeg" alt="New York" width="1100" height="300" />
          <div class="carousel-caption">
            <p class="txt_c">LAS ÚLTIMAS NOTICIAS DEL DEPORTE</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/4.jpeg" alt="New York" width="1100" height="300" />
          <div class="carousel-caption">
            <p class="txt_c">LAS ÚLTIMAS NOTICIAS DEL DEPORTE</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/5.jpeg" alt="New York" width="1100" height="300" />
          <div class="carousel-caption">
            <p class="txt_c">LAS ÚLTIMAS NOTICIAS DEL DEPORTE</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/6.jpeg" alt="New York" width="1100" height="300" />
          <div class="carousel-caption">
            <p class="txt_c">LAS ÚLTIMAS NOTICIAS DEL DEPORTE</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#demo" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#demo" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
    name : 'MenuBanner'
};
</script>

<style>


.navbar-brand {
	color:#243755;
	font-size: 25px;
}
.btn{
	color:#243755;
	border-color: #243755;

}
.btn:hover, a.btn:focus{
background:#243755;
}
.form-control{
	border-color: #243755;
}
.carousel-inner img {
    width: 100%;
    height: 700px;
    -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0))) 


  }
  .carousel-inner {
    background-image: linear-gradient(#EB5A47,#EB5A47,#213755);
 
  }

</style>