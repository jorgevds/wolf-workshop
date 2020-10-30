const About = () => {
  return (
    <section className="flex justify-center min-h-screen sm:flex-col bg-blackMuted align-center">
      <article className="flex flex-col self-center w-3/6 text-4xl text-white sm:w-4/6 sm:py-8">
        <h1>
          Hi there, I'm <span className="text-purpleBorder">Wolf</span>
        </h1>
        <h2 className="sm:py-8">
          And this is my <span className="text-purpleBorder">workshop</span>
        </h2>
        <p className="pt-4 text-2xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
          aliquid, unde quidem aspernatur quasi architecto ad tempora tenetur
          illum. Dolorum perspiciatis nisi illum qui aut eveniet ipsum ullam
          deserunt consectetur.
        </p>
      </article>
      <article className="flex flex-col self-center w-3/12 sm:w-3/6 sm:py-8">
        <img
          src="/wolf-profile.jpg"
          className="w-full h-auto border-2 border-solid rounded-full border-purpleBorder"
        />
      </article>
    </section>
  );
};

export default About;
