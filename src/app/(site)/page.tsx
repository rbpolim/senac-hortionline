import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      <section className="pt-8 pb-16 text-center">
        <div className="relative max-w-2xl mx-auto">
          <h2 className="relative z-10 text-6xl md:text-8xl font-black text-center font-sans bg-gradient-to-r from-orange-900 via-orange-500 to-orange-900 bg-clip-text text-transparent leading-tight">
            Orgânico,
          </h2>
          <h2 className="relative z-10 text-5xl md:text-8xl font-black text-center font-sans bg-gradient-to-r from-orange-900 via-orange-400 to-orange-900 bg-clip-text text-transparent leading-tight">
            Sustentável,
          </h2>
          <h2 className="text-2xl font-black md:text-6xl  text-center font-sans text-orange-700">
            Fresco!
          </h2>
          <p className="mt-8 text-muted-foreground">
            Produtos cultivados com amor e respeito à natureza, entregues
            diretamente do campo para a sua mesa.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="w-full mt-12"
          >
            <Link href="/sellers">
              Comece Agora
              <ArrowUpRight className="w-6 h-6" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="bg-green-700 px-6 py-12 text-center text-white">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold">
            Pronto para experimentar o melhor da alimentação orgânica? 😊
          </h2>
          <p className="mt-4 text-lg">
            Faça seu pedido hoje e receba os melhores produtos direto da fazenda
            para sua mesa.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800">Como Funciona</h2>
          <p className="mt-4 text-lg text-gray-600">
            Veja como é fácil ter alimentos frescos e orgânicos em sua casa.
          </p>

          <div className="mt-8 grid grid-cols-1 items-center justify-center sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-green-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-green-700">
                Escolha Seus Produtos
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Explore nossa seleção de produtos frescos e orgânicos.
              </p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-green-700">
                Faça o Pedido
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Adicione ao carrinho e finalize a compra. Simples assim!
              </p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-green-700">
                Receba na Sua Casa
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Entregamos produtos orgânicos frescos direto na sua porta.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 text-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-green-800">
            Por que escolher nossa plataforma?
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Oferecemos mais do que produtos orgânicos, entregamos um compromisso
            com a sua saúde e com o planeta.
          </p>
          <div className="mt-8 space-y-14">
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Image
                  src="/salad.png"
                  alt="Fresh products"
                  className="object-cover"
                  width={80}
                  height={80}
                />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-green-700">
                  Produtos Frescos
                </h3>
                <p className="text-sm text-muted-foreground">
                  Direto do campo, garantindo o sabor e os nutrientes naturais.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Image
                  src="/planet.png"
                  alt="Fresh products"
                  className="object-cover"
                  width={80}
                  height={80}
                />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-green-700">
                  Sustentabilidade
                </h3>
                <p className="text-muted-foreground text-sm">
                  Cultivo responsável que respeita o meio ambiente.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Image
                  src="/organic.png"
                  alt="Fresh products"
                  className="object-cover"
                  width={80}
                  height={80}
                />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-green-700">100% Orgânico</h3>
                <p className="text-muted-foreground text-sm">
                  Produtos certificados, livres de agrotóxicos e químicos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
