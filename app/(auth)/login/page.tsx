//this is server component by default 

import LoginForm from "@/app/_components/LoginForm";
import Link from "next/link";

const LoginPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-4">
            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Welcome Back
                </h1>

                <LoginForm />

                <p className="text-center text-gray-600 mt-6">
                    Don&apos;t have an account?{" "}
                    <Link
                        href="/register"
                        className="text-blue-600 font-medium hover:text-blue-700 hover:underline transition"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;