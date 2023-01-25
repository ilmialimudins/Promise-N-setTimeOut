// Untuk membuat objek array dengan mengisi objek pertama dulu dan objek kedua 
// setelah objek pertama selesai, Anda dapat menggunakan beberapa cara

// objek
function codex(nama,asal,hoby) {
    this.nama=nama;
    this.asal=asal;
    this.hoby=hoby;
}

//Array Objek1 
// Tanpa Set
function inserObjek1(){
    return new Promise((resolve, reject)=>{
        let obCodex = [];   
        obCodex.push(new codex('ilmi','bekasi','jogging'));
        obCodex.push(new codex('dimas','brebes','futsal'));
        obCodex.push(new codex('dani','bekasi','tidur'));
        obCodex.push(new codex('ricky','padang','fitnes'));
        obCodex.push(new codex('faqih','bekasi','mandi'));
        obCodex.push(new codex('nissa','jakarta','kucing'));
        obCodex.push(new codex('rifki','bekasi','nyayi'));

        resolve(obCodex);
        
    });
} inserObjek1().then((obCodex)=>{
    console.log(obCodex[0]);
});

//Array Objek2
//Set Timout 
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

// function Objek 1 dan 2 Asynchronus
const insertObjek = async ()=>{
    //insert objek 1
    const obCodex1 = await inserObjek1();
    // console.log(obCodex1);
    const obCodex2 = await inserObjek2();
    // console.log(obCodex2);
    return [obCodex1,obCodex2];
};
insertObjek().then((res)=>{console.log(res)}).catch((error)=>{console.error(error)});

