import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';



const Header = ({children , className}: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
        <Link href="/" className="md:flex-1">
            <div className="flex items-center space-x-4">
            <Image 
                src="/assets/icons/logo1.svg" 
                alt="Logo" 
                width={32} 
                height={32}
                className="hidden md:block" 
            />
            <span className="text-xl font-semibold text-white-800">Documingle</span>
            </div>


            <Image src="/assets/icons/logo-icon.svg" alt="Logo" width={32} height={32}
             className= "mr-2 md:hidden" /> 
        </Link>
        {children}
    </div>
  )
}

export default Header