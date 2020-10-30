import Link from "next/link";

const Promo = () => {
  return (
    <section className="flex justify-between h-screen bg-white align-center">
      <article className="flex flex-col self-center w-3/6 m-auto">
        <h2 className="py-8 text-4xl text-center text-black ">
          Join the{" "}
          <span className="text-purpleBorder">mechanical revolution</span>
        </h2>
        <Link href="/order">
          <a>
            <button className="w-full py-4 m-auto text-2xl text-white transition-all duration-300 ease-in-out transform border-2 border-solid rounded-lg focus:outline-none focus:shadow-outline hover:transition-all hover:scale-105 bg-purpleBorder border-purple">
              Order now
            </button>
          </a>
        </Link>
      </article>
    </section>
  );
};

export default Promo;
