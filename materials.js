const materials = [
    {
      id: 1,
      title: "Granito Arabesco",
      description: "Estilo único com desenhos naturais e marcantes.",
      imageUrl: "/img/gr-ara.jpg",
      category: "Granito",
    },

  {
    id: 2,
    title: "Granito Cinza Andorinha",
    description: "Cinza clássico, perfeito para áreas externas ou internas.",
    imageUrl: "/img/gr-and.jpeg",
    category: "Granito",
  },
  {
    id: 3,
    title: "Granito Café Imperial",
    description: "Marrom intenso com elegância natural.",
    imageUrl: "/img/gr-caf.jpg",
    category: "Granito",
  },
  {
    id: 4,
    title: "Granito Cabernet",
    description: "Tons marcantes que remetem à sofisticação do vinho.",
    imageUrl: "/img/gr-ceb.jpg",
    category: "Granito",
  },
  {
    id: 5,
    title: "Granito Cinza Corumba",
    description: "Cinza discreto e elegante para ambientes variados.",
    imageUrl: "/img/gr-cinz-coru.jpg",
    category: "Granito",
  },
  {
    id: 6,
    title: "Granito Branco Dallas",
    description: "Branco refinado com toques suaves de elegância.",
    imageUrl: "/img/gr-dallas.jpg",
    category: "Granito",
  },
  {
    id: 7,
    title: "Granito Branco Itaúnas",
    description: "Elegância e suavidade com uma tonalidade clara que combina com qualquer ambiente.",
    imageUrl: "/img/gr-ita.jpg",
    category: "Granito",
  },
  {
    id: 8,
    title: "Granito Branco Itabira",
    description: "Tons quentes e terrosos para ambientes aconchegantes.",
    imageUrl: "/img/gr-itabira.jpg",
    category: "Granito",
  },
  {
    id: 9,
    title: "Granito Marrom Tabaco",
    description: "Marrom robusto com charme natural.",
    imageUrl: "/img/gr-mar.jpg",
    category: "Granito",
  },
  {
    id: 10,
    title: "Granito Pitaya",
    description: "Visual único com tonalidades exclusivas e marcantes.",
    imageUrl: "/img/gr-pit.jpg",
    category: "Granito",
  },
  {
    id: 11,
    title: "Granito São Gabriel",
    description: "Preto versátil e elegante, ideal para qualquer projeto.",
    imageUrl: "/img/gr-sao.jpg",
    category: "Granito",
  },
  {
    id: 12,
    title: "Granito Branco Siena",
    description: "Branco sofisticado com nuances sutis, perfeito para ambientes modernos.",
    imageUrl: "/img/gr-siena.jpg",
    category: "Granito",
  },
  {
    id: 13,
    title: "Granito Verde Ubatuba",
    description: "Verde escuro com brilho intenso, perfeito para cozinhas e banheiros.",
    imageUrl: "/img/gr-uba.jpg",
    category: "Granito",
  },
  {
    id: 14,
    title: "Granito Preto Absoluto",
    description: "Preto puro com sofisticação máxima para projetos modernos.",
    imageUrl: "/img/gr-pabs.jpg",
    category: "Granito",
  },
  {
    id: 15,
    title: "Granito Preto Via Láctea",
    description: "Preto com veios brancos únicos, lembrando a beleza do céu estrelado.",
    imageUrl: "/img/gr-via.jpg",
    category: "Granito",
  },

//marmores//

{
  id: 16,
  title: "Mármore Branco",
  description: "Branco puro, ideal para projetos limpos e modernos.",
  imageUrl: "/img/mr-bra.jpg",
  category: "Mármore",
},
{
  id: 17,
  title: "Mármore Bronze Armani",
  description: "Tons quentes e sofisticados para projetos modernos.",
  imageUrl: "/img/mr-bro.jpg",
  category: "Mármore",
},
{
  id: 18,
  title: "Mármore Calacatta",
  description: "Branco nobre com veios marcantes que destacam qualquer ambiente.",
  imageUrl: "/img/mr-cal.jpg",
  category: "Mármore",
},
{
  id: 19,
  title: "Mármore Carrara",
  description: "Branco clássico com veios suaves, símbolo de elegância atemporal.",
  imageUrl: "/img/mr-car.jpg",
  category: "Mármore",
},
{
  id: 20,
  title: "Mármore Crema Marfil",
  description: "Bege claro e elegante, versátil para qualquer ambiente.",
  imageUrl: "/img/mr-cre.jpg",
  category: "Mármore",
},
{
  id: 21,
  title: "Mármore Griss Armani",
  description: "Cinza sofisticado com visual moderno.",
  imageUrl: "/img/mr-gri.webp",
  category: "Mármore",
},
{
  id: 22,
  title: "Mármore Marrom Imperador Light",
  description: "Marrom claro com veios delicados, ideal para ambientes requintados.",
  imageUrl: "/img/mr-iml.jpg",
  category: "Mármore",
},
{
  id: 23,
  title: "Mármore Marrom Imperador",
  description: "Marrom intenso com veios marcantes.",
  imageUrl: "/img/mr-imp.jpeg",
  category: "Mármore",
},
{
  id: 24,
  title: "Mármore Machiatta Oro",
  description: "Bege com veios dourados, ideal para um toque luxuoso.",
  imageUrl: "/img/mr-macc.jpg",
  category: "Mármore",
},
{
  id: 25,
  title: "Mármore Matarazzo",
  description: "Beleza natural com veios únicos e textura delicada.",
  imageUrl: "/img/mr-mata.jpg",
  category: "Mármore",
},
{
  id: 26,
  title: "Mármore Nero Marquina",
  description: "Preto profundo com veios brancos que exalam sofisticação.",
  imageUrl: "/img/mr-ner.jpeg",
  category: "Mármore",
},
{
  id: 27,
  title: "Mármore Pighes",
  description: "Branco elegante com padrões naturais.",
  imageUrl: "/img/mr-pig.jpg",
  category: "Mármore",
},
{
  id: 28,
  title: "Mármore Travertino Romano Bruto",
  description: "Versão natural para um visual rústico.",
  imageUrl: "/img/mr-tra-rom-br.jpg",
  category: "Mármore",
},
{
  id: 29,
  title: "Mármore Travertino Romano",
  description: "Clássico com textura única, perfeito para projetos elegantes.",
  imageUrl: "/img/mr-tra-rom.jpg",
  category: "Mármore",
},
{
  id: 30,
  title: "Mármore Travertino",
  description: "Visual rústico e sofisticado, perfeito para áreas internas e externas.",
  imageUrl: "/img/mr-tra.jpg",
  category: "Mármore",
},
{
  id: 31,
  title: "Mármore Botticino",
  description: "Bege clássico com um toque de elegância.",
  imageUrl: "/img/mr-bott.jpg",
  category: "Mármore",
},
{
  id: 32,
  title: "Mármore Branco Paraná",
  description: "Branco sofisticado com nuances sutis.",
  imageUrl: "/img/mr-bra-pr.jpg",
  category: "Mármore",
},

//quartzos//

{
  id: 32,
  title: "Quartzo Ariston",
  description: "Branco sofisticado para projetos clean.",
  imageUrl: "/img/qt-aris.jpg",
  category: "Quartzo",
},
{
  id: 33,
  title: "Quartzo Calacatta Gold",
  description: "Branco elegante com veios dourados exclusivos.",
  imageUrl: "/img/qt-cal-g.webp",
  category: "Quartzo",
},
{
  id: 34,
  title: "Quartzo Calacatta",
  description: "Branco clássico com veios marcantes.",
  imageUrl: "/img/qt-cal.jpg",
  category: "Quartzo",
},
{
  id: 35,
  title: "Quartzo Cinza Stellar",
  description: "Cinza com partículas brilhantes que destacam o espaço.",
  imageUrl: "/img/qt-cinz-st.jpg",
  category: "Quartzo",
},
{
  id: 36,
  title: "Quartzo Cinza",
  description: "Cinza neutro e funcional para qualquer ambiente.",
  imageUrl: "/img/qt-cinz.jpg",
  category: "Quartzo",
},
{
  id: 37,
  title: "Quartzo Concrete",
  description: "Cinza concreto, perfeito para um visual industrial.",
  imageUrl: "/img/qt-conc.jpg",
  category: "Quartzo",
},
{
  id: 38,
  title: "Quartzo Diamond Gray",
  description: "Cinza brilhante com um toque refinado.",
  imageUrl: "/img/qt-dimon-g.jpg",
  category: "Quartzo",
},
{
  id: 39,
  title: "Quartzo Diamond Sand",
  description: "Bege claro com brilho natural.",
  imageUrl: "/img/qt-dimon-sa.jpg",
  category: "Quartzo",
},
{
  id: 40,
  title: "Quartzo Kensho",
  description: "Cinza neutro com toque contemporâneo.",
  imageUrl: "/img/qt-ken.webp",
  category: "Quartzo",
},
{
  id: 41,
  title: "Quartzo Sky White",
  description: "GrBranco com tonalidades suaves que lembram o céu.",
  imageUrl: "/img/qt-skyw.webp",
  category: "Quartzo",
},
{
  id: 42,
  title: "Quartzo Tigris Sand",
  description: "Tons terrosos que trazem aconchego ao ambiente.",
  imageUrl: "/img/qt-tigris.jpg",
  category: "Quartzo",
},
{
  id: 43,
  title: "Quartzo Unsui",
  description: "Elegância em tons claros com sutileza e modernidade.",
  imageUrl: "/img/qt-uns.jpg",
  category: "Quartzo",
},
{
  id: 44,
  title: "Quartzo White Led",
  description: "Branco luminoso que ilumina qualquer ambiente.",
  imageUrl: "/img/qt-whi-led.jpeg",
  category: "Quartzo",
},
{
  id: 45,
  title: "Quartzo White Stellar",
  description: "Branco com partículas brilhantes, criando um efeito sofisticado.",
  imageUrl: "/img/qt-whi-st.jpeg",
  category: "Quartzo",
},
{
  id: 46,
  title: "Quartzo White Storm",
  description: "GBranco com textura sutil, perfeito para projetos modernos.",
  imageUrl: "/img/qt-whi-sto.webp",
  category: "Quartzo",
},
{
  id: 47,
  title: "Quartzo White",
  description: "Branco puro e versátil, ideal para qualquer espaço.",
  imageUrl: "/img/qt-whi.jpg",
  category: "Quartzo",
},
{
  id: 48,
  title: "Quartzo Arene",
  description: "Bege moderno com textura sofisticada.",
  imageUrl: "/img/qt-arene.jpg",
  category: "Quartzo",
},

//quartzitos//

{
  id: 49,
  title: "Quartzito San Rafaello",
  description: "Textura marcante e tonalidades únicas que exalam sofisticação.",
  imageUrl: "/img/qz-san.jpeg",
  category: "Quartzito",
},
{
  id: 50,
  title: "Quartzito Taj Mahal",
  description: "Bege claro com veios delicados, perfeito para ambientes luxuosos.",
  imageUrl: "/img/qz-taj.jpg",
  category: "Quartzito",
},
{
  id: 51,
  title: "Quartzito Arabescasatto",
  description: "Padrões naturais impressionantes, combinando beleza e exclusividade.",
  imageUrl: "/img/qz-arabescasatto.jpg",
  category: "Quartzito",
},
    // ... (todos os outros materiais do array original)
    {
      id: 52,
      title: "Quartzito Mont Blanc",
      description: "Branco sofisticado com veios suaves, ideal para projetos elegantes.",
      imageUrl: "/img/qz-mont.jpeg",
      category: "Quartzito",
    },
  ];