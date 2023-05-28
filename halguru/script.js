// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVu9bGsCkk_pcMwir7ipFOZyxhipFSRJU",
    authDomain: "mediapembelajaran-b1356.firebaseapp.com",
    databaseURL: "https://mediapembelajaran-b1356-default-rtdb.firebaseio.com",
    projectId: "mediapembelajaran-b1356",
    storageBucket: "mediapembelajaran-b1356.appspot.com",
    messagingSenderId: "213250780073",
    appId: "1:213250780073:web:4cbe1ed013cf1b4dc0b2b8",
    measurementId: "G-FH4VCRVVC9"
  };

    firebase.initializeApp(firebaseConfig);
  

let idnya = [];


let kuisnya = document.getElementById('kuis');


let tmp = document.querySelector('.lokasi');
tmp.innerHTML = "";
kelasnya = document.getElementById('kelas');
sekolah = document.getElementById('sekolah');
let kelasfix = '';
let sekolahfix = '';

let cek11 = 0;
// datahasil = kuisnya.value;


function cari() {
    datahasil = kuisnya.value;
    console.log(datahasil);
    var task = firebase.database().ref(datahasil);

    tmp.innerHTML = "";
    if (kelasnya.value == "1") {
        kelasfix = "XI A";
    } else if (kelasnya.value == "2") {
        kelasfix = "XI B";
    }

    if (kelasfix != '') {
        task.orderByChild("nama").on("child_added", function (data) {
            // task.on("child_added", function (data) {
            var taskvalue = data.val();
           
            if (kelasfix == taskvalue.kelas) {
                tmp.innerHTML += `<tr>
                            <td class="ukr1">${taskvalue.nama}</td>
                            <td class="ukr3">${taskvalue.kelas}</td>
                            <td class="ukr1">${taskvalue.sekolah}</td>
                            <td class="ukr3">${taskvalue.nilai}</td>
                            <td class="ukr2">${taskvalue.hari}</td>
                            <td class="ukr2">${taskvalue.jam}</td>
                            <td class="hps" onclick ="hapus(${taskvalue.id})"><button type="button" class="btn btn-outline-danger"><i class="fa-sharp fa-solid fa-user-minus"></i> Hapus</button></td>
                        </tr>`;
                idnya.push(taskvalue.id);
            }

            if (cek11 == 0) {
                let ssps = document.querySelector('.center');
                ssps.innerHTML += '';
                ssps.innerHTML += `<button type="button" class="btn btn-danger deleted"><i class="fas fa-user-minus"></i>&nbsp;&nbsp;Hapus Semua Data</button>`;
                cek11 += 1;

                let klikkkk = document.querySelector('.deleted');
                klikkkk.addEventListener('click', function () {
                    hapussemua(idnya);
                })
            }

        });
    } else {
        alert('Tentukan filter pencarian');
    }

}

window.onload = function () {
    kelasnya = document.getElementById('kelas');
    // sekolah = document.getElementById('sekolah');
    kuis = document.getElementById('kuis');
    kelasnya.value = value = "0";
    // sekolah.value = value = "0";
    // kuis.value = value = "kuis1/";
}

function hapus(id) {
    var yakin = confirm("Apakah kamu yakin ingin menghapus data ini?");
    if (yakin) {
        deletetask(id);
    } else {

    }
}

function deletetask(id) {
    var task = firebase.database().ref(datahasil + id);
    task.remove();
    tmp.innerHTML = "";
    cari();
}

function hapussemua(id) {
    var yakin = confirm("Apakah kamu yakin ingin menghapus semua data?");
    if (yakin) {
        deletesemua(id);
    } else {

    }
}

function deletesemua(id) {
    var task = firebase.database().ref(datahasil+id);
    task.remove();

    tmp.innerHTML = "";
    cari();
}
