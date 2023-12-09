import styling from "./rect.module.css";


const Footer = () => {
    return (
        <>
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
                            <img className="h-full"  src="../public/fb.png" alt="media"/>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <img className="h-full"  src="../public/insta.png" alt="media"/>
                            </div>
                        <div className="flex-1 flex justify-center">
                            <img className="h-full"  src="../public/twitter.png" alt="media" />
                        </div>
                        <div className="flex-1 flex justify-center">
                            <img className="h-full" src="../public/lkdin.png" alt="media"/>
                        </div>
                    </div>
                </div>
                <div className={styling.break2}></div>
                <div className={styling.cnt3}>
                    <div className={styling.email}>Email</div>
                    <div className="text-center text-[0.8rem]">Email@gmail.com</div>
                </div>
                <div className={styling.cnt4}>
                    <div className={styling.addrs}>Address</div>
                    <div className="text-center text-[0.8rem]">NSUT Dwarka, Sector-3</div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Footer;