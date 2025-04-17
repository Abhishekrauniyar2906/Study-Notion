import React from 'react';
import fullLight from '../assets/fullLight.png';
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="dark:bg-black text-white py-0">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
        {/* Company Section */}
        <div className="pb-6 sm:pr-6 ">
          <img src={fullLight} alt="Company Logo" className="mb-4 w-32 h-auto" />
          <ul>
            <p className="mb-2 font-semibold">Company</p>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">About</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Careers</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Affiliates</a></li>
            <div className="flex space-x-4 mt-4">
              <FaLinkedin className="text-2xl hover:text-blue-500" />
              <FaInstagramSquare className="text-2xl hover:text-pink-500" />
              <FaSquareXTwitter className="text-2xl hover:text-gray-500" />
              <FaFacebook className="text-2xl hover:text-blue-600" />
              <FaYoutube className="text-2xl hover:text-red-500" />
            </div>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="pb-6 sm:pr-6 ">
          <p className="mb-2 font-semibold">Resources</p>
          <ul>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Articles</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Blog</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Chart Sheet</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Code Challenges</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Docs</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Projects</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Videos</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Workspace</a></li>
            <p className="mt-4 font-semibold">Support</p>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Help Centre</a></li>
          </ul>
        </div>

        {/* Plans Section */}
        <div className="pb-6 md:pr-6 border-b md:border-b-0 md:border-r border-gray-700">
          <p className="mb-2 font-semibold">Plans</p>
          <ul>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Paid Membership</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">For Students</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Business Solutions</a></li>
          </ul>
          <p className="mt-4 font-semibold">Community</p>
          <ul>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Forums</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Chapters</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Events</a></li>
          </ul>
        </div>

        {/* Subjects Section */}
        <div className="pb-6 lg:pr-6 border-b sm:border-b-0 border-gray-700">
          <p className="mb-2 font-semibold ">Subjects</p>
          <ul className="grid grid-cols-2 gap-y-1 sm:block">
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">AI</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Cloud Computing</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Computer Science</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Cybersecurity</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Data Analytics</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Data Science</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Data Visualization</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Developer Tools</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">DevOps</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Game Development</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">IT</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Machine Learning</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Web Development</a></li>
          </ul>
        </div>

        {/* Languages Section */}
        <div className="pb-6 lg:pr-6 border-b sm:border-b-0 border-gray-700">
          <p className="mb-2 font-semibold ">Languages</p>
          <ul className="grid grid-cols-2 gap-y-1 sm:block">
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Bash</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">C++</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Java</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Python</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">C</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">JavaScript</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Ruby</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">C#</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">SQL</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Swift</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">R</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Kotlin</a></li>
          </ul>
        </div>

        {/* Career Building Section */}
        <div className="pb-6 ">
          <p className="mb-2 font-semibold">Career Building</p>
          <ul>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Career Path</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Interview Prep</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Career Services</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Professional Certification</a></li>
            <li><a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e] block py-1">Full Catalog</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 py-4 mt-0 md:mt-12 flex 
      flex-col md:flex-row justify-center md:justify-between items-center text-sm">
        <div className="flex flex-row md:flex-row space-x-2 md:space-x-4 mb-2 md:mb-0 items-center md:items-start">
          <a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e]">Privacy Policy</a>
          <a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e]">Cookie Policy</a>
          <a href="/notfound" className="hover:text-gray-400 text-sm text-[#a8a29e]">Terms & Conditions</a>
        </div>
        <div className="text-[#a8a29e] font-bold">© Study Notion</div>
      </div>
    </div>
  );
};

export default Footer;