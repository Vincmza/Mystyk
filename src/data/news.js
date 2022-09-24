//ARRAY CONTAINING ALL BANDS
import { bands } from "./bands"
//NEWS-1 - BAND KOSMOS
import * as kosmos from "./bands_files/kosmos_files.js"


//COMPARE BANDID AND ID KEY IN BANDS ARRAY TO RETURN RIGHT BAND'S NAME
export const returnName = (bandId)=>{
    return bands.filter((elem)=>elem.id === bandId)[0].name
}
const pathToImage = (news,file)=>{
    return `/assets/news/${news}/${file}`
}
export const news = [
    {
        id : "news-2",
        bandId : "",
        event : "Mystyk Metal Fest 1",
        isLinkAvailable : true,
        date : "24/09/2022",
        title : "Mystyk Metal Fest 1 annulé !",
        content : "Suite à des difficultés ne permettant pas d'aboutir à une concrétisation dans les règles d'un tel projet, Mystyk Productions se voit contraint d'annuler le festival initialement prévu pour le 15 octobre 2022. Plus d'infos sur le communiqué officiel",
        bandOrEvent : function(){
            return this.bandId !== "" ? returnName(this.bandId) : this.event
        },
        link : function(){
            if(this.isLinkAvailable === true){
                return [
                    {
                        facebook : "https://www.facebook.com/mystykprod/photos/a.143692709636832/1050318072307620/",
                    }
                ]
            } else if(this.isLinkAvailable === false) {
                return []
            }
        },
        image : pathToImage("news-2", "mystyk_metal_fest_1_cancelled.jpg")
    },
    {
        id : "news-1",
        bandId : 1,
        event : "",
        isLinkAvailable : true,
        date : "22/04/2022",
        title : "Nouvel album Noctis, Avem et Gloria",
        content : "Nouvel album désormais disponible en version digipack auprès de notre partenaire Season of Mist ! Artwork réalisé par l'excellent Macchabée Artworks !",
        bandOrEvent : function(){
            return this.bandId !== "" ? returnName(this.bandId) : this.event
        },
        link : function(){
            if(this.isLinkAvailable === true){
                return [
                    {
                        seasonShop : "https://shop.season-of-mist.com/kosmos-noctis-avem-et-gloria-cd-digipak",
                    }
                ]
            } else if(this.isLinkAvailable === false) {
                return []
            }
        },
        image : kosmos.noctisAvemEtGloria(),
    },
    
]