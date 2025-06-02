// links
import Link from "next/link";

// icons
import {
  RiInstagramLine,
  RiLinkedinLine,
  RiTwitterXLine,
  RiGithubLine,
} from 'react-icons/ri';

const iconStyle = { fontSize: '25px' };

const Socials = () => {
  return (
   <div className='flex items-center gap-x-5 text-lg'>
     <Link href={'https://www.instagram.com/ajson_.dev?igsh=anN1ajM3OG1zajN3'} className="hover:text-accent transition-all duration-300">
       <RiInstagramLine style={iconStyle} />
     </Link>
     <Link href={'https://www.linkedin.com/in/alvin-kanini-852665350?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} className="hover:text-accent transition-all duration-300">
       <RiLinkedinLine style={iconStyle} />
     </Link>
     <Link href={'https://x.com/AlvinKanini?t=YqVEFwSMG6hNh9NzfPOiqw&s=09'} className="hover:text-accent transition-all duration-300">
       <RiTwitterXLine style={iconStyle} />
     </Link>
     <Link href={'https://github.com/alvin101-coder'} className="hover:text-accent transition-all duration-300">
       <RiGithubLine style={iconStyle} />
     </Link>
  </div>
  );
};

export default Socials;
