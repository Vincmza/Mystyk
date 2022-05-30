import { returnName } from "./news";
let options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
export const shows = [
  
  {
    id:"sh1",
    bandId:2,
    bandName:function(){
        return returnName(this.bandId)
    },
    showDate : "2022 April 22",
    displayShowDate : function(){
      let date = new Date(this.showDate)
      let dateToString = date.toLocaleString("fr-FR", options)
      return dateToString
    },
    isAvailable : function (){
      if(Date.parse(this.showDate) >= Date.now()){
        return true
      }
      else{
        return false
      }
    },
    event : "Ladlo Fest",
    where : "14 rue lamartine 26500 Bourg-lès-Valence",
    country : "France",
    moreDetails : "https://www.facebook.com/events/550061755984143/?acontext=%7B%22event_action_history%22%3A[%7B%22mechanism%22%3A%22search_results%22%2C%22surface%22%3A%22search%22%7D]%2C%22ref_notif_type%22%3Anull%7D"
  },
  {
    id:"sh2",
    bandId:2,
    bandName:function(){
        return returnName(this.bandId)
    },
    showDate : "2022 June 14",
    displayShowDate : function(){
      let date = new Date(this.showDate)
      let dateToString = date.toLocaleString("fr-FR", options)
      return dateToString
    },
    isAvailable : function (){
      if(Date.parse(this.showDate) >= Date.now()){
        return true
      }
      else{
        return false
      }
    },
    event : "Destroy Life Fest IV",
    where : "Avenue des déportés 75001 Paris",
    country : "France",
    moreDetails : ""
  },
  {
    id:"sh3",
    bandId:1,
    bandName:function(){
        return returnName(this.bandId)
    },
    showDate : "2022 April 22",
    displayShowDate : function(){
      let date = new Date(this.showDate)
      let dateToString = date.toLocaleString("fr-FR", options)
      return dateToString
    },
    isAvailable : function (){
      if(Date.parse(this.showDate) >= Date.now()){
        return true
      }
      else{
        return false
      }
    },
    event : "Ladlo Fest",
    where : "14 rue lamartine",
    country : "France",
    moreDetails : ""
  },
  {
    id:"sh4",
    bandId:1,
    bandName:function(){
        return returnName(this.bandId)
    },
    showDate : "2022 May 14",
    displayShowDate : function(){
      let date = new Date(this.showDate)
      let dateToString = date.toLocaleString("fr-FR", options)
      return dateToString
    },
    isAvailable : function (){
      if(Date.parse(this.showDate) >= Date.now()){
        return true
      }
      else{
        return false
      }
    },
    event : "Destroy Life Fest IV",
    where : "Avenue des déporté 75001 Paris",
    country : "France",
    moreDetails : ""
  },
  {
    id:"sh5",
    bandId:9,
    bandName:function(){
        return returnName(this.bandId)
    },
    showDate : "2022 Jul 20",
    displayShowDate : function(){
      let date = new Date(this.showDate)
      let dateToString = date.toLocaleString("fr-FR", options)
      return dateToString
    },
    isAvailable : function (){
      if(Date.parse(this.showDate) >= Date.now()){
        return true
      }
      else{
        return false
      }
    },
    event : "Doubi Gore Fest 17eme edition",
    where : "Place des fauchés 14400 Marseille",
    country : "France",
    moreDetails : "https://www.youtube.com/watch?v=0ym0cc5LeG0"
  },
  {
    id:"sh6",
    bandId:9,
    bandName:function(){
        return returnName(this.bandId)
    },
    showDate : "2022 Jul 24",
    displayShowDate : function(){
      let date = new Date(this.showDate)
      let dateToString = date.toLocaleString("fr-FR", options)
      return dateToString
    },
    isAvailable : function (){
      if(Date.parse(this.showDate) >= Date.now()){
        return true
      }
      else{
        return false
      }
    },
    event : "Fabrice le fisteur Fest 6eme edition",
    where : "Mes K sur ton front 75001 Rouen",
    country : "France",
    moreDetails : "https://www.youtube.com/watch?v=0ym0cc5LeG0"
  },
  {
    id:"sh7",
    bandId:9,
    bandName:function(){
        return returnName(this.bandId)
    },
    showDate : "2022 Feb 17",
    displayShowDate : function(){
      let date = new Date(this.showDate)
      let dateToString = date.toLocaleString("fr-FR", options)
      return dateToString
    },
    isAvailable : function (){
      if(Date.parse(this.showDate) >= Date.now()){
        return true
      }
      else{
        return false
      }
    },
    event : "Gore pussy fest 4",
    where : "Salle des fêtes Clermont-Ferrand",
    country : "France",
    moreDetails : "https://www.youtube.com/watch?v=0ym0cc5LeG0"
  }
]