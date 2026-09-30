export const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5588992039906&text&type=phone_number&app_absent=0";
export const INSTAGRAM_URL = "https://www.instagram.com/criaker/";
export const REVIEWS_URL = "https://share.google/hIJnLf6iqNp5hjBEE";

export const services = [
  { icon: "target", title: "Planejamento Estratégico", video: "/assets/Diretoria.mp4", videoMobile: "/assets/mobile/Diretoria.mp4", poster: "/assets/video-covers/Diretoria.webp" },
  { icon: "rocket", title: "Criação & Branding", video: "/assets/Designer_grafico.mp4", videoMobile: "/assets/mobile/Designer_grafico.mp4", poster: "/assets/video-covers/Designer_grafico.webp" },
  { icon: "video", title: "Produção de Vídeos", video: "/assets/Videomaker.mp4", videoMobile: "/assets/mobile/Videomaker.mp4", poster: "/assets/video-covers/Videomaker.webp" },
  { icon: "calendar", title: "Gestão de Eventos", video: "/assets/Gestao_de_Eventos.mp4", videoMobile: "/assets/mobile/Gestao_de_Eventos.mp4", poster: "/assets/video-covers/Gestao_de_Eventos.webp" },
  { icon: "award", title: "Performance Digital", video: "/assets/Analista_de_Marketing.mp4", videoMobile: "/assets/mobile/Analista_de_Marketing.mp4", poster: "/assets/video-covers/Analista_de_Marketing.webp" },
  { icon: "mic", title: "Ações de Impacto", video: "/assets/Acoes_de_Impacto.mp4", videoMobile: "/assets/mobile/Acoes_de_Impacto.mp4", poster: "/assets/video-covers/Acoes_de_Impacto.webp" },
] as const;

export type Client = { name: string; since: number; logo: string; description: string; instagram?: string };

