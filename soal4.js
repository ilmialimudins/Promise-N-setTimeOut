
//  Fungsi insert Objek 2 dengan set Timeout  dan menggunakan promise

function codex(nama,asal,hoby) {
    this.nama=nama;
    this.asal=asal;
    this.hoby=hoby;
}


function inserObjek2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let obCodex=[];

            obCodex.push(new codex('Rasya','Padang','Movie'));
            obCodex.push(new codex('Pangestu','Bogor','Motor'));
            obCodex.push(new codex('Farid','Pekanbaru','Gamer'));
            obCodex.push(new codex('Rendra','Tanggerang','Investasi'));
            obCodex.push(new codex('Sofi','Cianjur','Masak'));
            obCodex.push(new codex('Zul','Joga','Desain'));
            
            resolve(obCodex);
        }, 5000 //Delay 5 Detik
        );
    });
}
inserObjek2().then((obCodex)=>{
    console.log(obCodex[1])
})