import * as React from "react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="flex pt-[60px] pb-[80px] md:pb-0 bg-primary-dark text-white"
    >
      <div className="max-w-[1440px] mx-auto w-full px-[32px] md:px-[64px] lg:px-[120px]">
        <div className="mb-[20px]">
          <div className="mb-[20px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="cittic-logo"
              src="/assets/sponsors/cittic.svg"
              alt="CITTIC"
            />
            <p className="mt-[20px] text-[14px]">
              The Centre for Innovation, Technology Transfer and Industrial
              Collaboration (CITTIC), the technology business incubator of
              CUSAT, has nurtured several young startups and has supported the
              growth of technology in the student community. CITTIC was set up
              on the campus with central and state government funding to provide
              a vibrant, innovative and entrepreneurial environment for faculty
              and students to run university-linked startup companies.
            </p>
          </div>
          <hr />
        </div>
        <div className="mb-[20px]">
          <div className="flex items-start justify-between">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                <a href="tel:9072124291" style={{ textDecoration: "none" }}>
                  Sunith V.S - 9072124291
                </a>
              </p>
              <p className="copyright-text">
                <a href="tel:9188692836" style={{ textDecoration: "none" }}>
                  Ajal - 9188692836
                </a>
              </p>
              <br />
            </div>
            <div className="h-full">
              <ul className="flex items-start gap-[20px]">
                <li>
                  <a
                    className="linkedin"
                    href="https://www.linkedin.com/company/makeaton"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="h-[24px]"
                      src="/assets/icons/linkedin.svg"
                      alt="Linkedin"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="facebook"
                    href="https://instagram.com/makeaton.cusat?igshid=183k7nv268zfo"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="h-[24px]"
                      src="/assets/icons/instagram.svg"
                      alt="Instagram"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="twitter"
                    href="http://www.twitter.com/MakeaTonCusat"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="h-[24px]"
                      src="/assets/icons/twitter.svg"
                      alt="Twitter"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="copyright-text w-full text-center">
            Code of conduct CITTIC &copy; 2022
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
