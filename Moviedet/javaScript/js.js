var _list = [];
var _favArr = [];
var resHTMLForFav = "";
var _favList = {
    "1": {
        "poster": "https://image.tmdb.org/t/p/w500/mFnfTVADj8yOxwzprYOmTPselk8.jpg",
        "title": "Capernaum",
        "language": "Arabic",
        "rating": "8.2",
        "ov":"Zain, a 12-year-old boy scrambling to survive on the streets of Beirut, sues his parents for having brought him into such an unjust world, where being a refugee with no documents means that your rights can easily be denied.",
        "year": "2018",
    },
    "2": {
        "poster": "https://image.tmdb.org/t/p/w500/8bgyfPih4bORxtnFCwinqVElkYg.jpg",
        "title": "C/o Kancharapalem",
        "language": "Telugu",
        "rating": "7.6",
        "ov":"From a schoolboy’s crush to a middle-aged bachelor’s office romance, four love stories spanning age, religion and status unfold in a small Indian town.",
        "year": "2018",
    },
    "3": {
        "poster": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        "title": "The Shawshank Redemption",
        "language": "English",
        "rating": "8.7",
        "ov":"Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
        "year": "1994",
    },
    "4": {
        "poster": "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        "title": "Parasite",
        "language": "Korean ",
        "rating": "8.5",
        "ov":"All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
        "year": "2019",
    },
    "5": {
        "poster": "https://image.tmdb.org/t/p/w500/zb9QBUn5AZzoKCS2jsnhp6ySSGp.jpg",
        "title": "Jai Bhim",
        "language": "Tamil",
        "rating": "7.5",
        "ov":"A pregnant woman from a primitive tribal community, searches desperately for her husband, who is missing from police custody. So as to find her husband and seek justice for them, as their voice, a High Court advocate rises in support. Will their battle for justice succeed?",
        "year": "2021",
    },
    "6": {
        "poster": "https://image.tmdb.org/t/p/w500/a9jgcRiKQIoNZxeGZgLGSZVCCGR.jpg",
        "title": "The Great Indian Kitchen",
        "language": "Malayalam",
        "rating": "7.6",
        "ov":"After marriage, a woman struggles to be the submissive wife that her husband and his family expect her to be.",
        "year": "2021",
    },
    "7": {
        "poster": "https://image.tmdb.org/t/p/w500/k7eYdWvhYQyRQoU2TB2A2Xu2TfD.jpg",
        "title": "City Of God",
        "language": "Portuguese",
        "rating": "8.4",
        "ov":"Buscapé was raised in a very violent environment. Despite the feeling that all odds were against him, he finds out that life can be seen with other eyes...",
        "year": "2002",
    },
    "8": {
        "poster": "https://image.tmdb.org/t/p/w500/vV4vlD4ool5JSsS1rB82qjCF6z8.jpg",
        "title": "Amores Perros",
        "language": "Spanish; Castilian",
        "rating": "7.6",
        "ov":"A fatalistic car crash in Mexico City sets off a chain of events in the lives of three persons: a young man aching to run off with his sister-in-law, a supermodel, and a homeless man. Their lives are catapulted into unforeseen circumstances instigated by the seemingly inconsequential destiny of a dog.",
        "year": "2000",
    },
    "9": {
        "poster": "https://image.tmdb.org/t/p/w500/83AFk8uxCpzAcCnVEnEw3sIKiiE.jpg",
        "title": "Soorari Pottru",
        "language": "Tamil",
        "rating": "7.9",
        "ov":"Nedumaaran Rajangam 'Maara' sets out to make the common man fly and in the process takes on the world's most capital intensive industry and several enemies who stand in his way.",
        "year": "2020",
    },
    "10": {
        "poster": "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
        "title": "Forrest Gump",
        "language": "English",
        "rating": "8.5",
        "ov":"A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
        "year": "1994",
    },
    "11": {
        "poster": "https://image.tmdb.org/t/p/w500/jWqh1CJWAEcxckMRrf6ARhIEh0R.jpg",
        "title": "Childern of Heaven",
        "language": "Persian",
        "rating": "7.9",
        "ov":"Zohre's shoes are gone; her older brother Ali lost them. They are poor, there are no shoes for Zohre until they come up with an idea: they will share one pair of shoes, Ali's. School awaits...",
        "year": "1997",
    },
    "12": {
        "poster": "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
        "title": "Schindler's List",
        "language": "English",
        "rating": "8.6",
        "ov":"The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
        "year": "1993",
    },
    "13": {
        "poster": "https://image.tmdb.org/t/p/w500/w4iCIZ1kWSOCt0yELjfUMNAToUF.jpg",
        "title": "Wadjda",
        "language": "Arabic",
        "rating": "7.3",
        "ov":"Wadjda is a 10-year-old girl living in a suburb of Riyadh, the capital of Saudi Arabia. Although she lives in a conservative world, Wadjda is fun loving, entrepreneurial and always pushing the boundaries of what she can get away with. After a fight with her friend Abdullah, a neighborhood boy she shouldn't be playing with, Wadjda sees a beautiful green bicycle for sale. She wants the bicycle desperately so that she can beat Abdullah in a race. But Wadjda's mother won't allow it, fearing repercussions from a society that sees bicycles as dangerous to a girl's virtue. So Wadjda decides to try and raise the money herself...",
        "year": "2012",
    },
    "14": {
        "poster": "https://image.tmdb.org/t/p/w500/2BvtvDUyxiMJ4dmKfiQf4qdOHQN.jpg",
        "title": "Bodyhod",
        "language": "English",
        "rating": "7.5",
        "ov":"The film tells a story of a divorced couple trying to raise their young son. The story follows the boy for twelve years, from first grade at age 6 through 12th grade at age 17-18, and examines his relationship with his parents as he grows.",
        "year": "2014",
    },
    "15": {
        "poster": "https://image.tmdb.org/t/p/w500/hROb7nFIM3cnk28J0jk4rFBXGQ9.jpg",
        "title": "C'mon C'mon",
        "language": "English",
        "rating": "7.7",
        "ov":"Johnny and his young nephew forge a tenuous but transformational relationship when they embark on a cross-country trip to see life away from Los Angeles.",
        "year": "2021",
    },
    "16": {
        "poster": "https://image.tmdb.org/t/p/w500/5jWfzHXvqLllbsVL7bvV1UVTq8s.jpg",
        "title": "Garuda Gamana Vrishabha Vahana",
        "language": "Kannada",
        "rating": "8",
        "ov":"Shiva and Hari, two friends who are polar opposites in demeanour, are the terror in Mangaladevi. What happens when ego, ambition and jealousy creeps in between their strong friendship?",
        "year": "2021",
    },
    "17": {
        "poster": "https://image.tmdb.org/t/p/w500/825ohvC4wZ3gCuncCaqkWeQnK8h.jpg",
        "title": "Remeber the Titans",
        "language": "English",
        "rating": "7.6",
        "ov":"After leading his football team to 15 winning seasons, coach Bill Yoast is demoted and replaced by Herman Boone – tough, opinionated and as different from the beloved Yoast as he could be. The two men learn to overcome their differences and turn a group of hostile young men into champions.",
        "year": "2000",
    },
    "18": {
        "poster": "https://image.tmdb.org/t/p/w500/syaECBy6irxSgeF0m5ltGPNTWXL.jpg",
        "title": "The Royal Tenenbaums",
        "language": "English",
        "rating": "7.5",
        "ov":"Royal Tenenbaum and his wife Etheline had three children and then they separated. All three children are extraordinary --- all geniuses. Virtually all memory of the brilliance of the young Tenenbaums was subsequently erased by two decades of betrayal, failure, and disaster. Most of this was generally considered to be their father's fault. 'The Royal Tenenbaums' is the story of the family's sudden, unexpected reunion one recent winter.",
        "year": "2001",
    },
    "19": {
        "poster": "https://image.tmdb.org/t/p/w500/6zDYFigohwncqFL00MKbFV01dWb.jpg",
        "title": "Flipped",
        "language": "English",
        "rating": "7.9",
        "ov":"When Juli meets Bryce in the second grade, she knows it's true love. After spending six years trying to convince Bryce the same, she's ready to give up - until he starts to reconsider.",
        "year": "2010",
    },
    "20": {
        "poster": "https://image.tmdb.org/t/p/w500/gDxVKCIQmGuC9MpfvTA0GNhYtyr.jpg",
        "title": "Awe",
        "language": "Telugu",
        "rating": "7",
        "ov":"‘Awe’ charts the journey of a motley of characters that have nothing to do with each other but are yet connected by a single, fragile string. Who are these people and what about their lives connect them to each other is what the film is all about.",
        "year": "2018",
    },
};
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
window.onload = function() {
    var m,pm,pd;
    var curDate,curMonth;
    var dateObj = new Date();
    var month = dateObj.getMonth()+1;
    var date = dateObj.getDate();
    var year = dateObj.getFullYear();
    
    var resultsHTML = "";
    var res = "";
    const mainPosterLink = 'https://image.tmdb.org/t/p/w500';

    var  months = [" ","January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthName=months[month];

    var myVariable = `${date}/${monthName}/${year}`;
    var current = new Date(myVariable);
    current.setMonth(current.getMonth()-2);
    var mon = current.getMonth();
    const prevMonth = current.getMonth();
    const prevDate = current.getDate();
    const prevYear = current.getFullYear();
    const virMonth = new Date().getMonth();

    if(date == 31 || date == 30)
    {
        if(virMonth == 1 || virMonth == 3 || virMonth == 5 || virMonth == 8 || virMonth == 10 )
        {
            prevDate = 15;
        }
        if((date == 31 || date == 30) && mon == 1)
        {
            prevDate = 15;
        }
    } 
//var current = new Date("13/january/2022");
//current.setMonth(current.getMonth()-2);
//const previousMonth = current.toLocaleString('default', { month: 'long' });const previousy = current.getFullYear();
//console.log(previousMonth);console.log(previousy)

    if(prevMonth >= 1 && prevMonth <=9)
    {
        pm = '0'+prevMonth; 
    }
    else
    { 
        pm = prevMonth;
    }
    if(prevDate >= 1 && prevDate <=9)
    {
        pd = '0'+prevDate; 
    }
    else
    { 
        pd = prevMonth;
    }
    if(month >= 1 && month <=9)
    {
        m = '0'+month; 
    }
    else
    { 
        m=month;
    }
    if(date >= 1 && date <= 9)
    {
        curDate = '0'+date;
    }else{ curDate = date}

    const apiKey = 'api_key=5e3d4a233936523d2e241bc99caa7b6c';
    const mainUrl = 'https://api.themoviedb.org/3';
    const recent = mainUrl + `/discover/movie?primary_release_date.gte=${prevYear}-${pm}-${pd}&primary_release_date.lte=${year}-${m}-${curDate}&`+apiKey;
    fetch(recent).then(respons => respons.json()).then(data => {
         var popularList = data.results;
         popularList = popularList.map(item => item).reverse();
         popularList.map((item)=>{
            console.log(item)
        })
     for(let index = 0; index < popularList.length; index++) {
        let resLink = popularList[index].poster_path;
        if(resLink == null)
         {
            let poste = mainPosterLink + resLink;
            const title = popularList[index].title;
            _list.push(popularList[index]);
            resultsHTML += "<div class='movie'><button id='myBtn' onclick='clickingOnMovie("+index+")'><div class='content'>" +
            "<img src='no-img-avail1.jpeg'"+
            "></img><h2 style='line-height: 28px;text-align: center;font-size: 20px;font-weight: 500;margin-top: 9px;'>"+title+"</h2></div></button></div>";
         }
        else
        {
            let poste = mainPosterLink + resLink;
            const title = popularList[index].title;
            _list.push(popularList[index]);
            resultsHTML += "<div class='movie'><button id='myBtn' onclick='clickingOnMovie("+index+")'><div class='content'><img src="+poste+
            "></img><h2 style='line-height: 28px;text-align: center;font-size: 20px;font-weight: 500;margin-top: 9px;'>"+title+"</h2></div></button></div>";
        }
     }
     var loading = document.getElementsByClassName("movies")[0];
     loading.innerHTML = resultsHTML;

     for(let index = 0; index < Object.keys(_favList).length; index++) {
        let resLink = _favList[index+1].poster;
        let poste = mainPosterLink + resLink;
        const title = _favList[index+1].title;
        _favArr.push(_favList[index+1]);
        resHTMLForFav += "<div class='item'><button id='btnHorizScroll' onclick='dataOfHorizScroll("+index+")'><div class='content'><img src="+poste+
        "></img><h2 style='line-height: 28px;text-align: center;font-size: 20px;font-weight: 500;margin-top: 9px;'>"+title+"</h2></div></button></div>";
     }
     var favs = document.getElementsByClassName("wrapper")[0];
     favs.innerHTML = resHTMLForFav;
    })
}
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
function dataOfHorizScroll(index)
{
  let getYear = _favArr[index].year;
  let takingTitlFrmList = _favArr[index].title; 
  let takinOvFrmList = _favArr[index].ov;
  let ratin = _favArr[index].rating;
  let lan = _favArr[index].language;
  document.getElementById("popUpContent").innerHTML = takingTitlFrmList;
  document.getElementById("ov").innerHTML = takinOvFrmList;
  document.getElementById("rating").innerHTML = ratin;
  document.getElementById("year").innerHTML = getYear;
  document.getElementById("language").innerHTML = lan;
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