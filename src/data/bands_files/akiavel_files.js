const getPath = (band,output)=>{
    return `/assets/bands/${band}/${output}/${band}_`
}

//LOGO
export const logo = () => `${getPath("akiavel", "logo")}logo.png`

//BANNER
export const bannerHigh = () => `${getPath("akiavel", "banner")}banner_high.jpg`
export const bannerMedium = () => `${getPath("akiavel", "banner")}banner_medium.jpg`

//MUSIC
export const v = () => `${getPath("akiavel", "music")}v_cd.jpg`