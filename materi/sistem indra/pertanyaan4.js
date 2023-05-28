// soal besaran
function cekjawaban1(){
    var a = document.getElementById("1a");
    var b = document.getElementById("1b");
    var c = document.getElementById("1c");
    var d = document.getElementById("1d");
    var e = document.getElementById("1e");

    if(c.checked){
     document.getElementById("pembahasan1").innerHTML = '<div class="pembahasan">Jawabanmu <span style="color:#008000;"><b>BENAR!</b></div>';
    }else {
    document.getElementById("pembahasan1").innerHTML = '<div class="pembahasan">Jawabanmu <span style="color:#DE3027;"><b>SALAH!</b></span> Mohon jawab kembali ya!</div>';
    }
}

document.getElementById('reset1').addEventListener('click', function () {
 ["a", "b", "c", "d"].forEach(function(id) {

  document.getElementById("pembahasan1").innerHTML="";

  document.getElementById(id).checked = false;
});
 return false;

});

function cekjawaban2(){
    var a = document.getElementById("2a");
    var b = document.getElementById("2b");
    var c = document.getElementById("2c");
    var d = document.getElementById("2d");
    var e = document.getElementById("2e");

    if(a.checked){
     document.getElementById("pembahasan2").innerHTML = '<div class="pembahasan">Jawabanmu <span style="color:#008000;"><b>BENAR!</b></div>';
    }else {
    document.getElementById("pembahasan2").innerHTML = '<div class="pembahasan">Jawabanmu <span style="color:#DE3027;"><b>SALAH!</b></span> Mohon jawab kembali ya!</div>';
    }
}

document.getElementById('reset2').addEventListener('click', function () {
 ["a", "b", "c", "d"].forEach(function(id) {

  document.getElementById("pembahasan2").innerHTML="";

  document.getElementById(id).checked = false;
});
 return false;

});