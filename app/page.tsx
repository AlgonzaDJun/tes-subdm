import Image from "next/image";

export default function Home() {
  // if sushi is a subdomain, redirect to sushi page
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    const subdomain = hostname.split(".")[0];
    if (subdomain === "sushi") {
      return <div>redirecting to sushi page</div>;
    }
  }

  return <div>this is the home page</div>;
}
