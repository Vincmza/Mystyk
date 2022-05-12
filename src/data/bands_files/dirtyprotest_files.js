const getPath = (band,output)=>{
    return `/assets/bands/${band}/${output}/${band}_`
}

//LOGO
export const logo = () => `${getPath("dirtyprotest", "logo")}logo.jpg`

//BANNER
export const bannerHigh = () => `${getPath("dirtyprotest", "banner")}banner_high.jpg`

//MUSIC
export const hellstorm = () => `${getPath("dirtyprotest", "music")}hellstorm_cd.jpg`