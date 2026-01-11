import Head from "next/head"
import PianoContainer from "@/components/Piano/PianoContainer"
import HeroContainer from "@/components/Hero/HeroContainer"
import dynamic from "next/dynamic"
import ContactContainer from "@/components/Contact/ContactContainer"
import AboutMeContainer from "@/components/AboutMe/AboutMeContainer"

const SidebarContainer = dynamic(()=> import("@/components/Sidebar/SidebarContainer"), {ssr:false})

export default function Home({role}) {
  

  return (
    <>
      <Head>
        <title>Alejandro Pachas</title>
        <link rel="icon" href="/web-logo.svg"/>
        <meta name="description" content="Software Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alejandropch.com"/>
        <meta property="og:title" content="Alejandro Pachas" />
        <meta
          property="og:description"
          content="Experienced in taking fullstack applications from scratch to
            production. I've worked on e-commerce platforms, built CI/CD pipilines, handled SysAdmin and DevOps automation, and Discord bots!"
        />
        <meta property="og:image" content="https://alejandropch.com/alejandro.png" />

      </Head>
      <main>
        <SidebarContainer />
        <PianoContainer />
        <HeroContainer />
        <div className="block relative w-full">
        <div  style={{background:"linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(255,255,255,0) 100%"}}  className="absolute bg-white w-screen h-16 z-30 mt-[-4rem] top-0  " ></div>
        </div>
        <AboutMeContainer />
        <ContactContainer />
      </main>
    </>
  )
}
