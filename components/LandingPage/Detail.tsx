const Detail = () => {
  return (
    <section className="flex justify-between min-h-screen bg-white align-center">
      <article className="flex flex-col self-center w-3/6">
        <img src="keycap.png" className="w-full h-auto" />
      </article>
      <article className="flex flex-col self-center w-2/5 m-auto text-black ">
        <h2 className="py-8 text-3xl">
          Keys that just <span className="text-purpleBorder">click</span>
        </h2>
        <h3 className="py-8 text-2xl">
          Every cap feels as good as the next, allowing for a smooth typing feel
          and an intense gaming experience
        </h3>
      </article>
    </section>
  );
};

export default Detail;
