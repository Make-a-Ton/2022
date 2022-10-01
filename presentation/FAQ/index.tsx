import FAQ from "@presentation/common/FAQ";

const FAQs = () => {
  return (
    <section className="select-none relative py-[120px] flex flex-col items-center px-[32px] md:px-[64px] lg:px-[120px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="z-[-1] top-0 left-0 absolute h-full w-full object-cover object-center"
        src="/assets/hero-bg.svg"
        alt=""
      />
      <div className="flex flex-col w-full max-w-[1440px] mx-auto">
        <h2 className="font-montserrat mb-[60px] font-extrabold leading-[78px] text-6xl gradient-primary gradient-text">
          FAQs
        </h2>
        {Array(10)
          .fill({ question: "Is registration free?", answer: "Yes" })
          .map(({ question, answer }, key) => (
            <FAQ question={question} answer={answer} key={key} />
          ))}
      </div>
    </section>
  );
};

export default FAQs;
