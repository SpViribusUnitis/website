import React from "react";
import Image from "next/image";
import type { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "O nama | Zadruga hrvatskih branitelja Viribus Unitis",
    description:
      "Saznajte više o Zadruzi hrvatskih branitelja Viribus Unitis, našoj misiji, proizvodima i ciljevima. Ujedinjenim snagama gradimo bolju budućnost.",
    openGraph: {
      title: "O nama | Zadruga hrvatskih branitelja Viribus Unitis",
      description:
        "Saznajte više o Zadruzi hrvatskih branitelja Viribus Unitis, našoj misiji, proizvodima i ciljevima.",
      images: [
        {
          url: "/images/logo-sm.png",
          width: 1200,
          height: 630,
          alt: "Zadruga hrvatskih branitelja Viribus Unitis",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "O nama | Zadruga hrvatskih branitelja Viribus Unitis",
      description:
        "Saznajte više o Zadruzi hrvatskih branitelja Viribus Unitis, našoj misiji, proizvodima i ciljevima.",
      images: ["/og-image.jpg"],
    },
  };
};

const ONamaPage = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">O nama</h1>

      <div className="space-y-6">
        <p>
          Zadruga hrvatskih branitelja Viribus Unitis ponosno predstavlja svoju
          misiju i postignuća. Naša zadruga okuplja hrabre branitelje koji su
          svoje živote posvetili obrani domovine, a sada svoje vještine i strast
          usmjeravaju ka stvaranju kvalitetnih domaćih proizvoda i jačanju
          lokalne zajednice.
        </p>

        <div className="md:flex md:items-center md:space-x-4">
          <Image
            src="/images/hero-section/1.jpg"
            alt="Članovi zadruge"
            width={300}
            height={200}
            className="rounded-lg mb-4 md:mb-0 md:w-1/3 object-contain max-h-[400px]"
          />
          <div className="md:w-2/3">
            <p>
              Naša priča započela je s grupom entuzijastičnih branitelja koji su
              prepoznali potrebu za udruživanjem snaga i resursa. Vođeni motom
              "Viribus Unitis" (lat. "Ujedinjenim snagama"), odlučili smo
              stvoriti platformu koja će omogućiti našim članovima da razviju
              svoje poduzetničke ideje i plasiraju svoje proizvode na tržište.
            </p>
            <p className="mt-2">
              Kroz godine, naša zadruga je izrasla u snažnu mrežu proizvođača,
              obrtnika i poljoprivrednika, koji zajedno rade na očuvanju
              tradicije i promociji kvalitetnih domaćih proizvoda.
            </p>
          </div>
        </div>

        <p>
          U srcu našeg djelovanja je ideja da svaki proizvod nosi sa sobom priču
          o hrabrosti, ustrajnosti i ponosu. Naši članovi stvaraju široku paletu
          proizvoda - od ekološki uzgojenog voća i povrća, preko meda i
          mliječnih proizvoda, do tradicionalnih zanatskih rukotvorina i
          suvenira inspiriranih bogatom hrvatskom poviješću.
        </p>

        <p>
          Posebno smo ponosni na naše edukativne programe i radionice, kroz koje
          dijelimo znanja i iskustva o ekološkoj poljoprivredi, održivom razvoju
          i poduzetništvu. Ovi programi ne samo da osnažuju naše članove, već i
          doprinose široj zajednici, potičući ekonomski i socijalni napredak.
        </p>

        <div className="md:flex md:items-center md:space-x-4 md:flex-row-reverse">
          <Image
            src="/images/hero-section/5.jpg"
            alt="Proizvodi zadruge"
            width={300}
            height={200}
            className="rounded-lg mb-4 md:mb-0 md:w-1/3 object-contain "
          />
          <div className="md:w-2/3">
            <p>
              Naša zadruga redovito organizira sajmove i događanja, poput
              nedavno održanog Prvog Sajma Domaćih Proizvoda, koji je privukao
              veliku pažnju javnosti. Ovi događaji nisu samo prilika za
              promociju naših proizvoda, već i za jačanje zajedništva i pružanje
              podrške onima kojima je najpotrebnija.
            </p>
            <p className="mt-2">
              Humanitarna komponenta duboko je utkana u naš rad. Dio prihoda od
              prodaje naših proizvoda redovito usmjeravamo u fond za pomoć
              braniteljima i njihovim obiteljima u teškoj socijalnoj situaciji,
              čime nastojimo vratiti zajednici koja nas podržava.
            </p>
          </div>
        </div>

        <p>
          Gledajući u budućnost, naša vizija je nastaviti rasti i razvijati se,
          stvarajući nove prilike za naše članove i jačajući hrvatsko
          gospodarstvo. Želimo biti primjer kako se kroz zajedništvo, trud i
          inovaciju mogu prevladati izazovi i stvoriti pozitivna promjena u
          društvu.
        </p>

        <p>
          Pozivamo vas da se upoznate s našim proizvodima, posjetite naše
          događaje i postanete dio naše priče. Zajedno, ujedinjenim snagama,
          gradimo bolju budućnost za naše članove, njihove obitelji i cijelu
          hrvatsku zajednicu.
        </p>

        <div className="mt-12" id="ciljevi">
          <h2 className="text-2xl font-bold mb-4">Naši Ciljevi</h2>
          <div className="md:flex md:items-center md:space-x-4">
            <Image
              src="/images/hero-section/3.jpg"
              alt="Ciljevi zadruge"
              width={300}
              height={200}
              className="rounded-lg mb-4 md:mb-0 md:w-1/3"
            />
            <div className="md:w-2/3">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Osnaživanje hrvatskih branitelja kroz poduzetništvo i
                  zadrugarstvo
                </li>
                <li>
                  Promocija i plasman visokokvalitetnih domaćih proizvoda na
                  tržište
                </li>
                <li>
                  Očuvanje tradicije i kulturne baštine kroz naše proizvode i
                  aktivnosti
                </li>
                <li>
                  Edukacija članova i šire zajednice o održivom razvoju i
                  ekološkoj proizvodnji
                </li>
                <li>
                  Pružanje socijalne i ekonomske podrške braniteljima i njihovim
                  obiteljima
                </li>
                <li>
                  Stvaranje novih radnih mjesta i poticanje lokalnog
                  gospodarskog razvoja
                </li>
                <li>
                  Jačanje zajedništva i solidarnosti unutar braniteljske
                  populacije i šire
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-4">
            Ovi ciljevi vode naše svakodnevno djelovanje i dugoročnu strategiju.
            Kroz njihovo ostvarivanje, težimo stvoriti snažnu, samoodrživu
            zajednicu koja doprinosi prosperitetu cijele Hrvatske.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ONamaPage;
