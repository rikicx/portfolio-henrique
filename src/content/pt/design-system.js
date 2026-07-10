export default {
  seo: {
    title: 'Design System — Henrique Silva',
    description:
      'Como o sistema de design deste portfólio conecta produto, código e Figma — fundamentos, princípios e decisões.',
    path: '/design-system',
    lang: 'pt',
    robots: 'noindex, nofollow',
  },
  hero: {
    heading: 'Design System',
    lead: 'A linguagem editorial deste portfólio, documentada: preto e branco, tipografia expressiva, grid rigoroso e espaço negativo generoso — organizados como sistema reutilizável.',
  },
  overview: {
    title: 'Visão geral',
    paragraphs: [
      'Este Design System documenta o que já está em produção — não é um sistema paralelo nem uma proposta à espera de validação. Cada token, componente e decisão citados aqui existem hoje em henriquesilva.design.',
      'A documentação segue uma ordem de prioridade: o produto publicado manda; o código na branch main confirma como isso foi implementado; o arquivo de Design System no Figma registra a decisão e o raciocínio por trás dela. Quando as três fontes divergem, a divergência é registrada aqui como parte do sistema — não escondida.',
      'Esse processo existe porque consistência visual não se mantém sozinha. Ela depende de rastrear como uma decisão de design chega ao código, e de revisar com honestidade onde o sistema ainda tem lacunas.',
    ],
  },
  principles: {
    title: 'Princípios',
    items: [
      {
        number: '01',
        title: 'Preto e branco decide',
        text: 'A paleta é neutra por decisão, não por ausência. O contraste máximo entre preto e branco é a identidade — cor decorativa não entra sem uma razão de conteúdo.',
      },
      {
        number: '02',
        title: 'A tipografia é a imagem',
        text: 'Títulos em escala display (72–320px) carregam a composição. Quando o texto é o protagonista, imagens e ornamentos cedem espaço.',
      },
      {
        number: '03',
        title: 'Espaço negativo é estrutura',
        text: 'O respiro entre seções (96–120px) e as pausas editoriais fazem parte do ritmo de leitura. Densidade é controlada, nunca acidental.',
      },
      {
        number: '04',
        title: 'Grid rigoroso, composição assimétrica',
        text: 'O grid de 1440px com margens de 48px é a base; a assimetria acontece dentro dele, nunca contra ele.',
      },
      {
        number: '05',
        title: 'Estados discretos, foco visível',
        text: 'Hover muda tom (preto → cinza 600), nunca forma. Foco por teclado é sempre visível: outline 2px preto, offset 3px.',
      },
      {
        number: '06',
        title: 'Motion com propósito',
        text: 'Reveals curtos (320ms, easing suave), staggers moderados, e respeito integral a prefers-reduced-motion. Nada anima por decoração.',
      },
    ],
  },
}
