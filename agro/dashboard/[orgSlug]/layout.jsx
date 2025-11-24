import Sidebar from "@/src/components/layout/Sidebar";
import Navbar from "@/src/components/layout/Navbar";

export default function OrgLayout({ children, params }) {
  const orgSlug = params.orgSlug;

  return (
    <div className="flex min-h-screen">
      <Sidebar orgSlug={orgSlug} />

      <div className="flex flex-col flex-1">
        <Navbar orgSlug={orgSlug} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
