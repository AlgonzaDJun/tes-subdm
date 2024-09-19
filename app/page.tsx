import { headers } from "next/headers";
import Image from "next/image";
import SushiPage from "./sushi/page";
import SushiPageSlug from "./sushi/[slug]/page";

export default function Home() {
  // if sushi is a subdomain, redirect to sushi page

  const header = headers().get("isSushi");
  // if had slug, redirect to sushi page with slug

  if (header) {
    return <SushiPage />;
  }

  // if isSushi header is set, redirect to sushi page

  return <div>this is the home page</div>;
}
