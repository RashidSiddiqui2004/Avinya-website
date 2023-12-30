import styling from "./footer.module.css";
import insta from "./insta.svg";
import linkdn from "./linkdn.svg";
import discord from "./discord.svg";
import avico from "./Avinya_Final_Name2.png"

const Footer = () => {
    return (
        <div className={styling.border_div}>
            <div className={styling.footer_main}>
                <div className={styling.cont}>
                    <div className={styling.avinya_txt}><img src={avico} className="w-[300px] mb-[5px]"/></div>
                    <div className={styling.tagline}>&nbsp;Innovation meets Technology</div>
                </div>
                <div className={styling.break}></div>
                <div className={styling.cnt2}>
                    <div className={styling.follow}>Follow us on</div>
                    <div className={styling.img_cont} >
                        {/* <div className="flex-1 flex justify-center">
                            <a href="/"><img className="h-full"  src={fb} alt="media"/></a>
                        </div> */}
                        <div className="flex-1 flex justify-center">
                            <a href="https://www.instagram.com/avinya.nsut/" target="_blank"><img className="h-full" src={insta} alt="media" /></a>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <a href="https://discord.com/invite/mxKvbKgqMG"  target="_blank"><img className="h-full grayscale-0" src={discord} alt="media" /></a>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <a href="https://www.linkedin.com/company/devcommnsut/mycompany/" target="_blank"><img className="h-full" src={linkdn} alt="media" /></a>
                        </div>
                    </div>
                </div>
                <div className={styling.break2}></div>
                <div className={styling.cnt3}>
                    <div className={styling.email}>Email</div>
                    <div className="text-center text-[0.8rem]">devcomm.international@nsut.ac.in</div>
                </div>
                <div className={styling.break3}></div>
                <div className={styling.cnt4}>
                    <div className={styling.addrs}>Address</div>
                    <div className="text-center text-[0.8rem] text-white transition-all">
                        <a href="https://maps.app.goo.gl/aunaa8B3m5fWurDA8" 
                        target="_blank" className="text-white  hover:text-blue-200">
                            NSUT Sector 3, Dwarka, New Delhi-110078
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;