//FRONT COVER // Nom du groupe + premier mot de l'album + Art pour Artwork
import kosmosNoctisArt from "../assets/news/kosmos/kosmos_noctis_cd.jpg"
import inHellLexArt from "../assets/news/in_hell/in_hell_lex_cd.jpg"
//MERCH // Nom du groupe + nature du merch à définir avec le temps
import kosmosTshirt from "../assets/news/kosmos/kosmos_t-shirt.jpg"
//FUNCTION TO GET BAND'S NAME 
import { returnName } from "./news"

export const bands = [
    //KOSMOS
    {
        id: 1,
        name : "Kosmos",
        style : "black metal",
        biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt consectetur enim, eget venenatis justo laoreet et. Mauris aliquet egestas leo quis faucibus. Nulla fringilla lacus eget luctus fringilla. Etiam neque magna, dapibus non elit vitae, lobortis consequat est. Donec mollis cursus massa eget rutrum. Quisque sed tellus dictum, lacinia neque id, viverra arcu. Duis massa elit, euismod eget varius sit amet, porta at massa. Duis eget arcu eget lorem efficitur consequat ornare vitae ante. Duis placerat dui in tortor euismod pellentesque. Nam tincidunt ligula at felis aliquam accumsan. Nullam vitae ultrices lectus. Pellentesque tempus sollicitudin lacinia. Phasellus accumsan fringilla arcu, ut commodo ex vehicula nec. Nulla ultricies ante quis lacus bibendum maximus. Pellentesque quis elit volutpat, congue arcu eu, viverra libero.",
        bandPicture: "path",
        releases : [
            //1 ALBUM FROM THE BAND
            {
                year : 2022,
                title : "Noctis, Avem et Gloria",
                subStyle : "atmospheric black/death",
                frontCover : "path",
                purchase : "path",
                members : [
                    {
                        name : "Nekros",
                        instrument : [
                            "songwriting",
                            "guitars",
                            "bass"
                        ]
                    },
                    {
                        name : "Quantum",
                        instrument : [
                            "voices",
                            "lyrics"
                        ]
                    }
                ]
            }
        ],
        itemsToSell : [

            {
                id : 1,
                bandId : 1,
                bandName : function(){
                    return returnName(this.bandId) 
                },
                type : "music",
                format : "cd digipack",
                style : "black metal",
                itemPicture : kosmosNoctisArt,
                available : true
            },
            {
                id : 2,
                bandId : 1,
                bandName : function(){
                    return returnName(this.bandId) 
                },
                type : "merch",
                format : "t-shirt",
                style : "black metal",
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
        biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt consectetur enim, eget venenatis justo laoreet et. Mauris aliquet egestas leo quis faucibus. Nulla fringilla lacus eget luctus fringilla. Etiam neque magna, dapibus non elit vitae, lobortis consequat est. Donec mollis cursus massa eget rutrum. Quisque sed tellus dictum, lacinia neque id, viverra arcu. Duis massa elit, euismod eget varius sit amet, porta at massa. Duis eget arcu eget lorem efficitur consequat ornare vitae ante. Duis placerat dui in tortor euismod pellentesque. Nam tincidunt ligula at felis aliquam accumsan. Nullam vitae ultrices lectus. Pellentesque tempus sollicitudin lacinia. Phasellus accumsan fringilla arcu, ut commodo ex vehicula nec. Nulla ultricies ante quis lacus bibendum maximus. Pellentesque quis elit volutpat, congue arcu eu, viverra libero.",
        bandPicture: "path",
        releases : [
            //1 ALBUM FROM THE BAND
            {
                year : 2022,
                title : "Lex Divina Terrores",
                subStyle : "blackened death",
                frontCover : "path",
                purchase : "path",
                members : [
                    {
                        name : "Nekros",
                        instrument : [
                            "songwriting",
                            "guitars",
                            "bass"
                        ]
                    },
                    {
                        name : "Quantum",
                        instrument : [
                        
                            "voices",
                            "lyrics"
                        ]
                    }
                ]
            }
        ],
        itemsToSell : [

            {
                bandId : 2,
                band : "Kosmos",
                type : "music" || "merch",
                format : "cd",
                style : "black metal",
                itemPicture : "path",
                available : true
            }

        ]
    }
]