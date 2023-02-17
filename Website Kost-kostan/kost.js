function login(){
    var ambilDat = document.getElementById('exampleInputEmail1');
    if(document.getElementById('exampleInputEmail1').value == "" || document.getElementById('exampleInputPassword1').value == ""){
        alert("Harap isi Email atau Password!");
        document.getElementById('exampleInputEmail1').value = "";
        document.getElementById('exampleInputPassword1').value = "";
    }
}