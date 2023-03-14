const WhyWe = () => {
  const dataWhyWe = [
    {
      logo: "fa-solid fa-headset ",
      name: "Support 24/7",
      text: "Pellentesque mollis, metus nec fringilla aliquam. Donec consequat orci quis volutpat imperdiet.",
    },
    {
      logo: "fa-solid fa-shield-halved",
      name: "Safe and solid",
      text: "Magna lacus iaculis elit, quis pharetra varius. Aenean lectusex, placerat id tellus in eros.",
    },
    {
      logo: "fa-solid fa-truck-fast",
      name: "Extremely fast",
      text: "Pellentesque varius ex vel consequat quis. Sed mauris ex, imperdiet sit amet nisl ac, ultrices.",
    },
    {
      logo: "fa-solid fa-hand-holding-dollar",
      name: "Money back guarantee",
      text: "Vestibulum gravida iaculis nisl, vel lobortis eros. Praesent vulputate lacus bibendum augue.",
    },
  ];

  return (
    <div className="w-full col-span-2 px-3 mb-6 grow-0 shrink-0 basis-auto md:mb-0">
      <div className="flex flex-wrap">
        {dataWhyWe.map((item) => {
          return (
            <div className="w-full px-3 mb-12 grow-0 shrink-0 basis-auto lg:w-6/12">
              <div className="flex transition-all duration-300 hover:-translate-y-1">
                <div className="shrink-0">
                  <div className="p-4 bg-blue-600 rounded-sm shadow-lg">
                    <i class={item.logo}></i>
                  </div>
                </div>
                <div className="ml-4 grow">
                  <p className="mb-1 font-bold">{item.name}</p>
                  <p className="text-sm  text-cadet-space">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyWe;
