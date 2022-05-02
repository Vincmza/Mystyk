import * as inHell from "./bands_files/in_hell_files.js"
import * as kosmos from "./bands_files/kosmos_files.js"
import * as praim_faya from "./bands_files/praim_faya_files.js"

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
                id:1,
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
            //     id : 1,
            //     bandId : 1,
            //     bandName : function(){
            //         return returnName(this.bandId) 
            //     },
            //     format : "T-shirt",
            //     description : "high quality coton, available in S,M,L,XL sizes",
            //     itemPicture : "",
            //     isItemAvailable : true,
            //     purchase : function(){
            //         if(this.isItemAvailable===true){
            //             return [{linkToBuy : ""}]
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
                id : 1,
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
                id : 2,
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
            //     id : 1,
            //     bandId :2,
            //     bandName : function(){
            //         return returnName(this.bandId) 
            //     },
            //     format : "t-shirt",
            //     description : "high quality coton, available in S,M,L,XL sizes",
            //     itemPicture : "",
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
                id:1,
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
    }

]