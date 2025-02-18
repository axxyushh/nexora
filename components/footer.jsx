import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-4 text-center text-gray-200">
        <p className="text-l">© {new Date().getFullYear()} Nexora. All rights reserved.</p>
        <p className="mt-1 text-l">Made by Ayush Srivastava</p>
        <div className="mt-3 flex justify-center space-x-4 animate-pulse">
          <Link href="https://www.instagram.com/axxyushh/#" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-5 h-5 text-white-900 hover:text-white-700 transition" />
          </Link>
          <Link href="https://in.linkedin.com/in/ayush-srivastava-279a64287?trk=public_profile_like_view_actor-name" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 text-white-900 hover:text-white-700 transition" />
          </Link>
          <Link href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-5 h-5 text-white-900 hover:text-white-700 transition" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
