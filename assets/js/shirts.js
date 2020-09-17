$(document).ready(function() {

    showShirts();

});

const shirts = {
    camiseta1: {
        año: 1980,
        auspiciador: 'Costa',
        tipo: 'Retro',
        url: 'assets/img/1980ret.jpg'
    },
    camiseta2: {
        año: 1998,
        marca: 'Avia',
        auspiciador: 'Cristal',
        tipo: 'Local',
        url: 'assets/img/1998l.jpg'
    },
    camiseta3: {
        año: 1998,
        marca: 'Avia',
        auspiciador: 'Cristal',
        tipo: 'Visita',
        url: 'assets/img/1998v.jpg'
    },
    camiseta4: {
        año: 1999,
        auspiciador: 'Cristal',
        tipo: 'Local',
        url: 'assets/img/1999l.jpg'
    },
    camiseta5: {
        año: 2004,
        marca: 'Training',
        auspiciador: 'Promepart',
        tipo: 'Visita',
        url: 'assets/img/2004v.jpg'
    },
    camiseta6: {
        año: 2006,
        marca: 'Training',
        tipo: 'Visita',
        url: 'assets/img/2006v.jpg'
    },
    camiseta7: {
        año: 2007,
        marca: 'Training',
        tipo: 'Entrenamiento - Local',
        url: 'assets/img/2007ent.jpg'
    },
    camiseta8: {
        año: 2007,
        marca: 'Training',
        tipo: 'Entrenamiento - Visita',
        url: 'assets/img/2007entv.jpg'
    },
    camiseta9: {
        año: 2007,
        marca: 'Training',
        tipo: 'Local',
        url: 'assets/img/2007l.jpg'
    },
    camiseta10: {
        año: 2008,
        marca: 'Training',
        auspiciador: 'TPS',
        tipo: 'Arquero',
        url: 'assets/img/2008a.jpg'
    },
    camiseta11: {
        año: 2008,
        marca: 'Training',
        auspiciador: 'TPS',
        tipo: 'Local',
        url: 'assets/img/2008l.jpg'
    },
    camiseta12: {
        año: 2009,
        marca: 'Mitre',
        auspiciador: 'TPS',
        tipo: 'Local',
        url: 'assets/img/2009l.jpg'
    },
    camiseta13: {
        año: 2010,
        marca: 'Mitre',
        auspiciador: 'TPS',
        tipo: 'Local',
        url: 'assets/img/2010l.jpg'
    },
    camiseta14: {
        año: 2011,
        marca: 'Mitre',
        auspiciador: 'TPS',
        tipo: 'Local',
        url: 'assets/img/2011l.jpg'
    },
    camiseta15: {
        año: 2011,
        marca: 'Mitre',
        auspiciador: 'TPS',
        tipo: 'Visita',
        url: 'assets/img/2011v.jpg'
    },
    camiseta16: {
        año: 2012,
        marca: 'Mitre',
        auspiciador: 'TPS',
        tipo: 'Local',
        url: 'assets/img/2012l.jpg'
    },
    camiseta17: {
        año: 2012,
        marca: 'Mitre',
        auspiciador: 'TPS',
        tipo: 'Visita',
        url: 'assets/img/2012v.jpg'
    },
    camiseta18: {
        año: 2013,
        marca: 'Mitre',
        auspiciador: 'TPS',
        tipo: 'Local',
        url: 'assets/img/2013l.jpg'
    },
    camiseta19: {
        año: 2013,
        marca: 'Mitre',
        auspiciador: 'TPS',
        tipo: 'Visita',
        url: 'assets/img/2013v.jpg'
    },
    camiseta20: {
        año: 2014,
        marca: 'Mitre',
        tipo: 'Conmemorativa 2001',
        url: 'assets/img/2014c.jpg'
    },
    camiseta21: {
        año: 2014,
        marca: 'Mitre',
        auspiciador: 'TPS',
        tipo: 'Local',
        url: 'assets/img/2014l.jpg'
    },
    camiseta22: {
        año: 2016,
        marca: 'Macron',
        auspiciador: 'TPS',
        tipo: 'Local',
        url: 'assets/img/2016l.jpg'
    },
    camiseta23: {
        año: 2020,
        marca: 'eSports',
        auspiciador: 'DirecTV',
        tipo: 'Conmemorativa',
        url: 'assets/img/2020e.png'
    },
    camiseta24: {
        tipo: 'Panzers',
        url: 'assets/img/panzer.jpg'
    },
    camiseta25: {
        marca: 'Piero',
        tipo: 'Pirata',
        url: 'assets/img/pirata.jpg'
    }
}

const showShirts = () => {

    console.log(shirts);

    for (let i = 0; i <= 25; i++) {

        $('.box-shirts').append(

            `

            <div class="card col-xs-12 col-md-3 mb-5 p-0" style="width: 18rem; margin: 0 auto;">
                <img src="assets/img/sw.jpg" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${ shirts.camiseta1.año }</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>

            `

        );

    }

}