const getPath = (band,output)=>{
    return `/assets/bands/${band}/${output}/${band}_`
}

//LOGO
export const logo = () => `${getPath("notheist", "logo")}logo.jpg`

//BANNER
export const bannerHigh = () => `${getPath("notheist", "banner")}banner_high.jpg`
export const bannerMedium = () => `${getPath("notheist", "banner")}banner_medium.jpg`


//MUSIC
export const notheist = () => `${getPath("notheist", "music")}notheist_cd.jpg`