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
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center">
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            job <span className="text-primary">tracking</span> app
          </h1>
          <p className="leading-loose max-w-md mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            magni officia laborum corrupti reiciendis ipsum quos in optio
            repellat deleniti, accusamus, dolores maxime libero dolor id magnam
            quasi a unde?
          </p>
          <Button asChild className="mt-4">
            <Link href="/add-job">Get Started</Link>
          </Button>
        </div>
        <Image src={Hero} alt="hero image" className="hidden lg:block" />
      </section>
    </main>
  );
}
