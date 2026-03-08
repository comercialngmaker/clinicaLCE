interface SiteData {
  name: string;
  description: string;
  defaultImage: string;
  googleAnalyticsId: string;
  googleVerification: string;
  whatsappUrl?: string;
  instagramUrl?: string;
  address?: string;
  procedures: Procedure[];
  results: Result[];
}

interface Procedure {
  title: string;
  image: string;
  description: string;
}

interface Result {
  title: string;
  sessions: string;
  before: string;
  after: string;
}

const siteData: SiteData = {
  name: "Larissa Carvalho Estética",
  description:
    "Especialista em Estética Corporal e Facial, Tratamentos Personalizados para realçar a sua Autoestima e Bem-estar.",
  defaultImage: "/assets/hero.webp",
  googleAnalyticsId: "G-PVXZMVJM1K",
  googleVerification: "UZNkwBWtSx6Ejk5VE4GXm14B6bea4x_UGRzz2io-mi4",
  whatsappUrl: "https://wa.me/5511999999999",
  instagramUrl: "https://www.instagram.com/clinicalarissacarvalhoestetica",
  address: "Av. Exemplo, 123 - São Paulo, SP",
  procedures: [
    {
      title: "Extensão de Cílios",
      image: "",
      description:
        "Técnica moderna para cílios volumosos e naturais. Ideal para quem busca definição e durabilidade.",
    },
    {
      title: "Sobrancelhas",
      image: "",
      description:
        "Design e preenchimento com técnicas que valorizam seu rosto e garantem harmonia natural.",
    },
    {
      title: "Lábios",
      image: "",
      description:
        "Tratamentos que deixam os lábios hidratados, definidos e com aparência saudável.",
    },
  ],
  results: [
    {
      title: "Limpeza de Pele",
      sessions: "1 sessão",
      before: "/assets/procedures/limpeza-de-pele/antes.webp",
      after: "/assets/procedures/limpeza-de-pele/depois.webp",
    },
    {
      title: "Limpeza de Pele 2",
      sessions: "1 sessão",
      before: "/assets/procedures/limpeza-de-pele-2/antes.webp",
      after: "/assets/procedures/limpeza-de-pele-2/depois.webp",
    },
    {
      title: "Body Sculpt Abdômen",
      sessions: "6 sessões",
      before: "/assets/procedures/body-sculpt-abdomen/antes.webp",
      after: "/assets/procedures/body-sculpt-abdomen/depois.webp",
    },
    {
      title: "Detóx Corporal",
      sessions: "1 sessão",
      before: "/assets/procedures/detox-corporal/antes.webp",
      after: "/assets/procedures/detox-corporal/depois.webp",
    },
    {
      title: "Drenagem Linfática",
      sessions: "1 sessão",
      before: "/assets/procedures/drenagem-linfatica/antes.webp",
      after: "/assets/procedures/drenagem-linfatica/depois.webp",
    },
  ],
};

export default siteData;
