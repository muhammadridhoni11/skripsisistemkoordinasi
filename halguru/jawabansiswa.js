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
  
  let kmplanId = [];

let kuisnya = document.getElementById('kuis');


let tmp = document.querySelector('.disini');
tmp.innerHTML = "";
kelasnya = document.getElementById('kelas');
// sekolah = document.getElementById('sekolah');
let kelasfix = '';
// let sekolahfix = '';

let cek11 = 0;
kuisfix = kuisnya.value;


function readlah() {
    datahasil = kuisnya.value;
    console.log(datahasil);
    var task = firebase.database().ref(datahasil);

    tmp.innerHTML = "";
    if (kelasnya.value == "1") {
        kelasfix = "XI A";
    } else if (kelasnya.value == "2") {
        kelasfix = "XI B";
    }

    // if (kelasnya.value == "1") {
    //     kelasfix = "XI A";
    // } else if (kelasnya.value == "2") {
    //     kelasfix = "XI B";
    // }

    let jwbfixx = [];

    let jwb1 = ["a", "d", "e", "b", "a", "d", "a", "d", "a", "a"]; // jawaban untuk kuis 1
    if (kuisfix == "kuis1/") {
        let hhh = `<tr><td class="table-info  tulis" colspan="2">Kunci Jawaban </td>`;
        for (let i = 0; i < jwb1.length; i++) {
            hhh += `<td class="table-info"> ${jwb1[i]}</td>`;
        }
        hhh += `</tr>`;
        tmp.innerHTML += hhh;
        jwbfixx = jwb1;
    }

    let jwb2 = ["e", "b", "a", "a", "b", "e", "d", "c", "b", "a"]; // jawaban untuk kuis 2
    if (kuisfix == "kuis2/") {
        let hhh = `<tr><td class="table-info  tulis" colspan="2">Kunci Jawaban </td>`;
        for (let i = 0; i < jwb2.length; i++) {
            hhh += `<td class="table-info"> ${jwb2[i]}</td>`;
        }
        hhh += `</tr>`;
        tmp.innerHTML += hhh;
        jwbfixx = jwb2;
    }

    let jwb3 = ["c", "a", "c", "d", "a", "e", "d", "a", "b", "b"]; // jawaban untuk kuis 3
    if (kuisfix == "kuis3/") {
        let hhh = `<tr><td class="table-info  tulis" colspan="2">Kunci Jawaban </td>`;
        for (let i = 0; i < jwb3.length; i++) {
            hhh += `<td class="table-info"> ${jwb3[i]}</td>`;
        }
        hhh += `</tr>`;
        tmp.innerHTML += hhh;
        jwbfixx = jwb3;
    }

    let evaluasi = ["c", "a", "a", "a", "b", "d", "c", "a", "d", "b", "c", "a", "b", "d", "a", "e", "d", "a", "e", "e"]; // jawaban evaluasi
    if (kuisfix == "evaluasi/") {
        let hhh = `<tr><td class="table-info  tulis" colspan="2">Kunci Jawaban </td>`;
        for (let i = 0; i < evaluasi.length; i++) {
            hhh += `<td class="table-info"> ${evaluasi[i]}</td>`;
        }
        hhh += `</tr>`;
        tmp.innerHTML += hhh;
        jwbfixx = evaluasi;
    }
    if (kelasfix != '') {
        task.orderByChild("nama").on("child_added", function (data) {
            // task.on("child_added", function (data) {
            var taskvalue = data.val();

            console.log(taskvalue);

            if (kelasfix == taskvalue.kelas) {
                let mm = '';
                mm = `<tr><td >${taskvalue.nama}</td><td >${taskvalue.nilai}</td>`;
                // console.log(taskvalue.jawabsiswa[0]);


                for (let i = 0; i < jwbfixx.length; i++) {
                    if (taskvalue.jawab[i] == jwbfixx[i]) {
                        mm += `<td class="benar">${taskvalue.jawab[i]}</td>`;
                    } else {
                        mm += `<td class="salah">${taskvalue.jawab[i]}</td>`;
                    }
                }
                mm += `</tr>`;
                tmp.innerHTML += mm;
            }

        });

    } else {
        alert('Tentukan filter pencarian');
    }

}

window.onload = function () {
    //kelasnya = document.getElementById('kelas');
    // sekolah = document.getElementById('sekolah');
    kuis = document.getElementById('kuis');
    //kelasnya.value = value = "0";
    // sekolah.value = value = "0";
    // kuis.value = value = "kuis1/";
}

let download = document.querySelector('.download');
download.addEventListener('click', function () {
    var data_type = 'data:application/vnd.ms-excel';
    var table_div = document.getElementById('table_wrapper');
    var table_html = table_div.outerHTML.replace(/ /g, '%20');

    var a = document.createElement('a');
    a.href = data_type + ', ' + table_html;
    a.download = 'exported_table_' + Math.floor((Math.random() * 9999999) + 1000000) + '.xls';
    a.click();
})