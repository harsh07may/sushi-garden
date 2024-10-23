import Loader from "@/components/shared/loader";

export default function Loading() {
  return (
    <main className="bg-[#F8EFD2] flex min-h-screen flex-col items-center justify-center border p-24">
      <Loader />
    </main>
  );
}
