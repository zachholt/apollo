import DataDisplay from "@/components/DataDisplay";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <DataDisplay />
      </div>
    </main>
  );
}
