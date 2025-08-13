import { iconAndroid, iconDownload, iconLogo } from "@/assets/images";
import { footerLinks, socialLinks } from "@/constants";
import { useIsMobile } from "@/hooks/useIsMobile";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const isMobile = useIsMobile(680);
  const [showDownloadButton, setShowDownloadButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = 100; // pixels scrolled before showing button
      setShowDownloadButton(scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <footer className="my-4 p-4 sm:p-6 rounded-4xl bg-white">
      <div className="max-w-7xl mx-auto space-y-8 px-2 pb-10 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="mb-8">
              <img src={iconLogo} alt="" className="size-20 md:size-24 mb-5" />
              <p className="!text-dark-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci aliquid unde reprehenderit voluptatum optio, incidunt
                laboriosam tempore temporibus non repellendus!
              </p>
            </div>

            <ul className="flex gap-6">
              {socialLinks.map((social, index) => (
                <li key={index} className="size-10">
                  <a
                    href={social.href}
                    target="_blank"
                    style={{ backgroundColor: social.bgColor }}
                    className="size-full p-2.5 block hover:rounded-none transition-all duration-500 rounded-[50%]"
                  >
                    <img
                      src={social.icon}
                      alt={social.href}
                      width={40}
                      height={40}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3 xl:grid-cols-4">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h6 className="font-medium text-black text-xl">
                  {section.heading}
                </h6>

                <ul className="mt-6 space-y-4 text-sm">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <a
                        className="hover:text-primary font-normal transition-all duration-150"
                        href={link.href}
                        target={link.target || "_self"}
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-2 md:mb-4 border-t border-dark-200 pt-2">
        <marquee
          scrollamount="10"
          behavior="scroll"
          loop=""
          scrolldelay="0"
          width="100%"
          direction="left"
        >
          <span className="text-sm font-extralight">
            This game involves an element of financial risk and may be
            addictive. Please play responsibly and at your risk. For Ages 18+
            Only.
          </span>
        </marquee>
      </div>
      <div className="max-w-7xl mx-4 xl:mx-auto">
        <div className="flex items-center gap-2 justify-center text-center flex-wrap text-base text-gray font-urbanist font-normal text-black">
          <span>
            © {new Date().getFullYear()},
            <a
              href="https://ludoplayers.com"
              target="_blank"
              className="text-primary px-1"
            >
              Ludo Technologies Private Limited
            </a>
            | All Rights Reserved.
          </span>
        </div>
      </div>
      {isMobile && (
        <div
          className={`fixed left-0 w-full px-4 z-50 duration-1000 transition-all ${
            showDownloadButton
              ? "bottom-6 translate-y-0"
              : "-bottom-10 translate-y-full"
          }`}
        >
          <button className="download__btn bg-primary text-white w-full rounded-md uppercase italic px-3 py-3 text-lg font-semibold flex-center gap-2 animate-bounce">
            <img src={iconAndroid} alt="" width={26} height={26} />
            <span> Get Download Link</span>
            <img src={iconDownload} alt="" width={26} height={26} />
          </button>
        </div>
      )}
    </footer>
  );
};

export default Footer;
