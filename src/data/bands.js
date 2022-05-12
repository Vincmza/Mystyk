import * as inHell from "./bands_files/in_hell_files.js"
import * as kosmos from "./bands_files/kosmos_files.js"
import * as praim_faya from "./bands_files/praim_faya_files.js"
import * as dislocate from "./bands_files/dislocate_files"
import * as kozh from "./bands_files/kozh_dall_files"
import * as hatred from "./bands_files/hatred_dusk_files"
import * as boost from "./bands_files/boost_files"
import * as akiavel from "./bands_files/akiavel_files"
import * as freitot from "./bands_files/freitot_files"
import * as notheist from "./bands_files/notheist_files"
import * as equinox from "./bands_files/equinox_files"
import * as dirty from "./bands_files/dirtyprotest_files"
import { returnName } from "./news.js"

export const bands = [
    //KOSMOS
    {
        id: 1,
        name : "Kosmos",
        style : "black metal",
        subStyle : "atmospheric black/death",
        biography: "KOSMOS is Nekros' studio project created in 2010 with the release of the demo called 'L'Antithèse'. It is also during the creation of this demo that Nekros begins to collaborate with Naja Atra , drummer of the brutal technical death metal band GOMORY. So far, Nekros used to compose music, write the lyrics and record all guitars, bass and vocals and let Naja Atra record drums in his studio. Naja Atra also does everything about sound egineering. Now KOSMOS has an official singer in the name of Quantum who also writes all lyrics.",
        bandLogo: {
            logo : kosmos.logo(), 
            logoLow : kosmos.logoLow()
        },
        banner : {
            bannerHigh : kosmos.bannerHigh(), 
            bannerMedium : kosmos.bannerMedium(), 
            bannerLow : kosmos.bannerLow()
        },
        country : "France",
        followLinks : [
            {
                facebook: "https://www.facebook.com/KOSMOS.BLACK.METAL",
                instagram:"",
                twitter:"",
                tiktok:""
            }
        ],
        lineUp : [
            {
                name : "Nekros",
                instrument : ["songwriting","guitars","bass"],
                pastMember : {isTrue : false, fromTo : ""}
                
            },
            {
                name : "Quantum",
                instrument : ["voices","lyrics"],
                pastMember : {isTrue : false, fromTo : ""}
            },
            {
                name : "Naja Atra",
                instrument : ["drums", "sound engineering"],
                pastMember : {isTrue : false, fromTo : ""}
            }
        ],
        releases : [
            //1 ALBUM FROM THE BAND
            {
                id:11,
                bandId : 1,
                year : 2022,
                releaseDate :"22/04/2022",
                title : "Noctis, Avem et Gloria",
                duration: "51:25 min",
                subStyle : "atmospheric black/death",
                frontCover : kosmos.noctisAvemEtGloria(),
                format : "cd digipack",
                isAlbumAvailable : true,
                listenAndShop : function(){
                    if(this.isAlbumAvailable === true){
                        return [
                            {
                                youTube : "https://www.youtube.com/watch?v=gJeVulBg1pY",
                                bandCamp : "https://kosmosblackmetal.bandcamp.com/",
                                spotify : "https://open.spotify.com/album/16ufgGSb7eTl7EOfmMtO8Q",
                                deezer : "https://www.deezer.com/us/album/312437817",
                                seasonShop : "https://shop.season-of-mist.com/kosmos-noctis-avem-et-gloria-cd-digipak"
                            }
                        ]
                    } else if (this.isAlbumAvailable === false){
                        return []
                    }
                } 
            }
        ],
        merch : [

            // {
            //     id : 11,
            //     bandId : 1,
            //     bandName : function(){
            //         return returnName(this.bandId) 
            //     },
            //     format : "t-shirt",
            //     description : "high quality coton, available in S,M,L,XL sizes",
            //     itemPicture : kosmos.noctisAvemEtGloria(),
            //     isItemAvailable : true,
            //     purchase : function(){
            //         if(this.isItemAvailable===true){
            //             return [{linkToBuy : ""}]
            //         } else if(this.isItemAvailable===false){
            //             return[]
            //         }
            //     },
            // },
            // {
            //     id : 12,
            //     bandId :1,
            //     bandName : function(){
            //         return returnName(this.bandId) 
            //     },
            //     format : "t-shirt",
            //     description : "high quality coton, available in S,M,L,XL sizes",
            //     itemPicture : "http://antichristmagazine.com/wp-content/uploads/2017/11/Deathcrush-Cover.jpg",
            //     isItemAvailable : true,
            //     purchase : function(){
            //         if(this.isItemAvailable===true){
            //             return [{linkToBuy : "https://shop.season-of-mist.com/beastcraft-into-the-burning-pit-of-hell-print-on-demand"}]
            //         } else if(this.isItemAvailable===false){
            //             return[]
            //         }
            //     },
            // }
        ]
    },
    //IN HELL
    {
        id: 2,
        name : "In Hell",
        style : "death metal",
        subStyle : "blackened death",
        biography: "IN HELL is a black death metal band from north of France created in early 2014 by the guitarist and composer Fab Darkhell. IN HELL mixes both fast and brutal riffing and dark melodies such as great bands like BEHEMOTH, CARCASS. IN HELL is a live performance beast, the band already shared the stage with LELAHELL, CORROSIVE ELEMENTS, SAVAGE ANNIHILATION, EVOLUTION ZERO, MORTUARY, NIRNAETH, LETHAEOS, MINDNETIC !",
        bandLogo: {
            logo : inHell.logo(), 
            logoLow : inHell.logoLow()
        },
        banner: {
            bannerHigh : inHell.bannerHigh(), 
            bannerMedium : inHell.bannerMedium(), 
            bannerLow : inHell.bannerLow()
        },
        country : "France",
        followLinks : [
            {
                facebook: "https://www.facebook.com/inhellofficialband",
                instagram:"https://www.instagram.com/in_hell_band/?hl=fr",
                twitter:"https://twitter.com/inhellofficial",
                tiktok:""
            }
        ],
        lineUp : [
            {
                name : "Darkhell",
                instrument : ["songwriting","guitars",],
                pastMember : {isTrue : false, fromTo : ""}
            },
            {
                name : "Olivier",
                instrument : ["guitars"],
                pastMember : {isTrue : false, fromTo : ""}
            },
            {
                name : "Cédric",
                instrument : ["bass", "backing vocals"],
                pastMember : {isTrue : false, fromTo : ""}
            },
            {
                name : "James Spar",
                instrument : ["vocals", "lyrics"],
                pastMember : {isTrue : true, fromTo : "2014 to 2021"}
            },
            {
                name : "Gus",
                instrument : ["drums"],
                pastMember : {isTrue : true, fromTo : "2014 to 2021"}
            }
        ],
        releases : [
            //1 ALBUM FROM THE BAND
            {
                id : 21,
                bandId : 2,
                year : 2022,
                releaseDate : "22/01/2022",
                title : "Lex Divina Terrores",
                duration:"43:09 min",
                subStyle : "blackened death",
                frontCover : inHell.lexDivinaTerrores(),
                format : "cd digipack",
                isAlbumAvailable : true,
                listenAndShop : function(){
                    if(this.isAlbumAvailable === true){
                        return [
                            {
                                youTube : "https://www.youtube.com/watch?v=upge4v_0lq0",
                                bandCamp : "https://inhellblackdeath.bandcamp.com/album/lex-divina-terrores?from=hp",
                                spotify : "https://open.spotify.com/artist/5YODH8RhKTFatR2tMwrudz",
                                deezer : "https://www.deezer.com/fr/album/289677762",
                                seasonShop : "https://shop.season-of-mist.com/in-hell-lex-divina-terrores-cd-digipak"
                            }
                        ]
                    } else if (this.isAlbumAvailable === false){
                        return []
                    }
                } 
            },
            {
                id : 22,
                bandId : 2,
                year : 2019,
                releaseDate : "25/01/2019",
                title : "Satanica Mundi",
                duration:"40:37 min",
                subStyle : "blackened death",
                frontCover : inHell.satanicaMundi(),
                format : "cd jewel case",
                isAlbumAvailable : true,
                listenAndShop : function(){
                    if(this.isAlbumAvailable === true){
                        return [
                            {
                                youTube : "https://www.youtube.com/watch?v=-Rrf-GRE_iU&list=OLAK5uy_nqw_4yf0GpbAHwXxT7y1TsJwn4sU4VZYI",
                                bandCamp : "https://inhellblackdeath.bandcamp.com/album/satanica-mundi",
                                spotify : "https://open.spotify.com/artist/7BQFtX6ud2BcPcoVCDiNwj",
                                deezer : "https://www.deezer.com/fr/album/85418002",
                                seasonShop : "https://shop.season-of-mist.com/in-hell-satanica-mundi-cd-digipak"
                            }
                        ]
                    } else if (this.isAlbumAvailable === false){
                        return []
                    }
                } 
            }
        ],
        merch : [

            // {
            //     id : 21,
            //     bandId :2,
            //     bandName : function(){
            //         return returnName(this.bandId) 
            //     },
            //     format : "t-shirt",
            //     description : "high quality coton, available in S,M,L,XL sizes",
            //     itemPicture : "http://www.deathmetal.org/wp-content/uploads/deteriorate_-_rotting_in_hell.jpg",
            //     isItemAvailable : true,
            //     purchase : function(){
            //         if(this.isItemAvailable===true){
            //             return [{linkToBuy : "https://shop.season-of-mist.com/beastcraft-into-the-burning-pit-of-hell-print-on-demand"}]
            //         } else if(this.isItemAvailable===false){
            //             return[]
            //         }
            //     },
            // }
        ]
    },
    //PRAIM FAYA
    {
        id: 3,
        name : "Praïm Faya",
        style : "metal core",
        subStyle : "melodic groove death metal",
        biography: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        bandLogo: {
            logo : praim_faya.logo(), 
            logoLow : praim_faya.logo()
        },
        banner : {
            bannerHigh : praim_faya.bannerHigh(), 
            bannerMedium : praim_faya.bannerMedium(),
            bannerLow : praim_faya.bannerLow(),
        },
        country : "France",
        followLinks : [
            {
                facebook: "https://www.facebook.com/PraimFayaOff/",
                instagram:"",
                twitter:"https://twitter.com/PraimFaya_off?s=20",
                tiktok:""
            }
        ],
        lineUp : [
            {
                name : "Paul Lecarpentier",
                instrument : ["vocals"],
                pastMember : {isTrue : false, fromTo : ""}
                
            },
            {
                name : "Alexandre Maquère",
                instrument : ["guitars"],
                pastMember : {isTrue : false, fromTo : ""}
            },
            {
                name : "Artur Pereira",
                instrument : ["guitars"],
                pastMember : {isTrue : false, fromTo : ""}
            },
            {
                name : "Valentin Lemée",
                instrument : ["drums"],
                pastMember : {isTrue : false, fromTo : ""}
            },
            {
                name : "Antoine Coisy",
                instrument : ["bass"],
                pastMember : {isTrue : false, fromTo : ""}
            },
            
        ],
        releases : [
            //1 ALBUM FROM THE BAND
            {
                id:31,
                bandId : 3,
                year : 2022,
                releaseDate :"14/01/2022",
                title : "Native",
                duration: "24:10 min",
                subStyle : "melodic groove death metal",
                frontCover : praim_faya.native(),
                format : "cd jewel case",
                isAlbumAvailable : true,
                listenAndShop : function(){
                    if(this.isAlbumAvailable === true){
                        return [
                            {
                                youTube : "https://www.youtube.com/watch?v=3z7-74NggUs&t=843s",
                                bandCamp : "https://praimfaya.bandcamp.com/album/native",
                                spotify : "https://open.spotify.com/artist/10SEtMRaumZOPpXUA2K1Ma?si=R9bGwJxmR2qeGbBEJnon_Q&nd=1",
                                deezer : "",
                                seasonShop : "https://shop.season-of-mist.com/fr/praim-faya-native-cd"
                            }
                        ]
                    } else if (this.isAlbumAvailable === false){
                        return []
                    }
                } 
            }
        ],
        merch : [

        ]
    },
    //DISLOCATE
    {
        id: 4,
        name : "Dislocate",
        style : "trash metal",
        subStyle : "groovy trash/death",
        biography: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        bandLogo: {
            logo : dislocate.logo(), 
            logoLow : dislocate.logoLow()
        },
        banner : {
            bannerHigh : dislocate.bannerHigh(), 
            bannerMedium : dislocate.bannerHigh(),
            bannerLow : dislocate.bannerLow(),
        },
        country : "France",
        followLinks : [
            {
                facebook: "https://www.facebook.com/Dislocate-107055694846007/",
                instagram:"",
                twitter:"",
                tiktok:""
            }
        ],
        lineUp : [
            {
                name : "Manu Becart",
                instrument : ["vocals"],
                pastMember : {isTrue : false, fromTo : ""}
                
            },
            {
                name : "Thomas Schlawick",
                instrument : ["guitars"],
                pastMember : {isTrue : false, fromTo : ""}
            },
            {
                name : "Matthieu Schlawick",
                instrument : ["drums"],
                pastMember : {isTrue : false, fromTo : ""}
            },
            {
                name : "Thomas Bleyer",
                instrument : ["bass"],
                pastMember : {isTrue : false, fromTo : ""}
            }
        ],
        releases : [
            //1 ALBUM FROM THE BAND
            {
                id:41,
                bandId : 4,
                year : 2022,
                releaseDate :"11/02/2022",
                title : "Behind The Scenes",
                duration: "39:05 min",
                subStyle : "groovy trash/death",
                frontCover : dislocate.behindTheScenes(),
                format : "cd jewel case",
                isAlbumAvailable : true,
                listenAndShop : function(){
                    if(this.isAlbumAvailable === true){
                        return [
                            {
                                youTube : "https://www.youtube.com/watch?v=iB-aO6fIHTo",
                                bandCamp : "https://dislocate1.bandcamp.com/album/behind-the-scenes",
                                spotify : "",
                                deezer : "",
                                seasonShop : "https://shop.season-of-mist.com/fr/dislocate-behind-the-scenes-cd"
                            }
                        ]
                    } else if (this.isAlbumAvailable === false){
                        return []
                    }
                } 
            }
        ],
        merch : [

        ]
    },
    //KOZH DALL
    {
        id: 5,
        name : "Kozh Dall",
        style : "trash metal",
        subStyle : "trash/death moderne",
        biography: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        bandLogo: {
            logo : kozh.logo(), 
            logoLow : kozh.logo()
        },
        banner : {
            bannerHigh : kozh.bannerHigh(), 
            bannerMedium : kozh.bannerMedium(),
            bannerLow : kozh.bannerHigh(),
        },
        country : "France",
        followLinks : [
            {
                facebook: "https://www.facebook.com/profile.php?id=100063721449372",
                instagram:"",
                twitter:"",
                tiktok:""
            }
        ],
        lineUp : [
            {
                name : "Laurent Plainchamp",
                instrument : ["vocals", "guitars"],
                pastMember : {isTrue : false, fromTo : ""}
                
            },
            {
                name : "Jay",
                instrument : ["bass"],
                pastMember : {isTrue : false, fromTo : ""}
            },
            {
                name : "Vince Delca",
                instrument : ["vocals", "chorus"],
                pastMember : {isTrue : true, fromTo : "2016-2018"}
            },
            {
                name : "Chris",
                instrument : ["bass"],
                pastMember : {isTrue : true, fromTo : "2016-2017"}
            }
        ],
        releases : [
            //1 ALBUM FROM THE BAND
            {
                id:51,
                bandId :5,
                year : 2022,
                releaseDate :"04/02/2022",
                title : "Deaf Mute",
                duration: "39:05 min",
                subStyle : "trash/death moderne",
                frontCover : kozh.deaf(),
                format : "cd digipack",
                isAlbumAvailable : true,
                listenAndShop : function(){
                    if(this.isAlbumAvailable === true){
                        return [
                            {
                                youTube : "https://www.youtube.com/watch?v=TnWqHnomjrc",
                                bandCamp : "",
                                spotify : "https://open.spotify.com/artist/2w8VTWY5zJQD1r0WyqmvPS",
                                deezer : "https://www.deezer.com/fr/artist/159729482",
                                seasonShop : "https://shop.season-of-mist.com/kozh-dall-deaf-mute-cd-digipak"
                            }
                        ]
                    } else if (this.isAlbumAvailable === false){
                        return []
                    }
                } 
            }
        ],
        merch : [

        ]
    },
    //HATRED DUSK
    {
    id: 6,
    name : "Hatred Dusk",
    style : "trash metal",
    subStyle : "trash/death",
    biography: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    bandLogo: {
        logo : hatred.logo(), 
        logoLow : hatred.logo()
    },
    banner : {
        bannerHigh : hatred.bannerHigh(), 
        bannerMedium : hatred.bannerMedium(),
        bannerLow : hatred.bannerMedium(),
    },
    country : "France",
    followLinks : [
        {
            facebook: "https://www.facebook.com/HatredDusk/ ",
            instagram:"https://www.instagram.com/hatreddusk/?hl=fr",
            twitter:"",
            tiktok:""
        }
    ],
    lineUp : [
        {
            name : "Nicolas Pupilli",
            instrument : ["guitars"],
            pastMember : {isTrue : false, fromTo : ""}
            
        },
        {
            name : "Phil",
            instrument : ["vocals"],
            pastMember : {isTrue : false, fromTo : ""}
        },
        {
            name : "Janho",
            instrument : ["bass"],
            pastMember : {isTrue : false, fromTo : ""}
        },
        {
            name : "K-Kan",
            instrument : ["lead guitars"],
            pastMember : {isTrue : false, fromTo : ""}
        },
        {
            name : "Micky Dutot",
            instrument : ["drums"],
            pastMember : {isTrue : false, fromTo : ""}
        },
        
    ],
    releases : [
        //1 ALBUM FROM THE BAND
        {
            id:61,
            bandId :6,
            year : 2019,
            releaseDate :"22/11/2019",
            title : "Hatred Dusk",
            duration: "26:27 min",
            subStyle : "trash/death",
            frontCover : hatred.hatredDusk(),
            format : "cd digipack",
            isAlbumAvailable : true,
            listenAndShop : function(){
                if(this.isAlbumAvailable === true){
                    return [
                        {
                            youTube : "https://www.youtube.com/watch?v=YXNpz3w8a3E",
                            bandCamp : "https://hatreddusk.bandcamp.com/",
                            spotify : "https://open.spotify.com/artist/2v76wR3Kyk627JoNhvxvQA",
                            deezer : "https://www.deezer.com/en/album/120457332",
                            seasonShop : "https://shop.season-of-mist.com/hatred-dusk-hatred-dusk-cd-digipak"
                        }
                    ]
                } else if (this.isAlbumAvailable === false){
                    return []
                }
            } 
        }
    ],
    merch : [

    ]
    },
    //BOOST
    {
        id: 7,
        name : "Boost",
        style : "modern metal",
        subStyle : "metalcore / indus",
        biography: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        bandLogo: {
            logo : boost.logo(), 
            logoLow : boost.logo()
        },
        banner : {
            bannerHigh : boost.bannerHigh(), 
            bannerMedium : boost.bannerMedium(),
            bannerLow : boost.bannerMedium(),
        },
        country : "France",
        followLinks : [
            {
                facebook: "https://www.facebook.com/boostrevenge",
                instagram:"https://www.instagram.com/_boost_band_official/",
                twitter:"",
                tiktok:""
            }
        ],
        lineUp : [
            {
                name : "Steph",
                instrument : ["bass"],
                pastMember : {isTrue : false, fromTo : ""}
                
            },
            {
                name : "Boozy",
                instrument : ["vocals", "programming"],
                pastMember : {isTrue : false, fromTo : ""}
            },
            {
                name : "K-Shoo",
                instrument : ["vocals"],
                pastMember : {isTrue : false, fromTo : ""}
            },
            {
                name : "Thomas",
                instrument : ["drums"],
                pastMember : {isTrue : false, fromTo : ""}
            },
            {
                name : "Crass",
                instrument : ["vocals"],
                pastMember : {isTrue : false, fromTo : ""}
            },
            {
                name : "Olive",
                instrument : ["guitars"],
                pastMember : {isTrue : false, fromTo : ""}
            },
            
        ],
        releases : [
            //1 ALBUM FROM THE BAND
            {
                id:71,
                bandId :7,
                year : 2020,
                releaseDate :"17/01/2020",
                title : "Reboot",
                duration: "47:06 min",
                subStyle : "modern metalcore",
                frontCover : boost.reboot(),
                format : "cd digipack",
                isAlbumAvailable : true,
                listenAndShop : function(){
                    if(this.isAlbumAvailable === true){
                        return [
                            {
                                youTube : "https://www.youtube.com/watch?v=8Y0DVRZ4JNM&list=PLR97F8x5zcFQvaJJt6vaM-9eBadDNMBk3",
                                bandCamp : "",
                                spotify : "https://open.spotify.com/artist/6is1uTcM13yVvDN1pEccvR",
                                deezer : "",
                                seasonShop : "https://shop.season-of-mist.com/boost-reboot-cd-digipak"
                            }
                        ]
                    } else if (this.isAlbumAvailable === false){
                        return []
                    }
                } 
            }
        ],
        merch : [
    
        ]
    },
    //AKIAVEL
    {
        id: 8,
        name : "Akiavel",
        style : "death metal",
        subStyle : "melodic death metal",
        biography: "Shredding out France, Akiavel are the new melodeath masters! A visceral combination of Groove, Thrash, Black and Old-school Death Metal, with melodic riffs, and a touch of hardcore.",
        bandLogo: {
            logo : akiavel.logo(), 
            logoLow : akiavel.logo()
        },
        banner : {
            bannerHigh : akiavel.bannerHigh(), 
            bannerMedium : akiavel.bannerMedium(),
            bannerLow : akiavel.bannerMedium(),
        },
        country : "France",
        followLinks : [
            {
                facebook: "https://www.facebook.com/Akiavel/",
                instagram:"https://www.instagram.com/akiavel/?hl=fr",
                twitter:"https://twitter.com/AkiaveL?s=09",
                tiktok:""
            }
        ],
        lineUp : [
            {
                name : "Jay",
                instrument : ["bass"],
                pastMember : {isTrue : false, fromTo : ""}
                
            },
            {
                name : "Butch",
                instrument : ["drums"],
                pastMember : {isTrue : false, fromTo : ""}
            },
            {
                name : "JB",
                instrument : ["guitars"],
                pastMember : {isTrue : true, fromTo : "2018 to 2020"}
            },
            {
                name : "Chris",
                instrument : ["guitars"],
                pastMember : {isTrue : false, fromTo : ""}
            },
            {
                name : "Auré",
                instrument : ["vocals"],
                pastMember : {isTrue : false, fromTo : ""}
            }, 
        ],
        releases : [
            //1 ALBUM FROM THE BAND
            {
                id:81,
                bandId :8,
                year : 2020,
                releaseDate :"21/02/2020",
                title : "V",
                duration: "40:14 min",
                subStyle : "melodic death metal",
                frontCover : akiavel.v(),
                format : "cd digifile",
                isAlbumAvailable : true,
                listenAndShop : function(){
                    if(this.isAlbumAvailable === true){
                        return [
                            {
                                youTube : "https://www.youtube.com/watch?v=MOcXv7Bs5y8&list=OLAK5uy_mDs1qdW_gJc_jil10GF4dyxjfmOR_R71M",
                                bandCamp : "https://akiavel.bandcamp.com/album/v",
                                spotify : "https://open.spotify.com/artist/14M2CyExjuwWrJlJGYvg6T/discography/album?pageUri=spotify:album:60PFpfWD1p5XXP4qSVMG88",
                                deezer : "https://www.deezer.com/fr/album/131646472",
                                seasonShop : "https://shop.season-of-mist.com/akiavel-v-cd-digifile"
                            }
                        ]
                    } else if (this.isAlbumAvailable === false){
                        return []
                    }
                } 
            }
        ],
        merch : [
    
        ]
    },
    //FREITOT
    {
        id: 9,
        name : "Freitot",
        style : "death metal",
        subStyle : "old school death metal",
        biography: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        bandLogo: {
            logo : freitot.logo(), 
            logoLow : freitot.logo()
        },
        banner : {
            bannerHigh : freitot.bannerHigh(), 
            bannerMedium : freitot.bannerHigh(),
            bannerLow : freitot.bannerHigh(),
        },
        country : "France",
        followLinks : [
            {
                facebook: "https://www.facebook.com/freitot/?ref=page_internal",
                instagram:"",
                twitter:"https://twitter.com/freitot_band",
                tiktok:""
            }
        ],
        lineUp : [
            {
                name : "Fabien 'Fack' Desgardins",
                instrument : ["lead guitars"],
                pastMember : {isTrue : false, fromTo : ""}
                
            },
            {
                name : "Arno Strobl",
                instrument : ["vocals"],
                pastMember : {isTrue : false, fromTo : ""}
            },
            {
                name : "Etienne Sarthou",
                instrument : ["rythm guitars", "bass", "drums"],
                pastMember : {isTrue : false, fromTo : ""}
            },
        ],
        releases : [
            //1 ALBUM FROM THE BAND
            {
                id:91,
                bandId :9,
                year : 2018,
                releaseDate :"11/05/2018",
                title : "Freitot",
                duration: "37:24 min",
                subStyle : "old school death metal",
                frontCover : freitot.freitot(),
                format : "cd digipack",
                isAlbumAvailable : true,
                listenAndShop : function(){
                    if(this.isAlbumAvailable === true){
                        return [
                            {
                                youTube : "https://www.youtube.com/watch?v=_vm1YDj1hhc&list=RDEM_bVkDTKhT-Zi8PaAnR_EMA&start_radio=1",
                                bandCamp : "",
                                spotify : "https://open.spotify.com/artist/649oVPxpYFLQwrlWsAASiC",
                                deezer : "https://www.deezer.com/en/album/63075802",
                                seasonShop : "https://shop.season-of-mist.com/freitot-freitot-cd-digipak"
                            }
                        ]
                    } else if (this.isAlbumAvailable === false){
                        return []
                    }
                } 
            }
        ],
        merch : [
    
        ]
    },
    //NOTHEIST
    {
        id: 10,
        name : "Notheist",
        style : "death metal",
        subStyle : "trash/death metal",
        biography: "Behind Notheist is Gregory Lambert, multi-instrumentalist (guitar, bass, drums, vocals amongst others) & producer. Well known in the French metal scene, Greg’s name is associated with several major acts - MISANTHROPE (progessive/death metal, 2003), ZUUL FX (Industrial Thrash Death Metal 2002-2003, 2014-2017) CRUSHER (since 2017) and it is also associated with Alexandre Astier (who is behind the famous tv show Kaamelott) as the 8 strings guitar player of the show L’EXOCONFERENCE (2014-2016). Without leaving some of his collaborations, Greg Lambert decided in 2016 to write & record a first full solo album. This album will be released in May 2019 through Mystyk Records.",
        bandLogo: {
            logo : notheist.logo(), 
            logoLow : notheist.logo()
        },
        banner : {
            bannerHigh : notheist.bannerHigh(), 
            bannerMedium : notheist.bannerMedium(),
            bannerLow : notheist.bannerMedium(),
        },
        country : "France",
        followLinks : [
            {
                facebook: "https://www.facebook.com/NotheistBand",
                instagram:"",
                twitter:"https://twitter.com/notheist_band",
                tiktok:""
            }
        ],
        lineUp : [
            {
                name : "Grégory Lambert",
                instrument : ["everything"],
                pastMember : {isTrue : false, fromTo : ""}
                
            },
        ],
        releases : [
            //1 ALBUM FROM THE BAND
            {
                id:101,
                bandId :10,
                year : 2019,
                releaseDate :"24/05/2019",
                title : "Notheist",
                duration: "58:11 min",
                subStyle : "trash / death metal",
                frontCover : notheist.notheist(),
                format : "cd digipack",
                isAlbumAvailable : true,
                listenAndShop : function(){
                    if(this.isAlbumAvailable === true){
                        return [
                            {
                                youTube : "https://www.youtube.com/watch?v=j9XuxbJ--ek",
                                bandCamp : "https://notheist.bandcamp.com/?fbclid=IwAR39P_aI5VcmQxdqE3WDSxIU6J_KL8rj43yDYBeTEicGnkUw4kwbW0KYo_8",
                                spotify : "https://open.spotify.com/album/3nxouXvXgBiu5Gt2c8Yd5q",
                                deezer : "https://www.deezer.com/us/album/97591432",
                                seasonShop : "https://shop.season-of-mist.com/notheist-notheist-cd-digipak"
                            }
                        ]
                    } else if (this.isAlbumAvailable === false){
                        return []
                    }
                } 
            }
        ],
        merch : [
    
        ]
    },
    //EQUINOX
    {
        id: 11,
        name : "Equinox",
        style : "heavy / power metal",
        subStyle : "progressive symphonic metal",
        biography: "Equinox is a musical project created by the official guitarist of Farida Guitars, Inophis. Equinox is composed of 4 four wolrd-renowned musicians. Their music contain influences such as jazz, metal, classical music, folk or pop.",
        bandLogo: {
            logo : equinox.logo(), 
            logoLow : equinox.logo()
        },
        banner : {
            bannerHigh : equinox.bannerHigh(), 
            bannerMedium : equinox.bannerHigh(),
            bannerLow : equinox.bannerHigh(),
        },
        country : "France",
        followLinks : [
            {
                facebook: "https://www.facebook.com/EquinoxSymphonicProgMetalBandOfficial/",
                instagram:"https://www.instagram.com/equinox_inophis/",
                twitter:"https://twitter.com/equinox_inophis",
                tiktok:""
            }
        ],
        lineUp : [
            {
                name : "Pascal Mulot",
                instrument : ["bass"],
                pastMember : {isTrue : false, fromTo : ""}
                
            },
            {
                name : "Inophis",
                instrument : ["guitars, orchestrations"],
                pastMember : {isTrue : false, fromTo : ""}
                
            },
            {
                name : "Emmanuel Creis",
                instrument : ["vocals"],
                pastMember : {isTrue : false, fromTo : ""}
                
            },
            {
                name : "Aurélien Ouzoulias",
                instrument : ["drums"],
                pastMember : {isTrue : false, fromTo : ""}
                
            },
        ],
        releases : [
            //1 ALBUM FROM THE BAND
            {
                id:111,
                bandId :11,
                year : 2018,
                releaseDate :"04/05/2018",
                title : "The Cry of Gaïa",
                duration: "48:31 min",
                subStyle : "progressive symphonic metal",
                frontCover : equinox.cry(),
                format : "cd jewel case",
                isAlbumAvailable : true,
                listenAndShop : function(){
                    if(this.isAlbumAvailable === true){
                        return [
                            {
                                youTube : "https://www.youtube.com/watch?v=cJk6RX0HGj8",
                                bandCamp : "",
                                spotify : "https://open.spotify.com/album/3cWQ8j0CKqeuqiKkHNbwWZ",
                                deezer : "https://www.deezer.com/us/album/59167442",
                                seasonShop : "https://shop.season-of-mist.com/fr/equinox-the-cry-of-gaia-cd"
                            }
                        ]
                    } else if (this.isAlbumAvailable === false){
                        return []
                    }
                } 
            }
        ],
        merch : [
    
        ]
    },
    //DIRTYPROTEST
    {
        id: 12,
        name : "Dirtyprotest",
        style : "death metal",
        subStyle : "Old school / blackened death",
        biography: "DIRTYPROTEST was created in 2006 by Alan Hurley who have been playing in several bands for a decade and working as a sound engineer recording local bands in Cairo (Egypt). In 2016 he decided to start DIRTYPROTEST and write a full length album. The band's objective was to pay homage to the Swedish Death School with typical intense riffing mixed with some Hardcore and Black Metal influences. After releasing a few tracks a few years ago, Alan Hurley met the French singer DM (Growler of HELIOSS, WRATH FROM ABOVE and GASTROPODE) and they started to collaborate on the debut album in 2016.",
        bandLogo: {
            logo : dirty.logo(), 
            logoLow : dirty.logo()
        },
        banner : {
            bannerHigh : dirty.bannerHigh(), 
            bannerMedium : dirty.bannerHigh(),
            bannerLow : dirty.bannerHigh(),
        },
        country : "Egypt / France",
        followLinks : [
            {
                facebook: "",
                instagram:"",
                twitter:"",
                tiktok:""
            }
        ],
        lineUp : [
            {
                name : "Alan Hurley",
                instrument : ["all instruments", "songwriting"],
                pastMember : {isTrue : false, fromTo : ""}
                
            },
            {
                name : "DM",
                instrument : ["vocals"],
                pastMember : {isTrue : false, fromTo : ""}
                
            },
        ],
        releases : [
            //1 ALBUM FROM THE BAND
            {
                id:121,
                bandId :12,
                year : 2018,
                releaseDate :"18/05/2018",
                title : "Hellstorm",
                duration: "35:23 min",
                subStyle : "blackened death metal",
                frontCover : dirty.hellstorm(),
                format : "cd digipack",
                isAlbumAvailable : true,
                listenAndShop : function(){
                    if(this.isAlbumAvailable === true){
                        return [
                            {
                                youTube : "https://www.youtube.com/watch?v=Vv1dwolGxm8",
                                bandCamp : "",
                                spotify : "https://open.spotify.com/album/6M2aUx51hN4zX5kK126CZS",
                                deezer : "https://www.deezer.com/us/album/63715462",
                                seasonShop : "https://shop.season-of-mist.com/fr/dirtyprotest-hellstorm-cd-digipak"
                            }
                        ]
                    } else if (this.isAlbumAvailable === false){
                        return []
                    }
                } 
            }
        ],
        merch : [
    
        ]
    },

]