export const clients: readonly Client[] = [
  {
    name: "Cariri Gás", since: 2024, logo: "/assets/clientes-atuais/cariri-gas.webp", instagram: "https://www.instagram.com/caririgasbutano/",
    description: "Uma marca presente na rotina das famílias e negócios, levando energia com praticidade e confiança. 1º Lugar no PEN como Melhor Revenda do Brasil, sendo Revendedora Autorizada Nacional Gás há quase 40 anos.",
  },
  {
    name: "Balneário do Caldas", since: 2026, logo: "/assets/clientes-atuais/balneario-do-caldas.webp", instagram: "https://www.instagram.com/balneariodocaldas.oficial/",
    description: "Natureza, lazer e águas termais em um só lugar, conectando tradição, bem-estar e experiências no coração do Cariri.",
  },
  {
    name: "Kariri Com K", since: 2024, logo: "/assets/clientes-atuais/kariri-com-k.webp", instagram: "https://www.instagram.com/kariricomk/",
    description: "Uma marca que transforma tradição, identidade e cultura do Cariri em experiências que atravessam gerações há mais de 50 anos, sendo a verdadeira Cachaça do Vigário na Festa de Santo Antônio de Barbalha.",
  },
  {
    name: "Yolanda Gifoni", since: 2024, logo: "/assets/clientes-atuais/yolanda-gifoni.webp", instagram: "https://www.instagram.com/drayolandagifoni/",
    description: "Médica dermatologista há mais de 20 anos, com uma abordagem que une beleza, elegância e naturalidade. Atua com protocolos exclusivos, tecnologia e cuidado para resultados seguros, eficazes e duradouros.",
  },
  {
    name: "Panorama Hotel", since: 2023, logo: "/assets/clientes-atuais/panorama-hotel.webp", instagram: "https://www.instagram.com/panoramahoteljua/",
    description: "Hospitalidade, conforto e praticidade para quem vive, visita e experiencia o Cariri. Há mais de 40 anos fazendo história e sendo tradição na região.",
  },
  {
    name: "Comgelo", since: 2023, logo: "/assets/clientes-atuais/comgelo.webp", instagram: "https://www.instagram.com/comgelofabrica/",
    description: "Há quase 20 anos atuando com foco em qualidade, segurança e excelência, fabricando gelo sob rigorosos controles e distribuindo marcas como Mansão Maromba, Coco Leve, Busca Brisa e outras.",
  },
  {
    name: "Bill Baterias", since: 2023, logo: "/assets/clientes-atuais/bill-baterias.webp", instagram: "https://www.instagram.com/billbaterias24hs/",
    description: "58 anos de confiança e energia para manter veículos e negócios sempre em movimento. É tradição que atravessa gerações.",
  },
  {
    name: "Revigore", since: 2024, logo: "/assets/clientes-atuais/revigore.webp", instagram: "https://www.instagram.com/revigore_/",
    description: "Há quase 10 anos se destaca no Cariri com moda fitness, íntima e banho, atendendo atacado e varejo e levando seus produtos para todo o Brasil.",
  },
  {
    name: "Ecco Cariri", since: 2023, logo: "/assets/clientes-atuais/ecco-cariri.webp", instagram: "https://www.instagram.com/eccocariri/",
    description: "Uma marca formada por três cirurgiões cardíacos — Dr. Paulo | Dr. Samuel | Dr. Anderson — que reúne conhecimento, experiência e cuidado especializado na área cardiovascular.",
  },
  {
    name: "Dr. Samuel", since: 2025, logo: "/assets/clientes-atuais/dr-samuel.webp", instagram: "https://www.instagram.com/samuelseduardo/",
    description: "Cirurgião cardiovascular de alta complexidade que une conhecimento, cuidado e experiência para construir uma relação de confiança com seus pacientes.",
  },
  {
    name: "Karirilar", since: 2026, logo: "/assets/clientes-atuais/karirilar.webp", instagram: "https://www.instagram.com/karirilaroficial/",
    description: "Tradição caririense há 30 anos com utilidades, peças para fogão e mais. Tudo para sua casa e dia a dia.",
  },
  {
    name: "Chapokôco", since: 2026, logo: "/assets/clientes-atuais/chapokoco.webp", instagram: "https://www.instagram.com/chapokocotropicalbar/",
    description: "Uma experiência que mistura a descontração do boteco, a alma tropical e uma nova forma de viver a gastronomia.",
  },
  {
    name: "Casa de Vó", since: 2021, logo: "/assets/clientes-atuais/casa-de-vo.webp",
    description: "Entre aromas, temperos e sabores, uma marca que transforma o sabor e o acolhimento de casa em uma experiência afetiva e memorável.",
  },
] as const;

export type TeamMember = { name: string; role: string; image: string; imageSmall?: string; quote?: string; bio?: string };

