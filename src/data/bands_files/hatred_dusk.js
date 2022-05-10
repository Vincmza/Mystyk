const getPath = (band,output)=>{
    return `/assets/bands/${band}/${output}/${band}_`
}

//LOGO
export const logo = () => `${getPath("hatred_dusk", "logo")}logo.jpg`

//BANNER
export const bannerHigh = () => `${getPath("hatred_dusk", "banner")}banner_high.jpg`
export const bannerMedium = () => `${getPath("hatred_dusk", "banner")}banner_medium.jpg`

//MUSIC
export const hatredDusk = () => `${getPath("hatred_dusk", "music")}hd_cd.jpg`