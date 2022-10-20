var isim = "ahmet"; // global scope

function yazdir() {
    var isim = "ayşe";
    var yas = 16;
    console.log("function scope: ", isim, yas);
}

// console.log(yas);    // hata verir çünkü yas değeri fonksiyonun içinde

if (true) {
    var cinsiyet = "kadın"
    var isim = "zeynep";
    console.log(isim);
}

console.log(isim);

yazdir();

// fonksiyonlar kendi scope alanlarını oluşturur.
// block içerisinde yeni bir scope alanı oluşturmaz
