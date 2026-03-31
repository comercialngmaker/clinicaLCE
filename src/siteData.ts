interface SiteData {
  name: string;
  description: string;
  defaultImage: string;
  reservationLink?: string;
  whatsappNumber?: number;
  instagramUrl?: string;
  address?: string;
  procedures: Procedure[];
  results: Result[];
  area: string[];
}

interface Procedure {
  title: string;
  image: string;
  description: string;
}

interface Result {
  title: string;
  sessions: string;
  description: string;
  before: string;
  after: string;
}

const siteData: SiteData = {
  name: "Larissa Carvalho Estética",
  description:
    "Especialista em Estética Corporal e Facial, Tratamentos Personalizados para realçar a sua Autoestima e Bem-estar.",
  defaultImage: "/assets/hero.webp",
  reservationLink:
    "https://www.simplesagenda.com.br/agendamento_m.php?id=d6548031ede849e5c06abd0787704f37",
  whatsappNumber: 5511916876144,
  instagramUrl: "https://www.instagram.com/clinicalarissacarvalhoestetica/",
  address: "Av. Exemplo, 123 - São Paulo, SP",
  procedures: [
    {
      title: "Body Sculpt",
      image: "/assets/procedures/body-sculpt/image.webp",
      description:
        "O Body Sculpt é um método personalizado para reduzir gordura localizada e medidas, esculpindo o contorno corporal com tecnologias como ultracavitação, radiofrequência e ultrassom, podendo ser aplicado no abdômen, nas costas, flancos, braços e pernas.",
    },
    {
      title: "Detóx Corporal Redux",
      image: "/assets/procedures/detox-corporal-redux/image.webp",
      description:
        "O Detox Corporal Redux une drenagem linfática e manta térmica, auxiliando na redução de inchaço, eliminação de toxinas e desintoxicação do corpo.",
    },
    {
      title: "Drenagem Linfática",
      image: "/assets/procedures/drenagem-linfatica/image.webp",
      description:
        "A drenagem linfática é uma massagem terapêutica que estimula o sistema linfático a eliminar líquidos e toxinas, reduzindo o inchaço, aliviando desconfortos e promovendo bem-estar e relaxamento.",
    },
    {
      title: "Firm UP Facial",
      image: "/assets/procedures/firm-up-facial/image.webp",
      description:
        "O Firm UP Facial é um protocolo de rejuvenescimento com cosméticos e tecnologias como LED e radiofrequência, que estimulam colágeno e elastina, melhorando textura, circulação e firmeza, sem cortes ou agulhas.",
    },
    {
      title: "Limpeza de Pele",
      image: "/assets/procedures/limpeza-de-pele/image.webp",
      description:
        "A Limpeza de Pele remove cravos, impurezas e células mortas, melhora a absorção de produtos e proporciona uma pele mais saudável e radiante.",
    },
    {
      title: "Massagem Relaxante",
      image: "/assets/procedures/massagem-relaxante/image.webp",
      description:
        "A massagem relaxante combina movimentos suaves e firmes que promovem relaxamento muscular, melhoram a circulação e aliviam tensões e estresse, proporcionando bem-estar e tranquilidade.",
    },
    {
      title: "Revitalização Facial",
      image: "/assets/procedures/revitalizacao-facial/image.webp",
      description:
        "A Revitalização Facial auxilia na renovação, hidratação e nutrição da pele, devolvendo viço, luminosidade e firmeza.",
    },
    {
      title: "Taping Pós-Parto",
      image: "/assets/procedures/taping-pos-parto/image.webp",
      description:
        'O Taping pós parto proporciona maior conforto e segurança ao reduzir a sensação de "abdômen solto" no pós parto, além de auxiliar no tratamento da diástase abdominal, no alívio de dores, redução de inchaço e o volume abdominal.',
    },
  ],
  results: [
    {
      title: "Limpeza de Pele",
      sessions: "1 sessão - resultado imediato",
      description:
        "Protocolo personalizado de acordo com a necessidade da pele.",
      before: "/assets/results/limpeza-de-pele/before.webp",
      after: "/assets/results/limpeza-de-pele/after.webp",
    },
    {
      title: "Limpeza de Pele",
      sessions: "1 sessão - resultado imediato",
      description:
        "Protocolo personalizado de acordo com a necessidade da pele.",
      before: "/assets/results/limpeza-de-pele-2/before.webp",
      after: "/assets/results/limpeza-de-pele-2/after.webp",
    },
    {
      title: "Body Sculpt - Abdômen",
      sessions: "6 sessões",
      description:
        "Protocolo personalizado para gordura localizada: radiofrequência, ultracavitação e correntes combinadas.",
      before: "/assets/results/body-sculpt-abdomen/before.webp",
      after: "/assets/results/body-sculpt-abdomen/after.webp",
    },
    {
      title: "Body Sculpt - Abdômen",
      sessions: "3 sessões - 1º retorno do protocolo (resultado parcial)",
      description:
        "Protocolo personalizado para gordura localizada: ultrassom e correntes combinadas.",
      before: "/assets/results/body-sculpt-abdomen-2/before.webp",
      after: "/assets/results/body-sculpt-abdomen-2/after.webp",
    },
    {
      title: "Body Sculpt - Flancos e Costas",
      sessions: "4 sessões",
      description:
        "Protocolo personalizado para gordura localizada e flacidez: radiofrequência, ultracavitação e correntes combinadas.",
      before: "/assets/results/body-sculpt-flancos-costas/before.webp",
      after: "/assets/results/body-sculpt-flancos-costas/after.webp",
    },
    {
      title: "Body Sculpt - Flancos e Costas",
      sessions: "4 sessões",
      description:
        "Protocolo personalizado para gordura localizada: ultracavitação, ultrassom e correntes combinadas.",
      before: "/assets/results/body-sculpt-flancos-costas-2/before.webp",
      after: "/assets/results/body-sculpt-flancos-costas-2/after.webp",
    },
    {
      title: "Detóx Corporal",
      sessions: "1 sessão - resultado imediato",
      description: "Protocolo com manta térmica e drenagem linfática.",
      before: "/assets/results/detox-corporal-redux/before.webp",
      after: "/assets/results/detox-corporal-redux/after.webp",
    },
    {
      title: "Drenagem Linfática",
      sessions: "1 sessão - resultado imediato",
      description:
        "Protocolo de drenagem linfática com foco em desinchar e relaxar o corpo.",
      before: "/assets/results/drenagem-linfatica/before.webp",
      after: "/assets/results/drenagem-linfatica/after.webp",
    },
  ],
  area: [
    "/assets/area/1.webp",
    "/assets/area/2.webp",
    "/assets/area/3.webp",
    "/assets/area/4.webp",
  ],
};

export default siteData;
