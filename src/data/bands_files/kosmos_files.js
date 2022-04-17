const getPath = (band,output)=>{
    return `/assets/bands/${band}/${output}/${band}_`
}

//LOGO
export const logo = () => `${getPath("kosmos", "logo")}logo_small.png`
export const logoLow = () => `${getPath("kosmos", "logo")}logo_low.png`
//BANNER
export const banner = () => `${getPath("kosmos", "banner")}noctis_cd.jpg`
// //MUSIC
export const noctisAvemEtGloria = () => `${getPath("kosmos", "music")}noctis_cd.jpg`
export const envol = () => `${getPath("kosmos", "music")}envol_cd.jpg`
// //MERCH
export const tShirt = () => `${getPath("kosmos", "merch")}t-shirt.jpg`
export const glass = () => `${getPath("kosmos", "merch")}glass.jpg`
