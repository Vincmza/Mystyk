const getPath = (band,output)=>{
    return `/assets/bands/${band}/${output}/${band}_`
}

//LOGO
export const logo = () => `${getPath("boost", "logo")}logo.jpg`

//BANNER
export const bannerHigh = () => `${getPath("boost", "banner")}banner_high.jpg`
export const bannerMedium = () => `${getPath("boost", "banner")}banner_medium.jpg`

//MUSIC
export const reboot = () => `${getPath("boost", "music")}reboot_cd.jpg`