import Link from 'next/link';

import LogOutButton from './LogOutButton';
import { getSession } from '../_lib/session';

const Navbar = async () => {
    const session = await getSession();

    return (
        <nav className="bg-white shadow-md ">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <Link
                    href="/"
                    className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition"
                >
                    Contact Manager
                </Link>

                <div className="flex items-center gap-4">
                    {session ? (
                        <>
                            <Link
                                href="/contact"
                                className="text-gray-700 font-medium hover:text-blue-600 transition"
                            >
                                Contacts
                            </Link>
                            <div className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">
                                <LogOutButton />
                            </div>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="text-gray-700 font-medium hover:text-blue-600 transition"
                            >
                                Login
                            </Link>
                            <Link
                                href="/register"
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;