const Rules = ({ onClick }) => {
  return (
    <>
      <section className="flex w-full justify-center md:justify-end">
        <button
          className="rounded-md px-7 py-1 uppercase tracking-widest text-white outline outline-2 outline-headerOutline transition-colors duration-300 hover:bg-white hover:text-radialGradientEnd hover:outline-white"
          onClick={onClick}
        >
          Rules
        </button>
      </section>
    </>
  );
};

export default Rules;
