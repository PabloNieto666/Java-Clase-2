const os = require('os');


//total memory//

function MemoriaTotal(MemoriaTotal) {
    let Memoria = os.totalmem();

    let kilobiteT = Memoria / (1024 * 1024);

    let megaredondeado = Math.round(kilobiteT);

    let tablamegabytes1 = {
        memoria: megaredondeado,
        Uni_medida: 'Mb'

    };

    return tablamegabytes1;
}

console.table(MemoriaTotal(MemoriaTotal));

function MemoriaTotalGb(MemoriaTotal) {
    let Memoria = os.totalmem();
    let kilobiteT = Memoria / (1024 * 1024);
    var gigabyteT = kilobiteT / 1024;
    var gigabyteredondeadoT = Math.round(gigabyteT);

    var tablagigabytesT = {
        memoria: gigabyteredondeadoT,
        Uni_medida: 'Gb'

    }

    return tablagigabytesT;
}

console.table(MemoriaTotalGb(MemoriaTotalGb));


//free memory//

function freememory(freememory) {

    var freememory = os.freemem();

    var kilobite = freememory / (1024 * 1024);

    var megabyteredondeado = Math.round(kilobite)

    var tablamegabytes = {

        memoria: megabyteredondeado,
        Uni_medida: 'Mb'
    }
    return tablamegabytes;
}

console.table(freememory(freememory));

function freememoryGb(freememoryGb) {
    var freememory = os.freemem();

    var kilobite = freememory / (1024 * 1024);

    var gigabyte = kilobite / 1024;
    var gigabyteredondeado = Math.round(gigabyte);

    var tablagigabytes = {
        memoria: gigabyteredondeado,
        Uni_medida: 'Gb'

    }

    return tablagigabytes;

}


console.table(freememoryGb(freememoryGb));


module.exports =MemoriaTotal;
