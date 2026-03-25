

"use server"

import axios from "axios"
import { redirect } from "next/navigation";

import { UserType } from "../_types/user"
import { deleteSession, setSession } from "../_lib/session";

const API_URL="http://localhost:5001"


export const loginAction = async (formData: FormData) => {
  const email = String(formData.get("email")).trim();
  const password = String(formData.get("password")).trim();

  const response = await axios.get(`${API_URL}/users`);

  const user = response.data.find(
    (u: any) =>
      String(u.email).trim() === email &&
      String(u.password).trim() === password
  );

  if (!user) {
    throw new Error("Invalid Credentials");
  }

  await setSession({name:user.name,email:user.email,id:user.id});
  redirect("/contact");
};


export const logoutAction= async()=>{
  await deleteSession();
    redirect("/login")
}