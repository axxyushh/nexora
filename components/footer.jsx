import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-4 text-center text-gray-200">
        <p className="text-sm">© {new Date().getFullYear()} Nexora. All rights reserved.</p>
        <p className="mt-1 text-lg">
          Developed by&nbsp;
          <Link href={"https://my-portfolio-seven-sand-94.vercel.app/"} target="_blank" className="hover:underline"> 
            {/* Ayush Srivastava */}
            Tanishq
          </Link>
        </p>
        <div className="mt-3 flex justify-center space-x-4">
          {/* <Link className="animate-pulse hover:animate-none" href="https://www.instagram.com/axxyushh/#" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-5 h-5 text-white-900 hover:text-white-700 transition" />
          </Link> */}
          <Link className="animate-pulse hover:animate-none" href="https://www.instagram.com/tanishq_jodhani_14?igsh=MW0wOWVqY3Yza2gzdw==" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-5 h-5 text-white-900 hover:text-white-700 transition" />
          </Link>
          {/* <Link className="animate-pulse hover:animate-none" href="https://in.linkedin.com/in/ayush-srivastava-279a64287?trk=public_profile_like_view_actor-name" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 text-white-900 hover:text-white-700 transition" />
          </Link> */}
          <Link className="animate-pulse hover:animate-none" href="https://www.linkedin.com/in/jodhani-tanishq-221185287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 text-white-900 hover:text-white-700 transition" />
          </Link>
          {/* <Link className="animate-pulse hover:animate-none" href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-5 h-5 text-white-900 hover:text-white-700 transition" />
          </Link> */}
        </div>
      </div>
    </footer>
  );
}
