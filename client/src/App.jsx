import { Analytics } from "@vercel/analytics/react";

function App({ element }) {
  return (
    <>
      <main>{element}</main>
      <Analytics />
    </>
  );
}

export default App;
