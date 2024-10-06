"use client";

import { useEffect } from "react";

export default function CustomModal({ title, children, open, setOpen }) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, setOpen]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-40 flex items-center justify-center">
      <div
        className="relative bg-white w-full max-w-md sm:max-w-lg md:max-w-4xl lg:max-w-5xl m-4 p-6 rounded-lg shadow-lg"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 id="modal-title" className="text-xl font-semibold">
            {title}
          </h2>
          <button
            onClick={() => setOpen()}
            className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-full p-1"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
