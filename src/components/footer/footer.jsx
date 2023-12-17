import styling from "./footer.module.css";


const Footer = () => {
    return (
        <div className={styling.border_div}>
            <div className={styling.footer_main}>
                <div className={styling.cont}>
                    <div className={styling.avinya_txt}>AVINYA</div>
                    <div className={styling.tagline}>TECH X TAG LINE X TECH X TAG LINE</div>
                </div>
                <div className={styling.break}></div>
                <div className = {styling.cnt2}>
                    <div className={styling.follow}>Follow us on</div>
                    <div className={styling.img_cont} >
                        <div className="flex-1 flex justify-center">
                            <a href="/"><img className="h-full"  src="..//fb.png" alt="media"/></a>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <a href="/"><img className="h-full"  src="..//insta.png" alt="media"/></a>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <a href="/"><img className="h-full"  src="..//twitter.png" alt="media"/></a>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <a href="/"><img className="h-full" src="..//lkdin.png" alt="media"/></a>
                        </div>
                    </div>
                </div>
                <div className={styling.break2}></div>
                <div className={styling.cnt3}>
                    <div className={styling.email}>Email</div>
                    <div className="text-center text-[0.8rem]">nsut.devcomm@gmail.com</div>
                </div>
                <div className={styling.break3}></div>
                <div className={styling.cnt4}>
                    <div className={styling.addrs}>Address</div>
                    <div className="text-center text-[0.8rem]">NSUT Dwarka, Sector-3</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;