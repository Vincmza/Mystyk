const getPath = (band,output)=>{
    return `/assets/bands/${band}/${output}/${band}_`
}

//LOGO
export const logo = () => `${getPath("freitot", "logo")}logo.jpg`

//BANNER
export const bannerHigh = () => `${getPath("freitot", "banner")}banner_high.jpg`

//MUSIC
export const freitot = () => `${getPath("freitot", "music")}freitot_cd.jpg`