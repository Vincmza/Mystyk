const getPath = (band,output)=>{
    return `/assets/bands/${band}/${output}/${band}_`
}

//LOGO
export const logo = () => `${getPath("dislocate", "logo")}logo.jpg`
export const logoLow = () => `${getPath("dislocate", "logo")}logo_low.jpg`


//BANNER
export const bannerHigh = () => `${getPath("dislocate", "banner")}banner_high.jpg`
export const bannerLow = () => `${getPath("dislocate", "banner")}banner_low.jpg`

//MUSIC
export const behindTheScenes = () => `${getPath("dislocate", "music")}behind_cd.jpg`