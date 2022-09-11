import { returnName } from "./news";
let options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
export const shows = [
  {
    id:"sh1",
    bandId:2,
    bandName:function(){
        return returnName(this.bandId)
    },
    showDate : "2022 November 13",
    displayShowDate : function(){
      let date = new Date(this.showDate)
      let dateToString = date.toLocaleString("en-GB", options)
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
    event : "EXCOMMUNICATION NIGHT",
    where : "Nijverheidslaan, 3290 Diest",
    country : "BELGIUM",
    moreDetails : "https://www.facebook.com/events/1486775425127047/"
  },
  {
    id:"sh2",
    bandId:2,
    bandName:function(){
        return returnName(this.bandId)
    },
    showDate : "2022 October 15",
    displayShowDate : function(){
      let date = new Date(this.showDate)
      let dateToString = date.toLocaleString("en-GB", options)
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
    event : "MYSTYK METAL FEST 1",
    where : "113B Rue Barthélémy Delespaul, Lille 59000",
    country : "FRANCE",
    moreDetails : "https://www.facebook.com/events/655400812231781/"
  },
  {
    id:"sh3",
    bandId:3,
    bandName:function(){
        return returnName(this.bandId)
    },
    showDate : "2022 October 15",
    displayShowDate : function(){
      let date = new Date(this.showDate)
      let dateToString = date.toLocaleString("en-GB", options)
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
    event : "MYSTYK METAL FEST 1",
    where : "113B Rue Barthélémy Delespaul, Lille 59000",
    country : "FRANCE",
    moreDetails : "https://www.facebook.com/events/655400812231781/"
  }
]