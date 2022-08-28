const getPath = (band,output)=>{
    return `/assets/bands/${band}/${output}/${band}_`
}

//LOGO
export const logo = ()=> `${getPath("kozh_dall","logo")}logo_high.jpg`

//BANNER
export const bannerHigh = ()=>`${getPath("kozh_dall", "banner")}banner_high.jpg`
export const bannerMedium = ()=>`${getPath("kozh_dall", "banner")}banner_medium.jpg`
export const bannerLow = ()=>`${getPath("kozh_dall", "banner")}banner_low.jpg`


//MUSIC
export const deaf = () => `${getPath("kozh_dall", "music")}deaf_cd.jpg`