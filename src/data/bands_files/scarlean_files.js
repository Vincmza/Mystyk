const getPath = (band,output)=>{
    return `/assets/bands/${band}/${output}/${band}_`
}

//LOGO
export const logo = () => `${getPath("scarlean", "logo")}logo.jpg`

//BANNER
export const bannerHigh = () => `${getPath("scarlean", "banner")}banner_high.jpeg`


//MUSIC
export const ghost = () => `${getPath("scarlean", "music")}ghost_cd.jpg`
export const soulmates = () => `${getPath("scarlean", "music")}soulmates_cd.jpg`