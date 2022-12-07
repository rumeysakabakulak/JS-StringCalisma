let url = "https://www.sadikturan.com/";
let kursAdi = "Komple Web Geliştirme Kursu";
 
// 1- Url Kaç Karakterlidir?

let karakterSayisi = url.length;
console.log(karakterSayisi);

// 2- kursAdi kaç kelimedem oluşmaktadır?

let kelimeSayisi = kursAdi.split(" ");
console.log(kelimeSayisi.length);

// 3- url https ile mi başlıyor?

let urlBaslangic = url.startsWith("https");

if(urlBaslangic) {
    console.log(true)
}else{
    console.log(false)
}

// 4- kursAdi içerisinde 'Eğitimi' kelimesi var mı?

if (kursAdi.indexOf("Eğitimi") > -1) {
    console.log(true)
}else{
    console.log(false)
}

// 5- url ve kursAdi değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturunuz.
//  https://www.sadikturan.com/komple-web-gelistirme-kursu


kursAdi = kursAdi.toLowerCase();
kursAdi = kursAdi.replaceAll(" ","-");
kursAdi = kursAdi.replaceAll("ş","s");
kursAdi = kursAdi.replaceAll("ı","i");

let fullUrl = `${url}${kursAdi}`;

console.log(fullUrl);