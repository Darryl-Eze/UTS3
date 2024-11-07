
function gantiSepatu() {
    var img = document.getElementById("fotoo");
    if (img.src.includes("image/Sepatu.jpeg"))
        {img.src ="image/Sepatu2.jpg"}
    else {
        img.src ="image/Sepatu.jpeg"
    }
}

function gantiHoodie() {
    var img = document.getElementById("fotooo");
    if (img.src.includes("image/hoodie.jpg"))
        {img.src ="image/hoodie2.jpg"}
    else {
        img.src ="image/hoodie.jpg"
    }
}

function gantiTopi() {
    var img = document.getElementById("footo");
    if (img.src.includes("image/topi1.jpeg"))
        {img.src ="image/topii.jpeg"}
    else {
        img.src ="image/topi1.jpeg"
    }
}

function gantiKaos() {
    var img = document.getElementById("foooto");
    if (img.src.includes("image/kaos.jpeg"))
        {img.src ="image/kaos2.jpeg"}
    else {
        img.src ="image/kaos.jpeg"
    }
}

function tampilkanPesan() {
    var acc = document.getElementById("acc").value;
    alert("Selamat anda telah terdaftar");
}