export const team: readonly TeamMember[] = [
  {
    name: "Társila Santana", role: "CEO & Diretora de Marketing",
    quote: "Onde existe um desafio, encontro uma oportunidade de posicionamento.",
    bio: "À frente da estratégia da CriAker, transforma problemas de negócio em direcionamentos claros, estratégias inteligentes e oportunidades de crescimento. É quem conecta visão, mercado, comportamento e comunicação para descobrir não apenas o que uma marca deve fazer, mas por que, como e para quem fazer.",
    image: "/assets/tarsila-santana-full.webp", imageSmall: "/assets/tarsila-santana-480.webp",
  },
  {
    name: "Rita Soares", role: "CEO & Diretora de Comunicação",
    quote: "Porque toda marca tem algo a dizer. O nosso trabalho é fazer as pessoas quererem ouvir.",
    bio: "À frente da comunicação da CriAker, cuida para que cada marca tenha personalidade, presença e uma voz própria. É quem transforma conceitos em narrativas, campanhas e experiências capazes de despertar atenção e criar conexão, fazendo com que a comunicação deixe de ser apenas vista e passe a ser executada.",
    image: "/assets/rita-soares-full.webp", imageSmall: "/assets/rita-soares-480.webp",
  },
  { name: "Theresa Pedrosa", role: "Analista de Marketing", quote: "É quem mergulha no negócio para entender onde a marca está, onde precisa chegar e o que precisa ser feito para chegar lá.", bio: "Conecta estratégia, conteúdo, campanhas e resultados, organizando as ideias e transformando desafios em caminhos claros para a marca crescer e se posicionar.", image: "/assets/theresa-pedrosa-full.webp", imageSmall: "/assets/theresa-pedrosa-480.webp" },
  {
    name: "Italo Marcel", role: "Designer Gráfico", quote: "Quem transforma estratégia em imagem.",
    bio: "É quem dá forma visual às ideias da marca. Cria peças que comunicam, despertam interesse e fortalecem o posicionamento, cuidando para que cada detalhe tenha intenção e faça a marca ser reconhecida, lembrada e percebida da maneira certa.",
    image: "/assets/italo-marcel-full.webp", imageSmall: "/assets/italo-marcel-480.webp",
  },
  {
    name: "Igo Maceno", role: "Videomaker Mobile", quote: "Quem transforma ideias em conteúdo que prende o olhar.",
    bio: "É quem coloca a estratégia em movimento. Capta, dirige e edita vídeos pensados para chamar atenção, transmitir a essência da marca e criar conexão com o público. Porque não basta gravar bonito, cada take precisa ter um propósito.",
    image: "/assets/igo-maceno-full.webp", imageSmall: "/assets/igo-maceno-480.webp",
  },
] as const;

export type Testimonial = { title: string; kind: string; video: string; poster: string };

export const testimonials: readonly Testimonial[] = [
  {
    title: "Comgelo & Bill Baterias", kind: "Depoimento",
    video: "/assets/depoimentos/comgelo-bill.mp4", poster: "/assets/depoimentos/comgelo-bill.webp",
  },
  {
    title: "Kariri Com K", kind: "Depoimento",
    video: "/assets/depoimentos/kariri-com-k.mp4", poster: "/assets/depoimentos/kariri-com-k.webp",
  },
  {
    title: "Yolanda Gifoni", kind: "Depoimento",
    video: "/assets/depoimentos/yolanda-gifoni.mp4", poster: "/assets/depoimentos/yolanda-gifoni.webp",
  },
  {
    title: "Kariri Com K", kind: "Feedback",
    video: "/assets/depoimentos/kariri-com-k-feedback.mp4", poster: "/assets/depoimentos/kariri-com-k-feedback.webp",
  },
] as const;
export const journeyParagraphs = [
  "Há quase 10 anos, a CriAker constrói sua trajetória no mercado com um propósito que vai além de comunicar: ajudar marcas a encontrarem seu espaço, fortalecerem seu posicionamento e se tornarem relevantes para o mercado.",
  "Ao longo dessa jornada, desenvolvemos uma atuação pautada por estratégia, criatividade, responsabilidade e excelência em cada projeto. Foram anos de aprendizados, desafios, conquistas e, principalmente, relações construídas com marcas que confiaram à CriAker a missão de transformar ideias em comunicação, experiências e resultados.",
  "Hoje, somos uma agência que entende que estar presente é diferente de se posicionar. Por isso, nosso trabalho conecta estratégia, criação, conteúdo, audiovisual, campanhas e experiências para construir marcas que não apenas aparecem, mas que são percebidas, reconhecidas e lembradas.",
  "Em 2025, a CriAker iniciou uma nova fase de sua história. Társila Santana e Rita Soares assumiram a sociedade e a liderança da agência, unindo diferentes perspectivas, experiências e visões para conduzir a CriAker a novos horizontes. Essa nova estrutura fortaleceu nossa busca por inovação, colaboração e uma atuação cada vez mais estratégica.",
  "Seguimos olhando para o mercado com inquietação, curiosidade e espírito empreendedor. Porque, para nós, cada novo desafio representa uma oportunidade de pensar diferente, criar melhor e encontrar novas formas de posicionar marcas.",
];
