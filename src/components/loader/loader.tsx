import React from "react";

const Spinner: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md">
      <div className="w-12 h-12 border-4 border-white rounded-full shadow-2xl border-t-transparent animate-spin"></div>
    </div>
  );
};

export default Spinner;
