"use client";

import { useEffect, useState } from "react";

const HealthIndicator = () => {
  const [isHealthy, setIsHealthy] = useState(false);
  const [statusText, setStatusText] = useState("Checking...");

  useEffect(() => {
    const checkHealth = async () => {
      try {
        if (!process.env.NEXT_PUBLIC_SERVER_URL) {
          throw new Error("Server URL is not defined");
        }
        const res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL, { cache: "no-store" });
        const data = await res.json();
        if (res.ok && data?.message) {
          setIsHealthy(true);
          setStatusText("🟢 Server Healthy");
        } else {
          setIsHealthy(false);
          setStatusText("🔴 Server Unhealthy");
        }
      } catch (err) {
        setIsHealthy(false);
        setStatusText("🔴 Server Unreachable" + err);
      }
    };

    checkHealth(); // initial check
    const interval = setInterval(checkHealth, 2000); // every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-3 right-3 z-50">
      <div className="group relative flex items-center justify-center">
        <div
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            isHealthy ? "bg-green-500" : "bg-red-500"
          }`}
        />

        {/* Hover Popover */}
        <div className="absolute bottom-5 right-0 translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto bg-white text-xs text-gray-800 px-2 py-1 rounded shadow-md whitespace-nowrap">
          {statusText}
        </div>
      </div>
    </div>
  );
};

export default HealthIndicator;
