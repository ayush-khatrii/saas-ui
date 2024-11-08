import { FaXTwitter } from "react-icons/fa6";
import { BsDiscord, BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";
import { IoIosCodeWorking } from "react-icons/io"
import { TbMailFilled } from "react-icons/tb";



const footerData = {
  logo: "Codex",
  description: "Your AI Partner in Every Line of Code.",
  sections: [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
        { name: "Press", href: "/press" },
      ]
    },
    {
      title: "Product",
      links: [
        { name: "Features", href: "/features" },
        { name: "Pricing", href: "/pricing" },
        { name: "Integrations", href: "/integrations" },
        { name: "API Documentation", href: "/docs/api" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center", href: "/help-center" },
        { name: "Community", href: "/community" },
        { name: "Guides & Tutorials", href: "/guides" },
        { name: "Case Studies", href: "/case-studies" },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Support", href: "/contact-support" },
        { name: "FAQs", href: "/faqs" },
        { name: "System Status", href: "/system-status" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms" },
      ]
    }
  ],
  socialMedia: [
    { name: <FaXTwitter size={20} />, href: "" },
    { name: <BsLinkedin size={20} />, href: "" },
    { name: <BsGithub size={20} />, href: "" },
    { name: <TbMailFilled size={20} />, href: "" },
    { name: <BsDiscord size={20} />, href: "" },
    { name: <BsYoutube size={20} />, href: "" }
  ],
  copyright: "© 2024 Codex. All rights reserved."
};


const Footer = () => {
  return (
    <footer className="max-w-7xl h-[30rem] mx-auto text-foreground bg-background-900 body-font">
      <div className="container px-5 py-24 mx-auto flex items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="">
          <a className="flex title-font font-bold items-start justify-start text-rose-700">
            <span className="text-3xl">{footerData.logo}</span>
          </a>
          <p className="mt-2 text-sm text-zinc-500">{footerData.description}</p>
          <span className="flex justify-start items-start gap-5 mt-4">
            {footerData.socialMedia.map((social, index) => (
              <a key={index} href={""} className="hover:text-rose-700 transition duration-200 ease-out" target="_blank" rel="noopener noreferrer">
                {social.name}
              </a>
            ))}
          </span>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 text-left">
          {footerData.sections.map((section) => (
            <div key={section.title} className="lg:w-1/4 w-1/2 px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">{section.title}</h2>
              <nav className="list-none font-light text-sm  mb-10 cursor-pointer">
                {section.links.map((link) => (
                  <li key={link.name} className="mt-2 hover:underline">
                    <a href={link.href} className="text-zinc-400 hover:text-white">
                      {link.name}
                    </a>
                  </li>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-background-800 border-t flex items-center bg-opacity-75">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-zinc-400 text-sm text-center sm:text-left">
            {footerData.copyright}
            Designed and Developed by <span className="underline text-rose-800 ml-1">Ayush Khatri</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer