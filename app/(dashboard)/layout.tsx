import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import React, { PropsWithChildren } from "react";

export default function layout({ children }: PropsWithChildren) {
  return (
    <main className="grid lg:grid-cols-5">
      {/* first column hiden on smaller screens */}
      <div className="hidden lg:block lg:col-span-1 lg:min-h-screen">
        <Sidebar />
      </div>
      {/* second column hide dropdown on big screens */}
      <div className="lg:col-span-4">
        <Navbar />
        <div className="py-16 px-4 sm:px-8 lg:px-26">{children}</div>
      </div>
    </main>
  );
}
