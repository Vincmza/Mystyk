const getPath = (band,output)=>{
    return `../../assets/bands/${band}/${output}/${band}_`
}

//LOGO
export const logo = () => `${getPath("kosmos", "logo")}logo.jpg`
//BANNER
export const banner = () => `${getPath("kosmos", "banner")}noctis_cd.jpg`
// //MUSIC
export const noctisAvemEtGloria = () => `${getPath("kosmos", "music")}noctis_cd.jpg`
export const envol = () => `${getPath("kosmos", "music")}envol_cd.jpg`
// //MERCH
export const tShirt = () => `${getPath("kosmos", "merch")}t-shirt.jpg`
export const glass = () => `${getPath("kosmos", "merch")}noctis_cd.jpg`
