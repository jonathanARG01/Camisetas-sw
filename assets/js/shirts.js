$(document).ready(function() {

    //showShirts();

});

shirts = {
    camiseta1: {
        anno: 1980,
        auspiciador: 'Costa',
        tipo: 'Retro',
        url: 'assets/img/1980ret.jpg'
    },
    camiseta2: {
        anno: 1998,
        marca: 'Avia',
        auspiciador: 'Cristal',
        tipo: 'Local',
        url: 'assets/img/1998l.jpg'
    },
    camiseta3: {
        anno: 1998,
        marca: 'Avia',
        auspiciador: 'Cristal',
        tipo: 'Visita',
        url: 'assets/img/1998v.jpg'
    },
    camiseta4: {
        anno: 1999,
        auspiciador: 'Cristal',
        tipo: 'Local',
        url: 'assets/img/1999l.jpg'
    },
    camiseta5: {
        anno: 2004,
        marca: 'Training',
        auspiciador: 'Promepart',
        tipo: 'Visita',
        url: 'assets/img/2004v.jpg'
    },
    camiseta6: {
        anno: 2006,
        marca: 'Training',
        tipo: 'Visita',
        url: 'assets/img/2006v.jpg'
    },
    camiseta7: {
        anno: 2007,
        marca: 'Training',
        tipo: 'Entrenamiento - Local',
        url: 'assets/img/2007ent.jpg'
    },
    camiseta8: {
        anno: 2007,
        marca: 'Training',
        tipo: 'Entrenamiento - Visita',
        url: 'assets/img/2007entv.jpg'
    },
    camiseta9: {
        anno: 2007,
        marca: 'Training',
        tipo: 'Local',
        url: 'assets/img/2007l.jpg'
    },
    camiseta10: {
        anno: 2008,
        marca: 'Training',
        auspiciador: 'TPS',
        tipo: 'Arquero',
        url: 'assets/img/2008a.jpg'
    },
    camiseta11: {
        anno: 2008,
        marca: 'Training',
        auspiciador: 'TPS',
        tipo: 'Local',
        url: 'assets/img/2008l.jpg'
    },
    camiseta12: {
        anno: 2009,
        marca: 'Mitre',
        auspiciador: 'TPS',
        tipo: 'Local',
        url: 'assets/img/2009l.jpg'
    },
    camiseta13: {
        anno: 2010,
        marca: 'Mitre',
        auspiciador: 'TPS',
        tipo: 'Local',
        url: 'assets/img/2010l.jpg'
    },
    camiseta14: {
        anno: 2011,
        marca: 'Mitre',
        auspiciador: 'TPS',
        tipo: 'Local',
        url: 'assets/img/2011l.jpg'
    },
    camiseta15: {
        anno: 2011,
        marca: 'Mitre',
        auspiciador: 'TPS',
        tipo: 'Visita',
        url: 'assets/img/2011v.jpg'
    },
    camiseta16: {
        anno: 2012,
        marca: 'Mitre',
        auspiciador: 'TPS',
        tipo: 'Local',
        url: 'assets/img/2012l.jpg'
    },
    camiseta17: {
        anno: 2012,
        marca: 'Mitre',
        auspiciador: 'TPS',
        tipo: 'Visita',
        url: 'assets/img/2012v.jpg'
    },
    camiseta18: {
        anno: 2013,
        marca: 'Mitre',
        auspiciador: 'TPS',
        tipo: 'Local',
        url: 'assets/img/2013l.jpg'
    },
    camiseta19: {
        anno: 2013,
        marca: 'Mitre',
        auspiciador: 'TPS',
        tipo: 'Visita',
        url: 'assets/img/2013v.jpg'
    },
    camiseta20: {
        anno: 2014,
        marca: 'Mitre',
        tipo: 'Conmemorativa 2001',
        url: 'assets/img/2014c.jpg'
    },
    camiseta21: {
        anno: 2014,
        marca: 'Mitre',
        auspiciador: 'TPS',
        tipo: 'Local',
        url: 'assets/img/2014l.jpg'
    },
    camiseta22: {
        anno: 2016,
        marca: 'Macron',
        auspiciador: 'TPS',
        tipo: 'Local',
        url: 'assets/img/2016l.jpg'
    },
    camiseta23: {
        anno: 2020,
        marca: 'eSports',
        auspiciador: 'DirecTV',
        tipo: 'eSports',
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

    for (let i = 1; i <= 25; i++) {

        $('.box-shirts').append(

            `

            <div class="card col-xs-12 col-md-3 p-0 m-md-3" style="width: 18rem; margin: 0 auto;">
                <img src="${ shirts.camiseta23.url }" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${ shirts.camiseta23.anno }</h5>
                    <span class="badge badge-pill badge-success">${ shirts.camiseta23.tipo }</span>
                    <a href="#" class="btn btn-success d-block mt-4">Go somewhere</a>
                </div>
            </div>

            `

        );

    }

}