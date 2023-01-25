

//  Fungsi insert objek 1 tanpa set time out dan tidak menggunakan promise

function codex(nama,asal,hoby) {
    this.nama=nama;
    this.asal=asal;
    this.hoby=hoby;
}

function inserObjek1(){
    let obCodex =[];

    obCodex.push(new codex('ilmi','bekasi','jogging'));
    obCodex.push(new codex('dimas','brebes','futsal'));
    obCodex.push(new codex('dani','bekasi','tidur'));
    obCodex.push(new codex('ricky','padang','fitnes'));
    obCodex.push(new codex('faqih','bekasi','mandi'));
    obCodex.push(new codex('nissa','jakarta','kucing'));
    obCodex.push(new codex('rifki','bandung','nyayi'));

    console.log(obCodex[0]);
}
 inserObjek1();