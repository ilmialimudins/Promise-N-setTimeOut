
//Fungsi insert Objek 2 dengan set Timeout dan Tidak menggunakan promise

function codex(nama,asal,hoby) {
    this.nama=nama;
    this.asal=asal;
    this.hoby=hoby;
}

function inserObjek2(){
    setTimeout(()=>{
        let obCodex =[];
        obCodex.push(new codex('Rasya','Padang','Movie'));
        obCodex.push(new codex('Pangestu','Bogor','Motor'));
        obCodex.push(new codex('Arya','Karawang','Travel'));
        obCodex.push(new codex('Farid','Pekanbaru','Gamer'));
        obCodex.push(new codex('Rendra','Tanggerang','Investasi'));
        obCodex.push(new codex('Sofi','Cianjur','Masak'));
        obCodex.push(new codex('Zul','Joga','Desain'));

        console.log(obCodex[0]);
    
    }, 5000 // Delay 5 detik
    )
}
inserObjek2();