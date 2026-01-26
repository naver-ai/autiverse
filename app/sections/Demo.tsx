const animData = require('../../public/settings-anim.json')

export const Demo = () => {
    // return <div className="mt-10 rounded-xl overflow-hidden border border-4 border-orange-600/10 aspect-video">
    {/* <video className="teaser-loop" autoPlay loop muted playsInline>
                    <source src={require('../../public/aacesstalk_demo_loop.mp4')} type="video/mp4" />
                </video> */}
    // </div> 

    return <div className="mt-10 rounded-xl overflow-hidden border-orange-600/10">
        <img src={require('../../public/images/autiverse_teaser.png')} alt="Autiverse Teaser" className="w-full h-auto" />
    </div> 
}