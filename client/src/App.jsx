import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App({ element }) {
  return (
    <>
      <main>{element}</main>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
