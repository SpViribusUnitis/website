import { SocialIconsList } from "@/components/shared/social-icons-list";
import { CONTACT_DATA } from "@/static";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

const KontaktPage = () => {
  return (
    <main className="flex-grow">
      {/* Contact Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Left side - Logo and Organization Name */}
              <div className="md:w-1/2 bg-white p-8 flex flex-col items-center justify-center">
                <Image
                  src="/images/logo-sm.png"
                  alt="Organization Logo"
                  width={150}
                  height={150}
                  className="mb-4 text-black"
                />
                <h2 className="text-xl">Braniteljska Zadruga</h2>
                <h1 className="text-3xl font-bold text-center text-gray-900">
                  Viribus Unitis
                </h1>
              </div>

              {/* Right side - Contact Information */}
              <div className="md:w-1/2 p-8 bg-gray-50">
                <h2 className="text-2xl font-semibold mb-6 text-gray-900">
                  Kontaktirajte Nas
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-primary" />
                    <span className="text-gray-700">{CONTACT_DATA.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-primary" />
                    <a
                      href={`mailto:${CONTACT_DATA.mail}`}
                      className="text-gray-700 hover:underline"
                    >
                      {CONTACT_DATA.mail}
                    </a>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-2 mt-1 text-primary" />
                    <span className="text-gray-700">
                      Poljana Zdenke Mikin 45
                      <br />
                      Zagreb
                      <br />
                      Hrvatska
                    </span>
                  </div>
                </div>
                <div className="flex-col  items-end space-y-2 mt-8">
                  <h2 className="font-bold ">Opće Informacije</h2>
                  <ul className="space-y-1">
                    <li>
                      <span className="uppercase font-semibold mr-2">
                        Ime:{" "}
                      </span>{" "}
                      Braniteljska zadruga VIRIBUS UNITIS,{" "}
                    </li>
                    <li>
                      <span className="uppercase font-semibold mr-2">
                        Adresa:
                      </span>{" "}
                      Poljana Zdenka Mikine 45, Zagreb,
                    </li>
                    <li>
                      <span className="uppercase font-semibold mr-2">OIB:</span>{" "}
                      08416373619,
                    </li>
                    <li>
                      <span className="uppercase font-semibold mr-2">
                        Upravitelj:
                      </span>{" "}
                      Vitomir Ćavar
                    </li>
                    <li>
                      <span className="uppercase font-semibold mr-2">
                        Banka:
                      </span>{" "}
                      Hrvatska poštanska banka d.d.
                    </li>
                    <li>
                      <span className="uppercase font-semibold mr-2">
                        Broj Računa:
                      </span>{" "}
                      HR8523900011101242348
                    </li>
                    <li>
                      <span className="uppercase font-semibold mr-2">
                        IBAN:
                      </span>{" "}
                      HR85 2390 0011 1012 4234 8
                    </li>
                  </ul>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">
                    Pratite Nas
                  </h3>
                  <SocialIconsList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Naša Misija
              </h3>
              <p className="text-gray-700">
                U Viribus Unitis, naša misija je pružiti podršku hrvatskim
                braniteljima kroz održive projekte i očuvanje vrijednosti za
                koje smo se borili. Kroz zajednički rad i inicijative, stvaramo
                pozitivne promjene u društvu, pomažući našim članovima i
                njihovim obiteljima izgraditi stabilnu i prosperitetnu
                budućnost.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Zašto odabrati nas
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Iskustvo veterana Domovinskog rata</li>
                <li>Fokus na socijalnu i gospodarsku podršku braniteljima</li>
                <li>
                  Održiv razvoj kroz projekte poput radno-duhovnog kampa Anatot
                </li>
                <li>
                  Posvećenost zajedništvu, tradiciji i društvenoj odgovornosti
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default KontaktPage;
