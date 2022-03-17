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
        where : "14 rue lamartine",
        country : "France",
        moreDetails : "lien vers plus de détails"
      },
      {
        id:1,
        bandId:2,
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
        moreDetails : "lien vers plus de détails"
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
          moreDetails : "lien vers plus de détails"
        },
        {
          id:1,
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
          moreDetails : "lien vers plus de détails"
        }
    ]
]