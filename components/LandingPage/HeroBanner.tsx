import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex justify-center min-h-screen sm:flex-col bg-blackMuted align-center">
      <article className="flex flex-col self-center w-3/6 minlg:ml-10 sm:w-5/6 animate-pulse-slow ">
        <img src="keyboard.jpg" className="w-full h-auto heroImg" />
      </article>
      <article className="flex flex-col self-center m-auto text-white">
        <h1 className="py-8 text-4xl sm:text-center">
          Keyboards that{" "}
          <span className="text-purpleBorder animate-pulse-slow heroWord">
            glow
          </span>
        </h1>
        <article className="flex flex-col m-auto text-white sm:self-center">
          <h2 className="text-2xl">Handcrafted.</h2>
          <h2 className="text-2xl">Custom built.</h2>
          <h2 className="mb-8 text-2xl">Tailor made.</h2>
        </article>
        <Link href="/order">
          <button className="px-8 py-4 m-auto transition-all duration-300 ease-in-out transform border-2 border-solid rounded-lg sm:mb-8 hover:transition-all hover:scale-105 bg-purple border-purpleBorder">
            <a>Order now</a>
          </button>
        </Link>
      </article>
    </section>
  );
};

export default Hero;
