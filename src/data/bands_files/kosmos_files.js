const getPath = (band,output)=>{
    return `/assets/bands/${band}/${output}/${band}_`
}

//LOGO
export const logo = () => `${getPath("kosmos", "logo")}logo.png`
export const logoLow = () => `${getPath("kosmos", "logo")}logo_low.png`

//BANNER
export const bannerHigh = () => `${getPath("kosmos", "banner")}banner_high.jpg`
export const bannerMedium = () => `${getPath("kosmos", "banner")}banner_medium.jpg`
export const bannerLow = () => `${getPath("kosmos", "banner")}banner_low.jpg`

//MUSIC
export const noctisAvemEtGloria = () => `${getPath("kosmos", "music")}noctis_cd.jpg`

