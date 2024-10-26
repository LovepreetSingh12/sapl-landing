import React from 'react';

import config from '../config/index.json';

const About = () => {
  const { company, about } = config;
  const { logo, name: companyName, address, phone, description } = company;
  const { socialMedia, sections, location } = about;

  return (
    <div
      id="about"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
        {/* Description Section */}
        <div className="lg:w-1/2">
          <div className="flex items-center mb-4">
            <img src={logo} alt={companyName} className="w-16 h-16" />
            <h2 className="text-2xl font-bold ml-4 text-gray-800 dark:text-gray-50">
              {companyName}
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 lg:max-w-lg">
            {description}
          </p>
        </div>

        {/* Details Section */}
        <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
          <div className="space-y-4">
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-50">
                Connect With Us:
              </h3>
              <div className="flex items-center gap-x-4 mt-2">
                <a
                  aria-label="github"
                  href={socialMedia.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-800 dark:text-white hover:text-primary"
                >
                  {/* SVG for GitHub */}
                </a>
                <a
                  aria-label="linkedin"
                  href={socialMedia.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-800 dark:text-white hover:text-primary"
                >
                  {/* SVG for LinkedIn */}
                </a>
                <a
                  aria-label="twitter"
                  href={socialMedia.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-800 dark:text-white hover:text-primary"
                >
                  {/* SVG for Twitter */}
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-50">
                Address:
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{address}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-50">
                Phone:
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{phone}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-50">
                Location:
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{location}</p>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              {sections.map((section, index) => (
                <a
                  key={`${section.name}-${index}`}
                  href={section.href}
                  className="hover:text-primary text-base cursor-pointer text-gray-800 dark:text-gray-400 dark:hover:text-white"
                >
                  {section.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
          &copy; {new Date().getFullYear()} designed by{' '}
          <a
            href="https://github.com/issaafalkattan"
            rel="nofollow"
            className="text-primary hover:underline"
          >
            Issaaf Kattan
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
