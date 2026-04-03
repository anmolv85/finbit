import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './button';
import { LayoutDashboard } from 'lucide-react';
import { PenBox } from 'lucide-react';
import { checkUser } from '@/lib/checkUser';

const Header = async () => {
  await checkUser();

  return (
       <nav className="w-full px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image 
           src={"/logo.png"} alt="finbit logo" height={60} width={200}
             className="h-10 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
            />
        </Link>
    <ClerkProvider>
      <div className="flex items-center gap-3 sm:gap-4">

        <Show when="signed-out">
              <SignInButton>
               <Button variant="outline" className="text-grey-600 hover:text-blue-500 flex items-center gap-2 text-sm:text-base">
                Login</Button>
              </SignInButton>
               <SignUpButton>
                <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-300 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>

            <Show when="signed-in">
              

              <a href="/dashboard" className=" flex items-center gap-2">
                <Button variant="outline" className="text-grey-600 hover:text-blue-500 flex items-center gap-2">
                  <LayoutDashboard size="18"/>
                  <span className="hidden md:inline">Dashboard</span>
                  </Button>  
              </a>

              <a href="/transaction/create">
                <Button variant="outline" className="text-grey-600 hover:text-blue-500 flex items-center gap-2">
                  <PenBox size="18"/>
                  <span className="hidden md:inline">Add Transaction</span>
                  </Button>  
              </a>

               <UserButton afterSignOutUrl="/" appearance={{
                elements:{
                  avatarBox: "w-12 h-12",
                }
               }}/>
            </Show>
        </div>
    </ClerkProvider>
        </nav> 
  );
};

export default Header;