import * as inHell from "./bands_files/in_hell_files.js"
import * as kosmos from "./bands_files/kosmos_files.js"


//FUNCTION TO GET BAND'S NAME 
import { returnName } from "./news"

export const bands = [
    //KOSMOS
    {
        id: 1,
        name : "Kosmos",
        style : "black metal",
        subStyle : "atmospheric black/death",
        biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt consectetur enim, eget venenatis justo laoreet et. Mauris aliquet egestas leo quis faucibus. Nulla fringilla lacus eget luctus fringilla. Etiam neque magna, dapibus non elit vitae, lobortis consequat est. Donec mollis cursus massa eget rutrum. Quisque sed tellus dictum, lacinia neque id, viverra arcu. Duis massa elit, euismod eget varius sit amet, porta at massa. Duis eget arcu eget lorem efficitur consequat ornare vitae ante. Duis placerat dui in tortor euismod pellentesque. Nam tincidunt ligula at felis aliquam accumsan. Nullam vitae ultrices lectus. Pellentesque tempus sollicitudin lacinia. Phasellus accumsan fringilla arcu, ut commodo ex vehicula nec. Nulla ultricies ante quis lacus bibendum maximus. Pellentesque quis elit volutpat, congue arcu eu, viverra libero.",
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
                releaseDate :"24/01/2022",
                title : "Noctis, Avem et Gloria",
                duration: "58 min",
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
                                spotify : "",
                                deezer : "",
                                seasonShop : "https://shop.season-of-mist.com/kosmos-noctis-avem-et-gloria-cd-digipak"
                            }
                        ]
                    } else if (this.isAlbumAvailable === false){
                        return []
                    }
                } 
            },
            {
                id:2,
                bandId : 1,
                year : 2019,
                releaseDate :"20/09/2019",
                title : "L'Envol",
                duration: "52 min",
                subStyle : "post black metal",
                frontCover : kosmos.envol(),
                format : "cd digipack",
                isAlbumAvailable : true,
                listenAndShop : function(){
                    if(this.isAlbumAvailable === true){
                        return [
                            {
                                youTube : "https://www.youtube.com/watch?v=yMiQrgq2MqQ",
                                bandCamp : "https://kosmosblackmetal.bandcamp.com/album/lenvol",
                                spotify : "",
                                deezer : "",
                                seasonShop : ""
                            }
                        ]
                    } else if (this.isAlbumAvailable === false){
                        return []
                    }
                } 
            }
        ],
        merch : [

            {
                id : 1,
                bandId : 1,
                bandName : function(){
                    return returnName(this.bandId) 
                },
                format : "T-shirt",
                description : "high quality coton, available in S,M,L,XL sizes",
                itemPicture : kosmos.tShirt(),
                isItemAvailable : true,
                purchase : function(){
                    if(this.isItemAvailable===true){
                        return [{linkToBuy : ""}]
                    } else if(this.isItemAvailable===false){
                        return[]
                    }
                },
            },
            {
                id : 2,
                bandId : 1,
                bandName : function(){
                    return returnName(this.bandId) 
                },
                format : "Gobelet",
                description : "Kosmos logo in black on white transparent plastic glass",
                itemPicture : kosmos.glass(),
                isItemAvailable : true,
                purchase : function(){
                    if(this.isItemAvailable===true){
                        return [{linkToBuy : "https://www.pompe-a-biere.com/verre-a-biere/iron-maiden-trooper-verre-a-biere.html"}]
                    } else if(this.isItemAvailable===false){
                        return[]
                    }
                },
            }
        ]
    },
    //IN HELL
    {
        id: 2,
        name : "In Hell",
        style : "death metal",
        subStyle : "blackened death",
        biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt consectetur enim, eget venenatis justo laoreet et. Mauris aliquet egestas leo quis faucibus. Nulla fringilla lacus eget luctus fringilla. Etiam neque magna, dapibus non elit vitae, lobortis consequat est. Donec mollis cursus massa eget rutrum. Quisque sed tellus dictum, lacinia neque id, viverra arcu. Duis massa elit, euismod eget varius sit amet, porta at massa. Duis eget arcu eget lorem efficitur consequat ornare vitae ante. Duis placerat dui in tortor euismod pellentesque. Nam tincidunt ligula at felis aliquam accumsan. Nullam vitae ultrices lectus. Pellentesque tempus sollicitudin lacinia. Phasellus accumsan fringilla arcu, ut commodo ex vehicula nec. Nulla ultricies ante quis lacus bibendum maximus. Pellentesque quis elit volutpat, congue arcu eu, viverra libero.",
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
                duration:"47 min",
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
                releaseDate : "17/04/2019",
                title : "Satanica Mundi",
                duration:"42 min",
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

            {
                id : 1,
                bandId :2,
                bandName : function(){
                    return returnName(this.bandId) 
                },
                format : "t-shirt",
                description : "high quality coton, available in S,M,L,XL sizes",
                itemPicture : inHell.tShirt(),
                isItemAvailable : true,
                purchase : function(){
                    if(this.isItemAvailable===true){
                        return [{linkToBuy : "https://shop.season-of-mist.com/beastcraft-into-the-burning-pit-of-hell-print-on-demand"}]
                    } else if(this.isItemAvailable===false){
                        return[]
                    }
                },
            },
            {
                id : 2,
                bandId : 2,
                bandName : function(){
                    return returnName(this.bandId) 
                },
                format : "beer",
                description : "Bière houblonnée à crue avec des notes citronées, 7,5°",
                itemPicture : inHell.beer(),
                isItemAvailable : true,
                purchase : function(){
                    if(this.isItemAvailable===true){
                        return [{linkToBuy : ""}]
                    } else if(this.isItemAvailable===false){
                        return[]
                    }
                },
            },
            {
                id : 3,
                bandId : 2,
                bandName : function(){
                    return returnName(this.bandId) 
                },
                format : "sweat",
                description : "sweat épais en coton (available sizes : S,M,L,XL)",
                itemPicture : inHell.sweat(),
                isItemAvailable : true,
                purchase : function(){
                    if(this.isItemAvailable===true){
                        return [{linkToBuy : ""}]
                    } else if(this.isItemAvailable===false){
                        return[]
                    }
                },
            },
            {
                id : 4,
                bandId : 2,
                bandName : function(){
                    return returnName(this.bandId) 
                },
                format : "bonnet",
                description : "bonnet renforcé en coton (taille unique)",
                itemPicture : inHell.bonnet(),
                isItemAvailable : true,
                purchase : function(){
                    if(this.isItemAvailable===true){
                        return [{linkToBuy : ""}]
                    } else if(this.isItemAvailable===false){
                        return[]
                    }
                },
            }
        ]
    },
]