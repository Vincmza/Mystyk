//ARRAY CONTAINING ALL BANDS
import { bands } from "./bands"
import * as kosmos from "./bands_files/kosmos_files.js"

//COMPARE BANDID AND ID KEY IN BANDS ARRAY TO RETURN RIGHT BAND'S NAME
export const returnName = (bandId)=>{
    return bands.filter((elem)=>elem.id === bandId)[0].name
}
export const news = [
    {
        id : 1,
        bandId : 1,
        isMusicAvailable : true,
        listen : function(){
            if(this.isMusicAvailable === true){
                return [{seasonShop : "https://shop.season-of-mist.com/kosmos-noctis-avem-et-gloria-cd-digipak"}]
            } else if(this.isMusicAvailable === false) {
                return []
            }
        },
        date : "02/05/2022",
        title : "Nouvel album Noctis, Avem et Gloria",
        content : "Nouvel album désormais disponible en version digipack auprès de notre partenaire Season of Mist ! Artwork réalisé par l'excellent Macchabée Artworks !",
        bandName : function(){
            return returnName(this.bandId)
        },
        image : kosmos.noctisAvemEtGloria(),
    },
]