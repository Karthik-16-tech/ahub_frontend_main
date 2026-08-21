import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/admin")({
  component: AdminRedirect,
});

function AdminRedirect() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
      const targetUrl = isLocal ? "http://localhost:5174/admin/" : "/admin/";
      window.location.replace(targetUrl);
    }
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FDF8F2] p-4 text-center">
      <div className="rounded-3xl bg-white p-8 shadow-xl border border-orange-100 max-w-sm w-full">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF6B00] text-white shadow-md text-2xl font-black">
          ā
        </div>
        <h2 className="text-xl font-bold text-slate-900">Redirecting to Admin Portal...</h2>
        <p className="mt-2 text-sm text-slate-500">If you are not redirected automatically,</p>
        <a
          href="http://localhost:5174/admin/"
          className="mt-5 inline-flex items-center justify-center rounded-xl bg-[#FF6B00] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#e05a00] transition-colors"
        >
          Open Admin Login
        </a>
      </div>
    </div>
  );
}
