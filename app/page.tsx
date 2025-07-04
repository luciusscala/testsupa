import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <main className="min-h-screen min-w-full flex items-center justify-center bg-[#02503B]">
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-black mb-8" style={{ color: "#B04F17" }}>
            This is the landing page.
          </h1>
          <div className="mt-2 text-2xl" style={{ color: "#B04F17" }}>
            check your eligibility{" "}
            <Link
              href="/sign-up"
              className="underline font-bold"
              style={{ color: "#B04F17" }}
            >
              here
            </Link>
          </div>
        </div>
      </main>
      <div className="fixed bottom-0 left-0 w-full z-50 flex justify-center pb-6">
        <Navbar navItems={[
          { href: "/sign-in", label: "sign in" },
        ]} />
      </div>
    </>
  );
}
