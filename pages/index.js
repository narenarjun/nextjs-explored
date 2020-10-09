/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";

// ! this is how navigation to static path workks
const Page = ({ content }) => (
  <div sx={{ height: `calc(100vh - 60px)` }}>
    <div
      sx={{
        variant: "containers.page",
        display: "flex",
        alignItems: "center",
        height: "100%",
      }}
    >
      <h1 sx={{ fontSize: 8, my: 0 }}>{content.title}</h1>
    </div>
  </div>
);
/**
 * # some cavets:
 * * pages folder can be in the root or inside src folder\
 * * if both pages folder exists[one in the root, one inside src/ folder]  the folder in the root takes precedence.
 */

export default Page;

export function getStaticProps() {
  // console.log(context);
  // ! mocking getting data from CMS
  return {
    props: {
      content: {
        title: "This is a really nice app",
      },
    },
  };
}
