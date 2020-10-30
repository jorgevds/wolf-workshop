const Demo = () => {
  return (
    <section className="z-10 flex min-h-screen bg-black sm:flex-col md:py-12 align-center">
      <article className="flex flex-col self-center w-2/6 m-auto text-white sm:w-5/6 sm:pb-8">
        <img
          src="keyboardDemo1.jpg"
          className="w-full h-auto p-4 border-2 border-solid border-purpleBorder"
        />
        <h2 className="py-8 text-3xl">
          The <span className="text-purpleBorder">G66 Tension</span>
        </h2>
        <h3 className="text-2xl">
          Tried and true, this fully mechanical keyboard won't let you down
          whenever you're in a gaming pinch
        </h3>
      </article>
      <article className="flex flex-col self-center w-2/6 m-auto text-white sm:w-5/6 ">
        <img
          src="keyboardDemo2.jpg"
          className="w-full h-auto p-4 border-2 border-solid border-purpleBorder"
        />
        <h2 className="py-8 text-3xl">
          The <span className="text-purpleBorder">Professional</span>
        </h2>
        <h3 className="text-2xl">
          This ever reliable and classy keyboard will turn heads in class or at
          work, and for all the right reasons
        </h3>
      </article>
    </section>
  );
};

export default Demo;
