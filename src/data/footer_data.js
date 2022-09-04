const linkToWebSite = [
    {
        webSite : 'https://www.season-of-mist.com/', 
        alt: "Logo du label et distributeur Season of Mist", 
        logo:"/assets/partners_logo/season_logo.png" 
    }, 
    {
        webSite : 'https://www.sppf.com/', 
        alt: "Logo de la SPPF", 
        logo:"/assets/partners_logo/sppf_logo.png"
    }
]

export const returnPartnerLogo = ()=>{
    return linkToWebSite.map(elem =>(
        <div 
        className='footWrapper__partners__container__logoContainer'
        key={elem}
        >
            <a 
            title='go to season of mist website' 
            href={elem.webSite}
            target="_blank" 
            rel="noreferrer"
            >
                <img 
                src={elem.logo}
                alt={elem.alt}
                />
            </a>
        </div>
    ))

}