import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <section className="bg-gray-400 border-t-2 border-t-black">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-wrap justify-between">
          {/* Logo and copyright */}
          <div className="w-full lg:w-3/12 mb-6 lg:mb-0">
            <div className="inline-flex items-center mb-4">
              <Logo width="100px" />
            </div>
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()}. All Rights Reserved by DevUI.
            </p>
          </div>

          {/* Links group */}
          <div className="w-full lg:w-8/12 flex flex-wrap justify-between">
            {/* Company */}
            <div className="w-1/3 mb-6 lg:mb-0">
              <h3 className="mb-4 text-xs font-semibold uppercase text-gray-500">
                Company
              </h3>
              <ul>
                <li className="mb-2">
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                    Features
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                    Pricing
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="w-1/3 mb-6 lg:mb-0">
              <h3 className="mb-4 text-xs font-semibold uppercase text-gray-500">
                Support
              </h3>
              <ul>
                <li className="mb-2">
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                    Account
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                    Help
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legals */}
            <div className="w-1/3">
              <h3 className="mb-4 text-xs font-semibold uppercase text-gray-500">
                Legals
              </h3>
              <ul>
                <li className="mb-2">
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;