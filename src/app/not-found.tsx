"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NotFoundPage = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-8">
          Sorry, the page you are looking for does not exist.
        </p>
        <button
          onClick={goToHome}
          className="px-6 py-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition duration-300"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
