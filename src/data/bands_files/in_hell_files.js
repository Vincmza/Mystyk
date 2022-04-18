const getPath = (band,output)=>{
    return `/assets/bands/${band}/${output}/${band}_`
}

//LOGO
export const logo = ()=> `${getPath("in_hell","logo")}logo.jpg`
export const logoLow = ()=> `${getPath("in_hell","logo")}logo_low.jpg`
//BANNER
export const bannerHigh = ()=>`${getPath("in_hell", "banner")}banner_high.jpg`
export const bannerMedium = ()=>`${getPath("in_hell", "banner")}banner_medium.jpg`
export const bannerLow = ()=>`${getPath("in_hell", "banner")}banner_low.jpg`

//MUSIC
export const satanicaMundi = () => `${getPath("in_hell", "music")}satanica_cd.jpg`
export const lexDivinaTerrores = () => `${getPath("in_hell", "music")}lex_cd.jpg`
export const satanicaBundle = () => `${getPath("in_hell", "music")}satanica_bundle.jpg`

//MERCH
export const beer = () => `${getPath("in_hell", "merch")}beer_ocre.jpg`
export const bonnet = () => `${getPath("in_hell", "merch")}bonnet.jpg`
export const sweat = () => `${getPath("in_hell", "merch")}sweat_dark.jpg`
export const tShirt = () => `${getPath("in_hell", "merch")}t-shirt.jpg`

