import { returnName } from "./news";
let options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
export const shows = [
    [
      {
        id:1,
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
        id:2,
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
        event : "Mes Kouilles Fest IV",
        where : "Avenue des fils de pute de la commanderie 75001 Paris",
        country : "France",
        moreDetails : ""
      }
    ],
    [
        {
          id:1,
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
          id:2,
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
          event : "Mes Kouilles Fest IV",
          where : "Avenue des fils de pute de la commanderie",
          country : "France",
          moreDetails : ""
        }
    ]
]