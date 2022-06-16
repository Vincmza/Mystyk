const getPath = (band,output)=>{
    return `/assets/bands/${band}/${output}/${band}_`
}
const band = "blight_mass"
//LOGO
export const logo = () => `${getPath(band, "logo")}logo.png`

//BANNER
export const bannerHigh = () => `${getPath(band, "banner")}banner_high.jpg`
export const bannerMedium = () => `${getPath(band, "banner")}banner_medium.jpg`

//MUSIC
export const harbinger = () => `${getPath(band, "music")}harbinger_cd.jpg`