import Image from "next/image";
import Logo from "@/assets/logo.svg";
import Hero from "@/assets/main.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <Link href="/">
          <Image src={Logo} alt="logo" />
        </Link>
      </header>
      <section className="mt-10 max-w-6xl mx-auto px-4 sm:px-8 h-screen md:-mt-20 grid md:grid-cols-[1fr,400px] items-center">
        <div className="order-2 md:order-1">
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            job <span className="text-primary">tracking</span> app
          </h1>
          <p className="leading-loose max-w-md mt-4">
            Manage your job applications effortlessly with JobKu. Track your
            progress, stay organized, and focus on landing your dream job—all in
            one place.
          </p>
          <Button asChild className="mt-4">
            <Link href="/add-job">Get Started</Link>
          </Button>
        </div>
        <Image
          src={Hero}
          alt="hero image"
          className="order-1 md:order-2 lg:block w-[90%] h-[90%] md:w-auto md:h-auto"
        />
      </section>
    </main>
  );
}
