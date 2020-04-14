var x;


// "Kirjoita ohjelma, joka tarkastaa, onko annetun merkkijonon ensimmäinen kirjain iso"
function one(x){
    return x.charAt(0) === x.charAt(0).toUpperCase()
}
console.log("\n\nTehtävä 1")
x = "Hello"
console.log(one(x)) // Printtaa "true" consoliin.

// "Kirjoita ohjelma, joka ”siistii” annetun merkkijonon, eli poistaa siitä etu- ja loppu välilyönnit"
function two(x){
     x = x.split("");
     delete x[0]
     delete x[-1]
    return x.join("")
}
console.log("\n\nTehtävä 2")
x = " hello "
console.log(two(x)) // Printtaa "hello" consoliin

// "Kirjoita ohjelma, joka laskee annetun merkkijonon kaikki vokaalit"
function three(x){
    var vokaalit = "aeiouyäöAEIUYÄÖ";
    var count = 0;
    x = x.split("")
    for(var i = 0; i < x.length; i++){
        if(vokaalit.includes(x[i])){
            count += 1
        }
    }
    return count

}
console.log("\n\nTehtävä 3")
x = "hello"
console.log(three(x)) // Printtaa "2" consoliin

// "Kirjoita ohjelma, joka tarkastaa, onko annettu merkkijono alfanumeerinen (vain kirjaimia ja numeroita)"
function four(x){
    var chars = "abcdefghijklmnopqrstuvwxyzåäöABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ0123456789"
    x = x.split("");
    for(var i = 0; i<x.length; i++){
        if(chars.includes(x[i])){

        }else{
            return false
        }
    }
    return true
}
console.log("\n\nTehtävä 4")

x = "@]1283ajd8238"
console.log(four(x)) // Printtaa "false" consoliin

// "Kirjoita ohjelma, joka tarkastaa, onko annettu merkkijono postinumero"
// XMLHttpRequest ladataan: "npm i xmlhttprequest" komennolla
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function five(x){
    var url = `https://api.bring.com/pickuppoint/api/postalCode/FI/getCityAndType/${x}.json`
    const request = new XMLHttpRequest();
    request.responseType = "json"
    request.open("GET", url);
    request.send();
    setTimeout(function(){
        var ret = JSON.parse(request.responseText);
        if(ret.postalCode){
            console.log("\n\nTehtävä 5")
            console.log(true)
        }else{
            console.log("\n\nTehtävä 5")
            console.log(false)
        }
    }, 600);


}
x = "04220"
five(x) // Printtaa "true" consoliin

/*
Apu functio 6 tehtävälle.
Tämän function tarkoitus on tarkistaa onko viimeinen kirjain/numero oikea, laskemalla syntymäpäivän ja 3 viimeistä numeroa yhteen ja jakammalla ne 31:llä, ja lisäämällä syntymäpäivän.
Tämä logiikka löytyy https://dvv.fi/henkilotunnus
Argumentit:
    @param x: Syntymäpäivä | Eg. 040205
    @param y: Viimeiset kolme numeroa | Eg. 492
*/
function six_a(x, y){
    x = parseInt(x);
    y = parseInt(y);
    var lastNumber = x+y%31-x;
    var poss = {0:"0", 1:"1", 2:"2", 3:"3", 4 :"4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10:"A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F", 16: "H",
                17: "J", 18: "K", 19:"L", 20: "M", 21: "N", 22:"P", 23:"R", 24: "S", 25:"T", 26:"U", 27:"V", 28:"W", 29:"X", 30: "Y"}
    return poss[lastNumber]
}

// "Kirjoita ohjelma, joka tarkastaa, onko annettu merkkijono sosiaaliturvatunnus(000000x000y), siten, että x:n paikalla on joko – tai A-kirjain ja y on joko numero tai kirjain"
// Viimenen merkki syntax syntymäpäivä+viimesetNumerot%31-syntymäpäivä
function six(x){
    x = x.split("")
    var syntPv = x.slice(0,6) // Ekat 6 numeroa
    var keskMerk = x[6]
    var perNum = x.slice(7,10)
    var viim = x[x.length-1]
    if(!isNaN(syntPv)){ // Jos ekat 6 merkkiä ei ole numeroita
        return false
    }else if( !(keskMerk !== "A" || keskMerk !== "-") ){ // Jos keski merkki ei ole - tai A
        return false
    }else if(!isNaN(perNum)){ // Jos viimeset 3 numero ei ole numeroita
        return false
    }else if(viim != six_a(syntPv.join(""), perNum.join(""))){ // Jos viimeinen merkki ei ole oikea syntymäpäivään ja viimeseen 3n numeroon verrattuna.
        return false
    }else{
        return true // Jos kaikki muut ovat epätosi, palautetaan että se on oikea sosiaaliturvatunnus
    }

}
console.log("\n\nTehtävä 6")
x = "050204A293E"
console.log(six(x)) // Printtaa "true" consoliin


// "Kirjoita ohjelma, joka tarkastaa, onko annetussa merkkijonossa html-tägejä."
function seven(x){
    return /<\/?[a-z][\s\S]*>/.test(x)
}

console.log("\n\nTehtävä 7")
x = "<body>Hello World</body>"
console.log(seven(x)) // Printtaa "true" consoliin
