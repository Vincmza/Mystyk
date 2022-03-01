export const bands = [
    //KOSMOS
    {
        id: 1,
        name : "Kosmos",
        style : "black metal",
        biography: "blablabla",
        bandPicture: "path",
        releases : [
            //1 ALBUM FROM THE BAND
            {
                year : 2022,
                title : "noctis, avem et gloria",
                style : "black / death",
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
                bandId : 1,
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