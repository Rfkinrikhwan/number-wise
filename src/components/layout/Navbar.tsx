import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import WiseIcon from '../icon';
import { sideBarStore } from '@/store';
import NavigationLink from '../custom/NavigationLink';
import { AnimatePresence } from 'framer-motion';
import Sidebar from '../sidebar';

const Navbar = () => {
    const path = useLocation();
    const { side, openSidebarFn } = sideBarStore();
    const [hasBackground, setHasBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 100) {
                setHasBackground(true);
            } else {
                setHasBackground(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${hasBackground ? 'shadow bg-white' : ''
            } sticky top-0 w-full transition-all duration-300 z-50 py-2`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo and brand */}
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0">
                            <div className="flex items-center">
                                <img src="logos.png" alt="" className="w-16" />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <NavigationLink path={path} to="/" textContent={'Home'} />
                        <NavigationLink path={path} to="/features" textContent={'Features'} />
                        <NavigationLink path={path} to="/game" textContent={'Game'} />
                        <NavigationLink path={path} to="/blog" textContent={'Blog'} />
                        <NavigationLink path={path} to="/courses" textContent={'Courses'} />
                    </div>

                    <div className='hidden md:flex items-center space-x-8'>
                        <Link to="/signin" className="text-gray-600 hover:text-gray-900">Sign In</Link>
                        <div className='flex justify-end items-center gap-3 border w-32 border-wise-primary px-1 py-1  rounded-full'>
                            <p className='text-wise-primary font-semibold'>Sign Up</p>
                            <Button className='rounded-full w-8 h-8 bg-wise-primary text-white hover:bg-transparent'>
                                <WiseIcon iconName="GoArrowUpRight" />
                            </Button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => openSidebarFn()}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                            {side ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence mode="wait">
                {side && <Sidebar />}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;