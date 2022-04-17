const getPath = (band,output)=>{
    return `/assets/bands/${band}/${output}/${band}_`
}

//LOGO
export const logo = ()=> `${getPath("in_hell","logo")}logo.jpg`
export const logoSmall = ()=> `${getPath("in_hell","logo")}logo_small.jpg`
//BANNER
export const banner = ()=>`${getPath("in_hell", "banner")}lex_cd.jpg`

//MUSIC
export const satanicaMundi = () => `${getPath("in_hell", "music")}satanica_cd.jpg`
export const lexDivinaTerrores = () => `${getPath("in_hell", "music")}lex_cd.jpg`
export const satanicaBundle = () => `${getPath("in_hell", "music")}satanica_bundle.jpg`

//MERCH
export const beer = () => `${getPath("in_hell", "merch")}beer_ocre.jpg`
export const bonnet = () => `${getPath("in_hell", "merch")}bonnet.jpg`
export const sweat = () => `${getPath("in_hell", "merch")}sweat_dark.jpg`
export const tShirt = () => `${getPath("in_hell", "merch")}t-shirt.jpg`

