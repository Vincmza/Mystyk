//LOGO // Nom du groupe + logo
//KOSMOS
import kosmosLogo from "../assets/bands/kosmos/logo/kosmos_logo.jpg"
//IN HELL
import inHellLogo from "../assets/bands/in_hell/logo/in_hell_logo.jpg"
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
        memberPicture : "",
        country : "France",
        releases : [
            //1 ALBUM FROM THE BAND
            {
                year : 2022,
                bandId : 1,
                title : "Noctis, Avem et Gloria",
                subStyle : "atmospheric black/death",
                frontCover : kosmosNoctisArt,
                purchase : "path to shop",
                format : "cd digipack",
                available : true,
                members : [
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
                        instruments : ["drums", "sound engineering"]
                    }
                ]
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
        memberPicture : "",
        country : "France",
        releases : [
            //1 ALBUM FROM THE BAND
            {
                year : 2022,
                bandId : 2,
                title : "Lex Divina Terrores",
                subStyle : "blackened death",
                frontCover : inHellLexArt,
                purchase : "path to shop",
                format : "cd",
                available : true,
                members : [
                    {
                        name : "Darkhell",
                        instrument : ["songwriting","guitars",]
                    },
                    {
                        name : "Olivier",
                        instrument : "guitars" 
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
                        instrument : "drums"
                    }
                ]
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
                itemPicture : inHellTshirt,
                available : true
            }
        ]
    }
]