import Loader from "@/components/shared/loader";

export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Loader />
    </main>
  );
}
