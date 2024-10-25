import { Navbar } from "./components/nav";

export default function NotFound() {
  return (
    <main className="mx-4 lg:mx-auto max-w-xl flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
      <Navbar />
      <section className="">
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          404 - Page Not Found
        </h1>
        <p className="mb-4">The page you are looking for does not exist.</p>
      </section>
    </main>
  );
}
