import React from "react";
import { useRouter } from "next/router";

// /user/:id:thing  --> this kind of routing is possible in nextjs with catch all routes feature.


const Page = () => {
  const router = useRouter();

  const { params } = router.query;

  console.log(params);

  return <h1>Note </h1>;
};

export default Page;
