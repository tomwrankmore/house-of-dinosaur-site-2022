import React from "react";
import { Link } from "gatsby";

const CTA = () => (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          <span className="block">Wanna work with us?</span>
          <span className="block text-darkDinoGreen">Get in touch.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-bold font-medium rounded-md text-white bg-dinoGreen hover:bg-darkDinoGreen"
            >
              Holla!
            </Link>
          </div>
        </div>
      </div>
    </div>
)

export default CTA;