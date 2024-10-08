"use client";
import React from "react";
import { Button } from "../ui/button";
import { Download } from "lucide-react";

export const PravilaZadruge = () => {
  return (
    <div className="mt-12 bg-gray-100 p-6 rounded-lg" id="pravilnik">
      <h2 className="text-2xl font-bold mb-4">Pravila zadruge</h2>
      <p className="mb-4">
        Naša zadruga djeluje prema jasno definiranim pravilima koja osiguravaju
        transparentnost, pravednost i učinkovitost u našem radu. Ova pravila su
        temelj našeg zajedništva i uspjeha.
      </p>
      <p className="mb-4">Neka od ključnih pravila uključuju:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Poštovanje i međusobno uvažavanje svih članova zadruge</li>
        <li>Redovito sudjelovanje u aktivnostima zadruge</li>
        <li>Transparentno financijsko poslovanje</li>
        <li>Očuvanje vrijednosti Domovinskog rata</li>
        <li>Kontinuirano unapređenje kvalitete naših proizvoda i usluga</li>
      </ul>
      <p className="mb-4">
        Za detaljniji uvid u pravila naše zadruge, pozivamo vas da preuzmete naš
        pravilnik u PDF formatu.
      </p>
      <Button
        className="flex items-center"
        onClick={() => {
          window.open(
            "/pdf/pravila-braniteljske-zadruge-viribus-unitis.pdf",
            "_blank"
          );
        }}
      >
        <Download className="mr-2 h-4 w-4" />
        Preuzmi pravilnik (PDF)
      </Button>
    </div>
  );
};
