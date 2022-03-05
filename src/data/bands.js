//LOGO // Nom du groupe + Logo
//KOSMOS
import kosmosLogo from "../assets/bands/kosmos/logo/kosmos_logo.jpg"
//IN HELL
import inHellLogo from "../assets/bands/in_hell/logo/in_hell_logo.jpg"
//BANNER // Nom du groupe + Banner
import inHellBanner from "../assets/bands/in_hell/banner/in_hell_lex_cd.jpg"
import kosmosBanner from "../assets/bands/kosmos/banner/kosmos_noctis_cd.jpg"
//FRONT COVER // Nom du groupe + premier mot de l'album + Art pour Artwork
//KOSMOS
import kosmosNoctisArt from "../assets/bands/kosmos/music/kosmos_noctis_cd.jpg"
//IN HELL
import inHellLexArt from "../assets/bands/in_hell/music/in_hell_lex_cd.jpg"
//MERCH // Nom du groupe + nature du merch à définir avec le temps
//KOSMOS
import kosmosTshirt from "../assets/bands/kosmos/merch/kosmos_t-shirt.jpg"
//IN HELL
import inHellTshirt from "../assets/bands/in_hell/merch/in_hell_t-shirt.jpg"

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
        bandLogo: kosmosLogo,
        banner : kosmosBanner,
        country : "France",
        lineUp : [
            {
                name : "Nekros",
                instrument : ["songwriting","guitars","bass"] 
                
            },
            {
                name : "Quantum",
                instrument : ["voices","lyrics"]
            },
            {
                name : "Naja Atra",
                instrument : ["drums", "sound engineering"]
            }
        ],
        releases : [
            //1 ALBUM FROM THE BAND
            {
                bandId : 1,
                year : 2022,
                releaseDate :"24/01/2022",
                title : "Noctis, Avem et Gloria",
                duration: "58 min",
                subStyle : "atmospheric black/death",
                frontCover : kosmosNoctisArt,
                purchase : "path to shop",
                format : "cd digipack",
                available : true,
            }
        ],
        merch : [

            {
                id : 1,
                bandId : 1,
                bandName : function(){
                    return returnName(this.bandId) 
                },
                format : "t-shirt",
                description : "high quality coton, available in S,M,L,XL sizes",
                itemPicture : kosmosTshirt,
                available : true
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
        bandLogo: inHellLogo,
        banner: inHellBanner,
        country : "France",
        lineUp : [
            {
                name : "Darkhell",
                instrument : ["songwriting","guitars",]
            },
            {
                name : "Olivier",
                instrument : ["guitars"] 
            },
            {
                name : "Cédric",
                instrument : ["bass", "backing vocals"]
            },
            {
                name : "James Spar",
                instrument : ["vocals", "lyrics"]
            },
            {
                name : "Gus",
                instrument : ["drums"]
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
                frontCover : inHellLexArt,
                purchase : "path to shop",
                format : "cd digipack",
                available : true
            },
            {
                id : 2,
                bandId : 2,
                year : 2019,
                releaseDate : "17/04/2019",
                title : "Mes kouilles en ski",
                duration:"42 min",
                subStyle : "blackened death",
                frontCover : inHellLexArt,
                purchase : "path to shop",
                format : "cd jewel case",
                available : true
            },
            {
                id : 3,
                bandId : 2,
                year : 2018,
                releaseDate : "06/08/2018",
                title : "En levrette sur l'établi démoniaque",
                duration:"25 min",
                subStyle : "blackened death",
                frontCover : inHellLexArt,
                purchase : "path to shop",
                format : "cd jewel case",
                available : true
            },
            {
                id : 4,
                bandId : 2,
                year : 2016,
                releaseDate : "05/11/2016",
                title : "A poil dans la salle de bain sans brosse à dents",
                duration:"49 min",
                subStyle : "blackened death",
                frontCover : inHellLexArt,
                purchase : "path to shop",
                format : "cd jewel case",
                available : true
            }
        ],
        merch : [

            {
                id : 1,
                bandId : 2,
                bandName : function(){
                    return returnName(this.bandId) 
                },
                format : "t-shirt",
                description : "high quality coton, available in S,M,L,XL sizes",
                itemPicture : inHellTshirt,
                available : true
            }
        ]
    }
]