const getPath = (band,output)=>{
    return `/assets/bands/${band}/${output}/${band}_`
}

//LOGO
export const logo = () => `${getPath("equinox", "logo")}logo.png`

//BANNER
export const bannerHigh = () => `${getPath("equinox", "banner")}banner_high.jpg`

//MUSIC
export const cry = () => `${getPath("equinox", "music")}cry_cd.jpg`