import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="shadow-lg bg-gradient-to-r from-gray-400 to-gray-900 text-white py-6">
      <div className="container mx-auto text-center flex items-center justify-center h-full">
        <p>
          &copy; {new Date().getFullYear()} Atif Kamal. All rights reserved.
        </p>
        {/* Social media links */}
        {/* Contact information */}
      </div>
    </footer>
  );
};

export default Footer;
