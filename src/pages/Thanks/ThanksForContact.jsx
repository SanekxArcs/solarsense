import React from "react";
import ContainerWrap from "./../../components/Container";
import PageHeader from "./../../components/PageHeader";

const ThanksForContact = () => {
  return (
    <>
      <PageHeader first={"Dziękujemy za przesłanie"} second={"formularza kontaktowego!"} three={"Twoja wiadomość została przesłana i zostanie rozpatrzona przez nasz zespół jak najszybciej."}/>
      <ContainerWrap>
        <div className="grid place-content-center text-center">
          <p>
            W międzyczasie, zachęcamy do zapoznania się z naszą stroną
            internetową, gdzie można znaleźć więcej informacji na temat naszych
            produktów i usług.
          </p>
          <p>
            Jeśli potrzebujesz natychmiastowej pomocy, proszę skontaktować się z
            nami za pomocą podanych poniżej informacji kontaktowych. <br />
            Telefon: <a href="tel:+48 733 897 120">+48 733 897 120</a> <br />
          </p>
          <p className="text-xl font-semibold">
            Dziękujemy za zaufanie naszej firmie!
          </p>
        </div>
      </ContainerWrap>
    </>
  );
};

export default ThanksForContact;
