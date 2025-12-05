"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import BenefitBadge from "./benefit-badge";
import HeroImage from "./hero-image";

export default function Hero() {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 lg:gap-12 mb-12 md:mb-16 overflow-x-auto">
          <BenefitBadge icon="📢" label="Publicação gratuita" />
          <BenefitBadge icon="✓" label="Satisfação garantida" />
          <BenefitBadge icon="🔒" label="Pagamentos protegidos" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-700 mb-6 leading-tight text-balance">
              Freelancers qualificados prontos para trabalhar no seu projeto
              hoje mesmo
            </h1>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-8 text-pretty">
              Conecte-se com milhares de freelancers no seu idioma e fuso
              horário. Pague de forma segura e desenvolva seus projetos de
              tecnologia, marketing digital, design e muito mais.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <Button
                size="lg"
                onClick={() => console.log("Contratar freelancers")}
              >
                <Link href="/criar">Quero contratar freelancers</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 bg-transparent"
                asChild
              >
                <Link href="/trabalhar">
                  Você quer trabalhar?
                  <span>→</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
}
