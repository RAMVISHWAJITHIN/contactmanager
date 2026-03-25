"use client"
// import { redirect } from 'next/navigation';
import { logoutAction } from '../actions/auth'
import { useRouter } from "next/navigation";

const LogOutButton = () => {


    const router = useRouter();

    const handleLogout = async () => {

        try {

            await logoutAction();
            //the redirect happens in the server ction
            // redirect("/login")
            // this client-side redirect is a fallback
            router.push("/login")
            router.refresh()
        } catch (error) {
            console.log("Logout failed", error)
        }

    }
    return (
        <button onClick={handleLogout}>Logout</button>
    )
}

export default LogOutButton;