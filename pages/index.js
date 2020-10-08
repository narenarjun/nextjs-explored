import React from "react";
import Link from "next/link";


// ! this is how navigation to static path workks
const Page = () => (
  <div>
    <h1>Index Page</h1>
    <Link href="/notes">
      <a>Link</a>
    </Link>
  </div>
);
/**
 * # some cavets:
 * * pages folder can be in the root or inside src folder\
 * * if both pages folder exists[one in the root, one inside src/ folder]  the folder in the root takes precedence.
 */

export default Page;
