import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export const DonacijaBanner = () => {
  return (
    <div className="mt-12 container mx-auto bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Donirajte i pomognite</h2>
      <p className="mb-4">
        Vaša donacija pomaže nam u ostvarenju naših ciljeva i pružanju podrške
        braniteljima i njihovim obiteljima. Svaka donacija, bez obzira na iznos,
        značajno doprinosi našem radu i misiji.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Informacije za donaciju
          </h3>
          <p>Braniteljska zadruga Viribus unitis</p>
          <p>Poljana Zdenka Mikine 45</p>
          <p>10 000 Zagreb</p>
          <p>IBAN: HR85 2390 0011 1012 4234 8</p>
          <p>Opis plaćanja: Donacija</p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/images/administrativno/qr-kod-za-placanje.png"
            alt="QR kod za donaciju"
            width={300}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};
