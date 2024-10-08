import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ImageCarousel } from "@/components/shared/image-carousel";
import { DonacijaBanner } from "@/components/shared/donacija-banner";
import { PravilaZadruge } from "@/components/o-nama/pravila-zadruge";

export const generateMetadata = (): Metadata => {
  return {
    title: "O nama | Braniteljska zadruga Viribus Unitis",
    description:
      "Saznajte više o Braniteljskoj zadruzi Viribus Unitis, našoj misiji, proizvodima i ciljevima. Ujedinjenim snagama gradimo bolju budućnost.",
    openGraph: {
      title: "O nama | Braniteljska zadruga Viribus Unitis",
      description:
        "Saznajte više o Zadruzi hrvatskih branitelja Viribus Unitis, našoj misiji, proizvodima i ciljevima.",
      images: [
        {
          url: "/images/logo-sm.png",
          width: 600,
          height: 330,
          alt: "Braniteljska zadruga Viribus Unitis",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "O nama | Braniteljska zadruga Viribus Unitis",
      description:
        "aznajte više o Braniteljskoj zadruzi Viribus Unitis, našoj misiji, proizvodima i ciljevima.",
      images: ["/images/logo-sm.png"],
    },
  };
};

const ONamaPage = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">O nama</h1>

      <div className="space-y-6">
        <p>
          Braniteljsku zadrugu Viribus Unitis osnovali su veterani Domovinskog
          rata pokrenuvši izradu radno-duhovnog kampa Anatot kojemu je cilj
          doprinijeti smanjenju rizika od socijalne isključenosti, depresije, te
          loše kvalitete života posebno definirane kod braniteljske populacije.
          Provedba radnih i duhovnih aktivnosti rezultirati će psihosocijalnim
          osnaživanjem i poboljšanjem kvalitete života branitelja i svih
          sudionika aktivnosti.
        </p>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <Image
            src="/images/o-nama/1.jpg"
            alt="Spomenik braniteljima"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <div>
            <p className="mb-4">
              Radno duhovni kamp Anatot kroz aktivnosti koje nudi želi biti
              mjesto susreta, podrške, zajedništva i molitve, očuvati
              vrijednosti i istinu o Domovinskom ratu, pružiti podršku našim
              braniteljima, njihovim obiteljima i mladima u svakodnevnim
              potrebama.
            </p>
            <p>
              Dužni smo Vas upoznati sa dosad postignutim aktivnostima.
              Zemljište je veličine cca 10 000 metara kvadratnih, od zatečene
              šikare oslobodili smo prostor na kojem trenutno imamo: izbušen
              bunar sa pitkom vodom na 18 metara, solarnu elektranu sa
              mogućnosti isporuke HEP-u viška energije, 200 kvadrata
              nadstrešnice, 600 kvadrata plastenika, voćnjak jabuka, 5 stambenih
              kontejnera, 3 skladišna kontejnera, zbog toga uvjetovanih radova
              imamo dosta, što ne možemo financijski iznijeti. Sve do sada smo
              napravili iz projekata i osobnih sredstava zadrugara.
            </p>
          </div>
        </div>

        <p>
          Ovim putem želimo upoznati sa projektom sve osobe za koje smatramo da
          razmišljaju kao i mi.
        </p>

        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6">
          <Image
            src="/images/o-nama/2.jpg"
            alt="Događaj Viribus Unitis"
            width={400}
            height={300}
            className="rounded-lg"
          />
          <div>
            <p className="mb-4">
              Naša zadruga redovito organizira sajmove i događanja, poput
              nedavno održanog Prvog Sajma Domaćih Proizvoda, koji je privukao
              veliku pažnju javnosti. Ovi događaji nisu samo prilika za
              promociju naših proizvoda, već i za jačanje zajedništva i pružanje
              podrške onima kojima je najpotrebnija.
            </p>
            <p>
              Humanitarna komponenta duboko je utkana u naš rad. Dio prihoda od
              prodaje naših proizvoda redovito usmjeravamo u fond za pomoć
              braniteljima i njihovim obiteljima u teškoj socijalnoj situaciji,
              čime nastojimo vratiti zajednici koja nas podržava.
            </p>
            <p className="font-bold text-start text-xl mt-8">ORA ET LABORA</p>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h1 className="text-2xl font-bold mb-4">Galerija</h1>
        <ImageCarousel />
      </div>

      <div className="mt-12" id="ciljevi">
        <h2 className="text-2xl font-bold mb-4">Naši Ciljevi</h2>
        <div className="md:flex md:items-center md:space-x-4">
          <Image
            src="/images/o-nama/ciljevi.jpg"
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
                Stvaranje novih radnih mjesta i poticanje lokalnog gospodarskog
                razvoja
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
      <PravilaZadruge />
      <DonacijaBanner />
    </div>
  );
};

export default ONamaPage;
