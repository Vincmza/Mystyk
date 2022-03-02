//ARRAY CONTAINING ALL BANDS
import { bands } from "./bands"
//FRONT COVER // Nom du groupe + premier mot de l'album + Art pour Artwork
import kosmosNoctisArt from "../assets/news/kosmos/kosmos_noctis_cd.jpg"
import inHellLexArt from "../assets/news/in_hell/in_hell_lex_cd.jpg"
//MERCH // Nom du groupe + nature du merch à définir avec le temps
import kosmosTshirt from "../assets/news/kosmos/kosmos_t-shirt.jpg"

//COMPARE BANDID AND ID KEY IN BANDS ARRAY TO RETURN RIGHT BAND'S NAME
export const returnName = (bandId)=>{
    return bands.filter((elem)=>elem.id === bandId)[0].name
    
}
export const news = [
    {
        id : 1,
        date : "01/03/2022",
        title : "Nouvel album Noctis, Avem et Gloria",
        content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt consectetur enim, eget venenatis justo laoreet et. Mauris aliquet egestas leo quis faucibus. Nulla fringilla lacus eget luctus fringilla. Etiam neque magna, dapibus non elit vitae, lobortis consequat est. Donec mollis cursus massa eget rutrum. Quisque sed tellus dictum, lacinia neque id, viverra arcu. Duis massa elit, euismod eget varius sit amet, porta at massa. Duis eget arcu eget lorem efficitur consequat ornare vitae ante. Duis placerat dui in tortor euismod pellentesque. Nam tincidunt ligula at felis aliquam accumsan. Nullam vitae ultrices lectus. Pellentesque tempus sollicitudin lacinia. Phasellus accumsan fringilla arcu, ut commodo ex vehicula nec. Nulla ultricies ante quis lacus bibendum maximus. Pellentesque quis elit volutpat, congue arcu eu, viverra libero.",
        bandId : 1,
        bandName : function(){
            return returnName(this.bandId)
        },
        image : kosmosNoctisArt,
    },
    {
        id : 2,
        date : "24/01/2022",
        title : "T-shirt en stock !",
        content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt consectetur enim, eget venenatis justo laoreet et. Mauris aliquet egestas leo quis faucibus. Nulla fringilla lacus eget luctus fringilla. Etiam neque magna, dapibus non elit vitae, lobortis consequat est. Donec mollis cursus massa eget rutrum. Quisque sed tellus dictum, lacinia neque id, viverra arcu. Duis massa elit, euismod eget varius sit amet, porta at massa. Duis eget arcu eget lorem efficitur consequat ornare vitae ante. Duis placerat dui in tortor euismod pellentesque. Nam tincidunt ligula at felis aliquam accumsan. Nullam vitae ultrices lectus. Pellentesque tempus sollicitudin lacinia. Phasellus accumsan fringilla arcu, ut commodo ex vehicula nec. Nulla ultricies ante quis lacus bibendum maximus. Pellentesque quis elit volutpat, congue arcu eu, viverra libero.",
        bandId : 1,
        bandName : function(){
            return returnName(this.bandId)
        },
        image : kosmosTshirt,
    },
    {
        id : 3,
        date : "21/02/2022",
        title : "Nouvel album Lex Divina Terrores",
        content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt consectetur enim, eget venenatis justo laoreet et. Mauris aliquet egestas leo quis faucibus. Nulla fringilla lacus eget luctus fringilla. Etiam neque magna, dapibus non elit vitae, lobortis consequat est. Donec mollis cursus massa eget rutrum. Quisque sed tellus dictum, lacinia neque id, viverra arcu. Duis massa elit, euismod eget varius sit amet, porta at massa. Duis eget arcu eget lorem efficitur consequat ornare vitae ante. Duis placerat dui in tortor euismod pellentesque. Nam tincidunt ligula at felis aliquam accumsan. Nullam vitae ultrices lectus. Pellentesque tempus sollicitudin lacinia. Phasellus accumsan fringilla arcu, ut commodo ex vehicula nec. Nulla ultricies ante quis lacus bibendum maximus. Pellentesque quis elit volutpat, congue arcu eu, viverra libero.",
        bandId : 2,
        bandName : function(){
            return returnName(this.bandId)
        },
        image : inHellLexArt,
    }
]