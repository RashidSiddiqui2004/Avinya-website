
import React from 'react'
import './styles.css';
import './SponsorsStyles.css'
import SponsorCard from './SponsorCard';
import PastSposorsCard from './PastSposorsCard';
import SpecialLogos from './SpecialLogos';

function Sponsors() {

  const platinumPartners = [
    {
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789889/InterviewBuddyLogo_yxroqd.jpg",
      logoName: "InterviewBuddy"
    },
    {
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789889/InterviewBuddyLogo_yxroqd.jpg",
      logoName: "InterviewBuddy"
    },
  ]

  const educationPartners = [
    {
      sponsor: "Devfolio",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789646/devfolioLogo_vv4hoh.png"
    },
    {
      sponsor: "polygon",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789909/polygonLogo_d626ox.png"
    },
    {
      sponsor: "Celo",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789874/celo2_ulmzv8.png"
    }
  ]

  const goldPartners = [
    {
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789646/devfolioLogo_vv4hoh.png",
      logoName: "DEVFOLIO"
    },
    {
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789728/polygonLogo_alhfzq.png",
      logoName: "POLYGON",
    },
  ]

  const silverPartners = [
    {
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789817/replit_a9muwl.png",
      logoName: "REPLIT"
    },
    {
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789817/replit_a9muwl.png",
      logoName: "REPLIT"
    },
  ]

  const mediaPartners = [

  ]

  const otherSponsors = [
    {
      sponsor: "filecoin",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789878/filecoin_u5jmoz.png"
    },
    {
      sponsor: "Tezos",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789930/tezos_drfyov.png"
    },
    {
      sponsor: "Celo",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789874/celo2_ulmzv8.png"
    },
    {
      sponsor: "filecoin",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789878/filecoin_u5jmoz.png"
    },
    {
      sponsor: "Tezos",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789930/tezos_drfyov.png"
    },
    {
      sponsor: "Celo",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789874/celo2_ulmzv8.png"
    },

    {
      sponsor: "filecoin",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789878/filecoin_u5jmoz.png"
    },
    {
      sponsor: "Tezos",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789930/tezos_drfyov.png"
    },
    {
      sponsor: "Celo",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789874/celo2_ulmzv8.png"
    },
  ]

  const pastSponsorsRows12 = [
    {
      sponsor: "Devfolio",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789875/devfolio_tgcoza.png"
    },
    {
      sponsor: "polygon",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789891/polygon_tacrud.webp"
    },
    {
      sponsor: "filecoin",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789878/filecoin_u5jmoz.png"
    },
    {
      sponsor: "Tezos",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789930/tezos_drfyov.png"
    },
    {
      sponsor: "Celo",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789874/celo2_ulmzv8.png"
    },
    {
      sponsor: "Prayag",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789927/python_vavmpx.png"
    },
    {
      sponsor: "DigitalOcean",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789875/digitalocean_vkrye6.png"
    },
    {
      sponsor: "Jumper",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789888/jumper_bt8rh0.png"
    },
    {
      sponsor: "GitLab",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789887/gitlab_dpcyn1.png"
    },
    {
      sponsor: "DLF",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789876/dlf_bh3uhi.png"
    },
    {
      sponsor: "Heiphen",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789888/heiphen_y427qq.jpg"
    },
    {
      sponsor: "Zulip",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789931/zulip_dyhs3o.png"
    },
  ]

  const pastSponsorsRows34 = [
    {
      sponsor: "JET BRAINS",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789888/jetbrains_gvfpcq.png"
    },
    {
      sponsor: "StartuPoint",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789928/StartuPoint_zl1wnr.jpg"
    },
    {
      sponsor: "ShopClues",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789928/ShopClues_gylptv.jpg"
    },
    {
      sponsor: "Wolfram Language",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789931/WolframLanguage_jazeag.png"
    },
    {
      sponsor: "doselect",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789876/doselect_n6cszx.jpg"
    },
    {
      sponsor: "SendGrid",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789927/SendGrid_po2sm1.jpg"
    },
    {
      sponsor: "Jio",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789889/Jio_poys9h.jpg"
    },
    {
      sponsor: "Synergy Enterprises",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789929/SyneryEnterprises_jrfrub.png"
    },
    {
      sponsor: "CISCO",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789875/Cisco_rrgtps.jpg"
    },
    {
      sponsor: "acciojob",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789874/acciojob_wt3r1f.jpg"
    },

  ]

  // ek empty hai
  const pastSponsorsRows56 = [
    {
      sponsor: "CM",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789875/CM_xultph.jpg"
    },

    {
      sponsor: "CRON",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789875/CRON_h3a9ug.jpg"
    },
    // {
    //   sponsor: "DEV",
    //   logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789875/dev_hogwkl.png"
    // },
    {
      sponsor: "echoAR",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789877/echoAR_tdwuwl.png"
    },
    {
      sponsor: "Github",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789887/Github_shscjb.png"
    },
    {
      sponsor: "Rosenfeld",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789927/Rosenfeld_u5mgkb.png"
    },
    {
      sponsor: "MSi",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789890/msi_n7rf5w.png"
    },
    {
      sponsor: "Matic",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789888/Matic_vuwi4q.png"
    },
    {
      sponsor: "ONGC",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789891/ongc_vhslqc.jpg"
    },
    {
      sponsor: "Matic",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789888/Matic_vuwi4q.png"
    },
    {
      sponsor: "ONGC",
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789891/ongc_vhslqc.jpg"
    },
    // {
    //   sponsor: "npm",
    //   logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789890/npm_faeczq.png"
    // },
  ]

  const specialLogos1 = [
    {
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789889/microsoft_rstmej.jpg"
    },
    {
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789888/GiveMyCertificate_xccxua.png"
    },
    {
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789927/python_vavmpx.png"
    },
    {
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789874/avhikalpana_jl1y8w.png"
    },
    {
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789888/hackerearth_b6xk8x.png"
    },
    {
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789888/Ifoodyou_bnz6m8.jpg"
    },
    {
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789875/CRON_h3a9ug.jpg"
    },
    {
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789874/bwdisrupt_nxvdur.png"
    },
    {
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789877/elearnmarkets_swvo9l.png"
    },
    {
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789877/explara_y4ugqm.png"
    },
    {
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789877/fastly_x5uxqv.png"
    },
    {
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789878/geeksforgeeks_dh7yyd.png"
    },
  ]

  const specialLogos2 = [
    {
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789887/gyandhan_vh4gda.png"
    },
    {
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789889/InterviewBuddyLogo_yxroqd.jpg"
    },
    {
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789889/mozilla_be6xju.png"
    },
    {
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789888/InterviewCake_gnhgtb.png"
    },
    {
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789890/placement-saga_thnjxz.png"
    },
    {
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789928/stickermule_ebjqu3.png"
    },
    {
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789930/WolframAlpha_uvjqtt.jpg"
    },
    {
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789930/wwc_tzqhi8.png"
    },
    {
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789928/sita_mnnhno.jpg"
    },
    {
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789930/taskade_ntjjes.png"
    },
    {
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789928/restdb_ltnrbf.jpg"
    },
    {
      logoSource: "https://res.cloudinary.com/drlkkozug/image/upload/v1703789875/CodingMinutes_w6lg3k.png"
    },

  ]

  return (

    <div className='overflow-hidden overflow-x-hidden mb-16' id='sponsors'>

      <h1 className='text-2xl sm:text-5xl pt-20 text-white
       pb-2 headerAkira font-bold tracking-wide leading-tight p-8 shadow-md
       linearGradientSposnsors transition-all text-center
       flex justify-center'
      >EVENT PARTNERS</h1>

      {/* Platinum Partners */}
      <div className='mb-20'>
        <h2 className='text-lg sm:text-4xl text-white mt-12 mb-12
       pb-2 headerAkira font-bold tracking-wide leading-tight p-8 shadow-md
       linearGradientSposnsors transition-all text-center
       flex justify-center'>PLATINUM PARTNERS</h2>


        <div className='grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-8 
        items-center justify-center hidden md:flex lg:ml-10'>

          {platinumPartners.map((item, index) => (
            <SpecialLogos key={index} logosrc={item.logoSource} logoName={item.logoName} />
          ))}

        </div>

        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4
        items-center ml-[10%] sm:ml-[20%] md:ml-[18%] lg:ml-20 md:hidden'>

          {platinumPartners.map((item, index) => (
            <SpecialLogos key={index} logosrc={item.logoSource} logoName={item.logoName} />
          ))}

        </div>


      </div>


      {/* Gold Partners */}

      <div className='mb-20'>

        <h2 className='text-xl sm:text-4xl text-white mt-12 mb-12
       pb-2 headerAkira font-bold tracking-wide leading-tight p-8 shadow-md
       linearGradientSponsors2 transition-all text-center
       flex justify-center'>GOLD PARTNERS</h2>

        <div className='grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-14 lg:gap-8 
        items-center justify-center hidden md:flex lg:ml-10'>


          {goldPartners.map((item, index) => (
            <SpecialLogos key={index} logosrc={item.logoSource} />
          ))}

        </div>

        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4
        items-center ml-[10%] sm:ml-[20%] md:ml-[18%] lg:ml-20 md:hidden'>

          {goldPartners.map((item, index) => (
            <SpecialLogos key={index} logosrc={item.logoSource} logoName={item.logoName} />
          ))}


        </div>

      </div>

      {/* Silver Partners */}

      <div className='mb-20'>


        <h2 className='text-xl sm:text-4xl text-white mt-12 mb-12
       pb-2 headerAkira font-bold tracking-wide leading-tight p-8 shadow-md
       linearGradientSposnsors transition-all text-center
       flex justify-center'>SILVER PARTNERS</h2>

        <div className='grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-14 lg:gap-8 
        items-center justify-center hidden md:flex lg:ml-10'>
          {silverPartners.map((item, index) => (
            <SpecialLogos key={index} logosrc={item.logoSource} />
          ))}

        </div>

        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-14 lg:gap-8 
        items-center ml-[10%] sm:ml-[20%] md:ml-[18%] lg:ml-20 md:hidden'>

          {silverPartners.map((item, index) => (
            <SpecialLogos key={index} logosrc={item.logoSource} logoName={item.logoName} />
          ))}

        </div>

      </div>


      {/* Media Partners */}

      <div className='mb-20'>
        <h2 className='
        text-xl sm:text-4xl text-white mt-12 mb-16
        pb-2 headerAkira font-bold tracking-wide leading-tight p-8 shadow-md
        linearGradientSposnsors transition-all text-center
        flex justify-center'>MEDIA PARTNERS</h2>

        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-8 
        items-center ml-[10%] sm:ml-[20%] md:ml-[18%] lg:ml-20'>

          {otherSponsors.map((item, index) => (
            <SponsorCard key={index} sponsorName={item.sponsor} logosrc={item.logoSource} />
          ))}

        </div>

      </div>


      {/* Past Sponsors */}

      <div className='pt-32'>

        <div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8
        items-center ml-[15%] sm:ml-[20%] md:ml-[18%] lg:ml-8'>

          {pastSponsorsRows12.map((item, index) => (
            (index < 6) ? (
              <div key={index} className='float-from-left logo-animation'>
                <PastSposorsCard sponsorName={item.sponsor} logosrc={item.logoSource} />
              </div>
            ) : (
              <div key={index} className='float-from-right logo-animation'>
                <PastSposorsCard sponsorName={item.sponsor} logosrc={item.logoSource} />
              </div>
            )
          ))}

          {pastSponsorsRows34.map((item, index) => (
            (index < 6) ? (
              <div key={index} className='float-from-left logo-animation'>
                <PastSposorsCard sponsorName={item.sponsor} logosrc={item.logoSource} />
              </div>
            ) : (
              <div key={index} className='float-from-right logo-animation'>
                <PastSposorsCard sponsorName={item.sponsor} logosrc={item.logoSource} />
              </div>
            )
          ))}

          <div className='float-from-right logo-animation'>
            <PastSposorsCard sponsorName='CoverDoodle' logosrc={'https://res.cloudinary.com/drlkkozug/image/upload/v1703789875/coverdoodle_tf861s.png'} paddingRight={10} />
          </div>

          <div className='float-from-right logo-animation'>
            <SpecialLogos logosrc={'https://res.cloudinary.com/drlkkozug/image/upload/v1703789876/codingblocks_hcggnd.png'} marginRight={2} logoName="CODING BLOCKS" />
          </div>


          <h2 className='bg-blue-600 headerAkira w-fit ml-8 md:ml-[25%] md:my-3 lg:my-1 lg:ml-[30%]
          xl:ml-[35%] rounded-xl lg:mx-36 text-center px-5 md:px-5 lg:px-8 font-bold font py-6
           text-md md:text-2xl items-center col-span-2 md:col-span-2 z-10 lg:absolute
           '>
            PAST SPONSORS
          </h2>

          {pastSponsorsRows56.map((item, index) => (
            (index < 6) ? (
              <div key={index} className='float-from-left logo-animation'>
                <PastSposorsCard sponsorName={item.sponsor} logosrc={item.logoSource} />
              </div>
            ) : (
              <div key={index} className='float-from-right logo-animation'>
                <PastSposorsCard sponsorName={item.sponsor} logosrc={item.logoSource} />
              </div>
            )
          ))}

          <div className='float-from-right logo-animation'>
            <SpecialLogos logosrc="https://res.cloudinary.com/drlkkozug/image/upload/v1703789890/npm_faeczq.png" logoName="NPM" />
          </div>

          
          <div className='float-from-right logo-animation'>
            <SpecialLogos logosrc="https://res.cloudinary.com/drlkkozug/image/upload/v1703789875/dev_hogwkl.png" logoName="NPM" />
          </div>
         

          {specialLogos1.map((item, index) => (
            (index < 6) ? (
              <div key={index} className='float-from-left logo-animation'>
                <SpecialLogos logosrc={item.logoSource} logoName={item.logoSource} />
              </div>
            ) : (
              <div key={index} className='float-from-right logo-animation'>
                <SpecialLogos logosrc={item.logoSource} logoName={item.logoSource} />
              </div>
            )
          ))}

          {specialLogos2.map((item, index) => (
            (index < 6) ? (
              <div key={index} className='float-from-left logo-animation'>
                <SpecialLogos logosrc={item.logoSource} logoName={item.logoSource} />
              </div>
            ) : (
              <div key={index} className='float-from-right logo-animation'>
                <SpecialLogos logosrc={item.logoSource} logoName={item.logoSource} />
              </div>
            )
          ))}

        </div>

      </div>

    </div>
  )
}

export default Sponsors