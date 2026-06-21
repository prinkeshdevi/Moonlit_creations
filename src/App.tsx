/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingElements } from "./components/FloatingElements";

export default function App() {
  return (
    <div className="min-h-screen bg-warm-cream text-text-dark font-poppins selection:bg-dusty-mauve/30 selection:text-text-dark">
      <FloatingElements />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
