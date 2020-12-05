<template>
<!-- Sección de noticias -->
    <section class="news" id="news">
        <div class="mt-3">
            <div class="row row-cols-2">


                <div class="noticias-grupo-1">
                    <div class="p-3 mb-2 bg-light text-dark">
                        <!--texto tomado de https://www.lapatria.com/deportes/polideportivo-regresa-mike-tyson-467368 imagen de -->
                        <!--Imagen sacada de https://www.teleradioamerica.com/2020/05/lluvia-de-ofertas-a-mike-tyson-tras-video-manopleando-que-se-hizo-viral/-->
                        <img style="float:left; margin:10px;" alt="" class="img-thumbnail" src="../assets/Tayson.jpg" />

                        <div class="new-noticias-textos">
                            <h2 class="new-noticias-textos-titulo">El regreso del gran Mike Tyson</h2>
                            <p  class="new-noticias-textos-resumen">El boxeador estadounidense Mike Tyson
                                volverá a los cuadriláteros en un combate de exhibición contra su compatriota Roy Jones
                                Jr.

                                
                            </p>
                        </div>
                        <div class="d-flex container-fluid justify-content-end pb-2 mt-n2"> <button type="button"
                            class="btn btn-outline-info"><a class="new-noticias-textos-enlace"
                            href="https://www.lapatria.com/deportes/polideportivo-regresa-mike-tyson-467368">Leer
                            más...</a></button> </div>
                    </div>
                </div>

                <br>
                <br><br><br>


                <!--Texto tomado de https://cnnespanol.cnn.com/2020/11/25/la-causa-de-muerte-de-diego-armando-maradona/-->
                <!--Imagen tomada de https://especiales.elcomercio.pe/?q=especiales/murio-diego-armando-maradona-nndd-ecvisual-ecpm/index.html-->

                <div class="p-3 mb-2 bg-secondary text-white">
                    <img style="float:left; margin:5px;" alt="" class="img-thumbnail" src="../assets/Maradona.jpg" />

                    <div class="new-noticias-textos">
                        <h3 class="new-noticias-textos-titulo">Posible causa de la muerte de Maradona
                        </h3>

                        <p  class="new-noticias-textos-resumen"> Una fuente de Justicia de
                            Argentina dijo que Diego murió por causa de
                            un edema agudo de pulmón secundario a insuficiencia cardiaca crónica reagudizada.

                            

                        </p>

                    </div>
                    <div class="d-flex container-fluid justify-content-end pb-2 mt-n2"> <button type="button"
                        class="btn btn-outline-info"><a class="new-noticias-textos-enlace"
                        href="https://cnnespanol.cnn.com/2020/11/25/la-causa-de-muerte-de-diego-armando-maradona/">Leer
                        más...</a></button> </div>
                </div>

                <!--Segundo grupo de noticias-->
                <!--Texto e imagen tomada de https://www.elpais.com.co/deportes/vuelve-el-terraco-de-oro-simbolo-a-lo-mejor-del-deporte-vallecaucano.html-->
                <div class="noticias-grupo-2">
                    <div class="p-3 mb-2 bg-secondary text-white">
                        <img style="float:left; margin:10px;" alt="" class="img-thumbnail" src="../assets/Terraco.jpeg" />

                        <div class="new-noticias-textos">
                            <h2 class="new-noticias-textos-titulo">El indio que quieren todos</h2>
                            <p  class="new-noticias-textos-resumen"> Un indio de la tribu Calima, será el símbolo de esta noche en una gala que
                                distingue el mérito deportivo de entrenadores, deportistas, dirigentes, entidades y
                                periodistas del departamento.

                                
                            </p>
                            <div class="d-flex container-fluid justify-content-end pb-2 mt-n2"> <button type="button"
                                class="btn btn-outline-info"><a class="new-noticias-textos-enlace"
                                href="https://www.elpais.com.co/deportes/vuelve-el-terraco-de-oro-simbolo-a-lo-mejor-del-deporte-vallecaucano.html">Leer
                                más...</a></button> </div>
                        </div>
                    </div>
                </div>

                <!--Imagen tomada de https://elguardian.cr/la-gimnasta-estadounidense-simone-biles-hace-historia-con-un-impresionante-salto-que-desafia-a-la-fisica/-->


                <div class="p-3 mb-2 bg-light text-dark">
                    <img style="float:left; margin:10px;" alt="" class="img-thumbnail" src="../assets/Simone Biles.jpg" />
                    <div class="new-noticias-textos">
                        <h3 class="new-noticias-textos-titulo">Recordando la hazaña de Simone Biles</h3>
                        <p  class="new-noticias-textos-resumen">Simone Biles une su nombre a la exclusiva
                            lista de las únicas gimnastas con cuatro
                            medallas de oro en unas Olimpiadas.


                        </p>
                    </div>
                    <div class="d-flex container-fluid justify-content-end pb-2 mt-n2"> <button type="button"
                            class="btn btn-outline-info"><a class="new-noticias-textos-enlace"
                                href="https://www.bbc.com/mundo/noticias-america-latina-37101766">Leer
                                más...</a></button> </div>
                </div>
                <div class="col-lg-6 col-xs-12 border">
                    <div class="d-flex justify-content-center align-items-center"></div>
                </div>
            </div>
        </div>

    </section>
    <!--Final de sección de noticias-->
</template>

<script>
export default {
    name : 'NoticiasEstaticas'
}
</script>