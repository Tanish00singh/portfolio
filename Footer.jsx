import React from 'react';
import { profile } from '../mock';
import { Globe } from 'lucide-react';

const Footer = () => (
  <footer className="relative py-10 px-6 border-t border-purple-900/30 mt-10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-gray-400 text-sm">
        © {new Date().getFullYear()} {profile.firstName} {profile.lastName}. All Rights Reserved.
      </div>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-purple-900/40 bg-[#0a0717] text-sm text-gray-300">
        <Globe size={14} className="text-purple-300" /> English
      </div>
    </div>
  </footer>
);

export default Footer;
