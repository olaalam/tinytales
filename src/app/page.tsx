import { redirect } from "next/navigation";

export default function Home() {
  // redirect to register page
  redirect("/register");
}