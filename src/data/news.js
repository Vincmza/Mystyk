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
        id : "news-4",
        bandId : "",
        event : "Signature du groupe de thrash WARFAITH !",
        isLinkAvailable : true,
        date : "20/11/2022",
        title : "Signature du groupe de thrash nancéien WARFAITH !",
        content : "L'équipe de MYSTYK PROD est heureuse de dévoiler la nouvelle signature du label. Un groupe de thrash énervé, second degré sur les bords, mais d'une qualité d'écriture qui n'est plus à démontrer, il s'agit de WARFAITH. Leur nouvel album ATOMIC HANGOVER sera disponible en début d'année 2023 via notre partenaire Season of Mist. Plus d'infos en cliquant sur le lien ci dessous. ",
        bandOrEvent : function(){
            return this.bandId !== "" ? returnName(this.bandId) : this.event
        },
        link : function(){
            if(this.isLinkAvailable === true){
                return [
                    {
                        facebook : "https://www.facebook.com/mystykprod/videos/788415598917378",
                    }
                ]
            } else if(this.isLinkAvailable === false) {
                return []
            }
        },
        image : pathToImage("news-4", "warfaith_news.jpg")
    },
    {
        id : "news-3",
        bandId : 2,
        event : "",
        isLinkAvailable : true,
        date : "30/10/2022",
        title : "Soutenez IN HELL en Belgique !",
        content : "La horde démoniaque nommée IN HELL crachera son venin sur scène en Belgique deux fois avant la fin de l'année. Ne les loupez pas. La première execution aura lieu le 04 Novembre. Plus d'infos en cliquant sur l'événement en bas.",
        bandOrEvent : function(){
            return this.bandId !== "" ? returnName(this.bandId) : this.event
        },
        link : function(){
            if(this.isLinkAvailable === true){
                return [
                    {
                        facebook : "https://facebook.com/events/s/iconoclasm-nyrak-in-hell/653359809697748/",
                    }
                ]
            } else if(this.isLinkAvailable === false) {
                return []
            }
        },
        image : pathToImage("news-3", "in_hell_asgaard_04_11_22.jpg")
    },
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