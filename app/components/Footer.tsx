import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
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
