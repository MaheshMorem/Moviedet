var _list = [];
const mainPosterLink = 'https://image.tmdb.org/t/p/w500';
var isoLangs = {
    "ab": {
        "name": "Abkhaz",
    },
        "aa": {
        "name": "Afar",
    },
        "af": {
        "name": "Afrikaans",
    },
        "ak": {
        "name": "Akan",
    },
        "sq": {
        "name": "Albanian",
    },
        "am": {
        "name": "Amharic",
    },
        "ar": {
        "name": "Arabic",
    },
        "an": {
        "name": "Aragonese",
    },
        "hy": {
        "name": "Armenian",
    },
        "as": {
        "name": "Assamese",
    },
        "av": {
        "name": "Avaric",
    },
        "ae": {
        "name": "Avestan",
    },
        "ay": {
        "name": "Aymara",
    },
        "az": {
        "name": "Azerbaijani",
    },
        "bm": {
        "name": "Bambara",
    },
        "ba": {
        "name": "Bashkir",
    },
        "eu": {
        "name": "Basque",
    },
        "be": {
        "name": "Belarusian",
    },
        "bn": {
        "name": "Bengali",
    },
        "bh": {
        "name": "Bihari",
    },
        "bi": {
        "name": "Bislama",
    },
        "bs": {
        "name": "Bosnian",
    },
        "br": {
        "name": "Breton",
    },
        "bg": {
        "name": "Bulgarian",
    },
        "my": {
        "name": "Burmese",
    },
        "ca": {
        "name": "Catalan; Valencian",
    },
        "ch": {
        "name": "Chamorro",
    },
        "ce": {
        "name": "Chechen",
    },
        "ny": {
        "name": "Chichewa; Chewa; Nyanja",
    },
        "zh": {
        "name": "Chinese",
    },
        "cv": {
        "name": "Chuvash",
    },
        "kw": {
        "name": "Cornish",
    },
        "co": {
        "name": "Corsican",
    },
        "cr": {
        "name": "Cree",
    },
        "hr": {
        "name": "Croatian",
    },
        "cs": {
        "name": "Czech",
    },
        "da": {
        "name": "Danish",
    },
        "dv": {
        "name": "Divehi; Dhivehi; Maldivian;",
    },
        "nl": {
        "name": "Dutch",
    },
        "en": {
        "name": "English",
    },
        "eo": {
        "name": "Esperanto",
    },
        "et": {
        "name": "Estonian",
    },
        "ee": {
        "name": "Ewe",
    },
        "fo": {
        "name": "Faroese",
    },
        "fj": {
        "name": "Fijian",
    },
        "fi": {
        "name": "Finnish",
    },
        "fr": {
        "name": "French",
    },
        "ff": {
        "name": "Fula; Fulah; Pulaar; Pular",
    },
        "gl": {
        "name": "Galician",
    },
        "ka": {
        "name": "Georgian",
    },
        "de": {
        "name": "German",
    },
        "el": {
        "name": "Greek, Modern",
    },
        "gn": {
        "name": "Guaraní",
    },
        "gu": {
        "name": "Gujarati",
    },
        "ht": {
        "name": "Haitian; Haitian Creole",
    },
        "ha": {
        "name": "Hausa",
    },
        "he": {
        "name": "Hebrew (modern)",
    },
        "hz": {
        "name": "Herero",
    },
        "hi": {
        "name": "Hindi",
    },
        "ho": {
        "name": "Hiri Motu",
    },
        "hu": {
        "name": "Hungarian",
    },
        "ia": {
        "name": "Interlingua",
    },
        "id": {
        "name": "Indonesian",
    },
        "ie": {
        "name": "Interlingue",
    },
        "ga": {
        "name": "Irish",
    },
        "ig": {
        "name": "Igbo",
    },
        "ik": {
        "name": "Inupiaq",
    },
        "io": {
        "name": "Ido",
    },
        "is": {
        "name": "Icelandic",
    },
        "it": {
        "name": "Italian",
    },
        "iu": {
        "name": "Inuktitut",
    },
        "ja": {
        "name": "Japanese",
    },
        "jv": {
        "name": "Javanese",
    },
        "kl": {
        "name": "Kalaallisut, Greenlandic",
    },
        "kn": {
        "name": "Kannada",
    },
        "kr": {
        "name": "Kanuri",
    },
        "ks": {
        "name": "Kashmiri",
    },
        "kk": {
        "name": "Kazakh",
    },
        "km": {
        "name": "Khmer",
    },
        "ki": {
        "name": "Kikuyu, Gikuyu",
    },
        "rw": {
        "name": "Kinyarwanda",
    },
        "ky": {
        "name": "Kirghiz, Kyrgyz",
    },
        "kv": {
        "name": "Komi",
    },
        "kg": {
        "name": "Kongo",
    },
        "ko": {
        "name": "Korean",
    },
        "ku": {
        "name": "Kurdish",
    },
        "kj": {
        "name": "Kwanyama, Kuanyama",
    },
        "la": {
        "name": "Latin",
    },
        "lb": {
        "name": "Luxembourgish, Letzeburgesch",
    },
        "lg": {
        "name": "Luganda",
    },
        "li": {
        "name": "Limburgish, Limburgan, Limburger",
    },
        "ln": {
        "name": "Lingala",
    },
        "lo": {
        "name": "Lao",
    },
        "lt": {
        "name": "Lithuanian",
    },
        "lu": {
        "name": "Luba-Katanga",
    },
        "lv": {
        "name": "Latvian",
    },
        "gv": {
        "name": "Manx",
    },
        "mk": {
        "name": "Macedonian",
    },
        "mg": {
        "name": "Malagasy",
    },
        "ms": {
        "name": "Malay",
    },
        "ml": {
        "name": "Malayalam",
    },
        "mt": {
        "name": "Maltese",
    },
        "mi": {
        "name": "Māori",
    },
        "mr": {
        "name": "Marathi (Marāṭhī)",
    },
        "mh": {
        "name": "Marshallese",
    },
        "mn": {
        "name": "Mongolian",
    },
        "na": {
        "name": "Nauru",
    },
        "nv": {
        "name": "Navajo, Navaho",
    },
        "nb": {
        "name": "Norwegian Bokmål",
    },
        "nd": {
        "name": "North Ndebele",
    },
        "ne": {
        "name": "Nepali",
    },
        "ng": {
        "name": "Ndonga",
    },
        "nn": {
        "name": "Norwegian Nynorsk",
    },
        "no": {
        "name": "Norwegian",
    },
        "ii": {
        "name": "Nuosu",
    },
        "nr": {
        "name": "South Ndebele",
    },
        "oc": {
        "name": "Occitan",
    },
        "oj": {
        "name": "Ojibwe, Ojibwa",
    },
        "cu": {
        "name": "Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic",
    },
        "om": {
        "name": "Oromo",
    },
        "or": {
        "name": "Oriya",
    },
        "os": {
        "name": "Ossetian, Ossetic",
    },
        "pa": {
        "name": "Panjabi, Punjabi",
    },
        "pi": {
        "name": "Pāli",
    },
        "fa": {
        "name": "Persian",
    },
        "pl": {
        "name": "Polish",
    },
        "ps": {
        "name": "Pashto, Pushto",
    },
        "pt": {
        "name": "Portuguese",
    },
        "qu": {
        "name": "Quechua",
    },
        "rm": {
        "name": "Romansh",
    },
        "rn": {
        "name": "Kirundi",
    },
        "ro": {
        "name": "Romanian, Moldavian, Moldovan",
    },
        "ru": {
        "name": "Russian",
    },
        "sa": {
        "name": "Sanskrit (Saṁskṛta)",
    },
        "sc": {
        "name": "Sardinian",
    },
        "sd": {
        "name": "Sindhi",
    },
        "se": {
        "name": "Northern Sami",
    },
        "sm": {
        "name": "Samoan",
    },
        "sg": {
        "name": "Sango",
    },
        "sr": {
        "name": "Serbian",
    },
        "gd": {
        "name": "Scottish Gaelic; Gaelic",
    },
        "sn": {
        "name": "Shona",
    },
        "si": {
        "name": "Sinhala, Sinhalese",
    },
        "sk": {
        "name": "Slovak",
    },
        "sl": {
        "name": "Slovene",
    },
        "so": {
        "name": "Somali",
    },
        "st": {
        "name": "Southern Sotho",
    },
        "es": {
        "name": "Spanish; Castilian",
    },
        "su": {
        "name": "Sundanese",
    },
        "sw": {
        "name": "Swahili",
    },
        "ss": {
        "name": "Swati",
    },
        "sv": {
        "name": "Swedish",
    },
        "ta": {
        "name": "Tamil",
    },
        "te": {
        "name": "Telugu",
    },
        "tg": {
        "name": "Tajik",
    },
        "th": {
        "name": "Thai",
    },
        "ti": {
        "name": "Tigrinya",
    },
        "bo": {
        "name": "Tibetan Standard, Tibetan, Central",
    },
        "tk": {
        "name": "Turkmen",
    },
        "tl": {
        "name": "Tagalog",
    },
        "tn": {
        "name": "Tswana",
    },
        "to": {
        "name": "Tonga (Tonga Islands)",
    },
        "tr": {
        "name": "Turkish",
    },
        "ts": {
        "name": "Tsonga",
    },
        "tt": {
        "name": "Tatar",
    },
        "tw": {
        "name": "Twi",
    },
        "ty": {
        "name": "Tahitian",
    },
        "ug": {
        "name": "Uighur, Uyghur",
    },
        "uk": {
        "name": "Ukrainian",
    },
        "ur": {
        "name": "Urdu",
    },
        "uz": {
        "name": "Uzbek",
    },
        "ve": {
        "name": "Venda",
    },
        "vi": {
        "name": "Vietnamese",
    },
        "vo": {
        "name": "Volapük",
    },
        "wa": {
        "name": "Walloon",
    },
        "cy": {
        "name": "Welsh",
    },
        "wo": {
        "name": "Wolof",
    },
        "fy": {
        "name": "Western Frisian",
    },
        "xh": {
        "name": "Xhosa",
    },
        "yi": {
        "name": "Yiddish",
    },
        "yo": {
        "name": "Yoruba",
    },
        "za": {
        "name": "Zhuang, Chuang",
    }
};
function getMovies()
{
_list = [];
var resultsHTML = "";
var e = document.querySelector('.movies');
var child = e.lastElementChild;
while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
}
//Preparation Of API URL
let search_key = document.getElementById("search_box").value;
const apiUrl = 'https://api.themoviedb.org/3/search/movie?api_key=5e3d4a233936523d2e241bc99caa7b6c&query=';
const finalUrl = apiUrl+search_key;
//Preparation Of API URL End
//fetching the data
    fetch(finalUrl).then(response => response.json()).then(data => {
        var searchRes = data.results;
        searchRes.map((item)=>{
            console.log(item)
        })
//fetching the data End

//Display in WebPage
for(let index = 0; index < searchRes.length; index++) {
    let resLink = searchRes[index].poster_path;
    if(resLink == null)
    {
        let poste = mainPosterLink + resLink;
        const title = searchRes[index].title;
        _list.push(searchRes[index]);
        resultsHTML += "<div class='movie'><button id='myBtn' onclick='clickingOnMovie("+index+")'><div class='content'>" +
        "<img src='no-img-avail1.jpeg'"+
        "></img><h2 style='line-height: 28px;text-align: center;font-size: 20px;font-weight: 500;margin-top: 9px;'>"+title+"</h2></div></button></div>";
    }
    else
    {
        let poste = mainPosterLink + resLink;
        const title = searchRes[index].title;
        _list.push(searchRes[index]);
        resultsHTML += "<div class='movie'><button id='myBtn' onclick='clickingOnMovie("+index+")'><div class='content'><img src="+poste+
        "></img><h2 style='line-height: 28px;text-align: center;font-size: 20px;font-weight: 500;margin-top: 9px;'>"+title+"</h2></div></button></div>";
    }
 }
 var loadingOnScreen = document.getElementsByClassName("movies")[0];
 loadingOnScreen.innerHTML = resultsHTML;
 //Display in WebPage End
 document.getElementById("search_box").value = "";
})
//fetch end
}
//getMovies() End
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var span = document.getElementsByClassName("close")[0];
// Get the <span> element that closes the modal

// When the user clicks the button, open the modal 
function clickingOnMovie(index) {
//reading the parameters from _list
  let getYear = _list[index].release_date;
  let year = getYear.slice(0,4);
  let takingTitlFrmList = _list[index].title; 
  let takinOvFrmList = _list[index].overview;
  let ratin = _list[index].vote_average;
  let lan = _list[index].original_language;
  //reading the parameters from _list End
  document.getElementById("popUpContent").innerHTML = takingTitlFrmList;
  document.getElementById("ov").innerHTML = takinOvFrmList;
  document.getElementById("rating").innerHTML = ratin;
  document.getElementById("year").innerHTML = year;
    var arr = [];
    for (i in isoLangs) {
        arr.push([i, isoLangs[i]]);
    }
    var language;
    for (var i = 0; i < arr.length; i++) {
     if (lan == arr[i][0]) {
        language = arr[i][1]['name'];
      }
    }
    document.getElementById("language").innerHTML = language;
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}