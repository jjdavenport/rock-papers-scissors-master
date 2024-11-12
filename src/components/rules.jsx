const Rules = ({ onClick }) => {
  return (
    <>
      <section className="flex w-full justify-center md:justify-end">
        <button
          className="z-40 rounded-lg uppercase tracking-widest text-white outline outline-2 outline-headerOutline transition-colors duration-300 hover:bg-white hover:text-radialGradientEnd hover:outline-white ~sm/md:~px-7/8 ~sm/md:~py-1/2 md:rounded-lg"
          onClick={onClick}
        >
          Rules
        </button>
      </section>
    </>
  );
};

export default Rules;
