"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  console.log(router);

  function handleNavigate() {
    router.push('/products');
  }
   return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Link href={"/products"}>Navigate to product page</Link>
        <Link href={"/accounts/membership"}>Navigate to membership page</Link>

        <h2 className="font-bold mt-3 text-lg"> Alternating way of Navigating using useRouter</h2>
        <button onClick={() => router.push("/products")}>
          Navigate to products page using useRouter
        </button>
         
      </main>
    </div>
  );
}
