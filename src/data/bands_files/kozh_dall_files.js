const getPath = (band,output)=>{
    return `/assets/bands/${band}/${output}/${band}_`
}

//LOGO
export const logo = ()=> `${getPath("kozh_dall","logo")}logo.png`

//BANNER
export const bannerHigh = ()=>`${getPath("kozh_dall", "banner")}banner_high.jpg`

//MUSIC
export const deaf = () => `${getPath("kozh_dall", "music")}deaf_cd.jpg`