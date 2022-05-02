const getPath = (band,output)=>{
    return `/assets/bands/${band}/${output}/${band}_`
}

//LOGO
export const logo = () => `${getPath("praim_faya", "logo")}logo.png`

//BANNER
export const bannerHigh = () => `${getPath("praim_faya", "banner")}banner_high.jpg`
export const bannerMedium = () => `${getPath("praim_faya", "banner")}banner_medium.jpg`
export const bannerLow = () => `${getPath("praim_faya", "banner")}banner_low.jpg`

// //MUSIC
export const native = () => `${getPath("praim_faya", "music")}native_cd.jpg`