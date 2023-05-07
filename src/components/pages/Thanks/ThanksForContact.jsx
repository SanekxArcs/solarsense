import React from "react";
import TopImg from '../../service/com for style/TopImg'

const ThanksForContact = () => {
  return (
    <>
    <TopImg/>
    <div className="max-w-[1170px] min-h-[600px] mx-auto text-center text-lg py-32 ">
      <h1 className="pb-10 text-4xl font-medium">
        Dziękujemy za przesłanie formularza kontaktowego!
      </h1>
      <p>
        Twoja wiadomość została przesłana i zostanie rozpatrzona przez nasz
        zespół jak najszybciej.
      </p>
      <p>
        W międzyczasie, zachęcamy do zapoznania się z naszą stroną internetową,
        gdzie można znaleźć więcej informacji na temat naszych produktów i
        usług.
      </p>
      <p>
        Jeśli potrzebujesz natychmiastowej pomocy, proszę skontaktować się z
        nami za pomocą podanych poniżej informacji kontaktowych. <br /> Telefon:{" "}
        <a href="tel:+48 733 897 120">+48 733 897 120</a> <br />
      </p>
      <p className="text-xl font-semibold">
        Dziękujemy za zaufanie naszej firmie!
      </p>
    </div>
    </>

  );
};

export default ThanksForContact;
