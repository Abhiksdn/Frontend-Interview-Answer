// pages/index.tsx or pages/index.js

import { useEffect, useState } from "react";

const HomePage = () => {
  const [variant, setVariant] = (useState < string) | (null > null);

  useEffect(() => {
    // Fetch the variant from the response headers
    fetch("/")
      .then((response) => response.headers.get("x-ab-test-variant"))
      .then(setVariant);
  }, []);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {variant === "A" && <p>This is variant A content.</p>}
      {variant === "B" && <p>This is variant B content.</p>}
    </div>
  );
};

export default HomePage;
