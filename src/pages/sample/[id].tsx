import React from "react";
import { useRouter } from "next/router";

const PageSampleId = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <> 
      Sample page with ID: {id}
    </>
  );
};

export default PageSampleId;
