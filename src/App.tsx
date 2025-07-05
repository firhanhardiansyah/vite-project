import { ThemeProvider } from "@/components/theme-provider";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { ModeToggle } from "./components/mode-toggle";
import bunLogo from "/bun.svg";
import shadcnLogo from "/shadcn-ui.svg";
import tailwindLogo from "/tailwindcss.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4 transition-colors">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl w-full">
          {/* Left Column */}
          <div className="flex flex-wrap justify-start items-center gap-6">
            <a href="https://bun.sh" target="_blank" rel="noopener noreferrer">
              <img
                src={bunLogo}
                className="h-20 w-20 transition-transform hover:scale-110 dark:invert"
                alt="Bun logo"
              />
            </a>
            <a
              href="https://vite.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={viteLogo}
                className="h-20 w-20 transition-transform hover:scale-110 dark:invert"
                alt="Vite logo"
              />
            </a>
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={reactLogo}
                className="h-20 w-20 transition-transform hover:scale-110 dark:invert"
                alt="React logo"
              />
            </a>
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={tailwindLogo}
                className="h-20 w-20 transition-transform hover:scale-110 dark:invert"
                alt="Tailwind CSS logo"
              />
            </a>
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={shadcnLogo}
                className="h-20 w-20 transition-transform hover:scale-110 rounded dark:invert"
                alt="ShadCN UI logo"
              />
            </a>

            <div>
              <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
                Bun + Vite + React + Tailwind CSS + ShadCN UI
              </h1>
              <p className="mb-6 text-gray-500 dark:text-gray-300 lg:max-w-2xl">
                This modern stack combines the blazing-fast Bun runtime, the
                lightning-fast Vite build tool, React's powerful component-based
                architecture, Tailwind CSS's utility-first styling, and Shadcn
                UI’s elegant and customizable component library. Together, they
                offer a streamlined and scalable approach to building
                high-performance, maintainable user interfaces.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center text-center justify-center">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition-colors">
              <div className="flex items-center justify-center gap-3">
                <Button
                  variant="outline"
                  className="bg-blue-600 text-white hover:text-white hover:bg-blue-700 transition-colors cursor-pointer"
                  onClick={() => setCount((count) => count + 1)}
                >
                  <span>Count is {count}</span>
                </Button>
                <ModeToggle />
              </div>

              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Edit{" "}
                <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">
                  src/App.tsx
                </code>{" "}
                and save to test HMR
              </p>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
