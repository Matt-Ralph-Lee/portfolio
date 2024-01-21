"use client";

import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <div className="h-screen">
      <Spline scene="https://prod.spline.design/TcO3zPBQlR00FnU2/scene.splinecode" />
      <div className="bg-gray-500">hello, world</div>
    </div>
  );
}
