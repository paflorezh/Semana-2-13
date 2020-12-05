<template>
    <div>
        <footer class="page-footer color-footer text-white pt-4">
            <div class="contenedor">
                <div class="row align-items-center">
                    <div class="col-md-6 mt-md-0 mt-3 text-align-center borde-derecho">
                        <h1>FOOTER TEXT 1</h1>
                        <span>“Si decides hacer solo las cosas que sabes que van a funcionar, dejarás un montón de oportunidades encima de la mesa”. Jeff Bezos</span>
                        <p>Visita nuestro GitHub: <a href="#">GitHub</a> </p>
                    </div>
                    <div class="col-md-6 mt-md-0 mt-3 borde-superior">
                        <h1>CONTACTANOS</h1>
                        <p>Richar Yohan Espinosa De la cruz-Ingeniero Mecatrónico:richard07901@utp.edu.co</p>
                        <p>Pedro Alexander Florez-Arquitecto de software:palos20002005@gmail.com</p>
                        <p>Wilton Romero-Tester:romerocw@hotmail.com</p>
                        <p>Nayibe Casas-Analista de Software:nayibepelaez03@gmail.com</p>
                        <p>Luis Carlo Rivera-Analista de Software:lcriveral@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>


.row{
    width: 100%;
    display: block;
    position: static;
    color: rgb(8, 8, 8);
    text-align: justify;
}

.col-md-6 {
    position: relative;
    margin: 0px;
    float: left;
}

p{
    font-size: 11px;
    color: rgb(8, 8, 8);
    margin-bottom: 0px;
    margin-top: 0px;
}

h1{
    font-size: 25px;
    text-align: center;
    margin-top: 5px;
}

span {
    font-size: 15px;
    margin-top: 10px;
    color: rgb(8, 8, 8);
    line-height: 1.5;
}

/* .borde-derecho {
    height: 100%;
    border-right: 2px solid #eb5a47;
} */

.borde-superior {
    border-top: 2px solid rgba(247, 115, 27, 0.658);
}

.color-footer {
    background-color: rgba(247, 115, 27, 0.658);
}

@media (min-width: 768px) {

.borde-derecho {
    height: 100%;
    border-right: 2px solid rgba(247, 115, 27, 0.658);
}

.borde-superior {
    border-top: 0px;
}

}
</style>