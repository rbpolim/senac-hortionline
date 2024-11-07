// TODO: verify if the icons are correct
import { Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="flex-shrink-0 py-8">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center xl:flex xl:items-center xl:justify-between xl:text-left">
          <div className="flex flex-row items-center justify-center">
            {/* <Logo /> */}
            <p className="text-sm ml-3 xl:mt-0">
              Copyright © 2024 Hortionline
            </p>
          </div>
          <div className="items-center mt-8 xl:mt-0 xl:flex xl:justify-end xl:space-x-8">
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 xl:justify-end">
              <li>
                <a
                  href="#"
                  title=""
                  className="text-sm transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {" "}
                  About{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="text-sm transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {" "}
                  Services{" "}
                </a>
              </li>
            </ul>

            <div className="w-full h-px mt-8 mb-5 xl:w-px xl:m-0 xl:h-6 bg-gray-50/20"></div>

            <ul className="flex items-center justify-center space-x-8 xl:justify-end">
              <li>
                <a
                  href="#"
                  title=""
                  className="block transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  <Twitter />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="block transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  <Instagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}