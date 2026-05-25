export interface DocumentSection {
  title: string;
  anchor: string;
  content: string;
}

export interface DocumentFile {
  title: string;
  href: string;
  content?: string;
  sections?: DocumentSection[];
}

export interface FolderData {
  description: string;
  subfolders: Record<string, DocumentFile[]>;
}

export type DirectoryData = Record<string, FolderData>;

export interface RootDocument {
  title: string;
  slug: string;
  fileUrl: string;
  destaque: boolean;
  description?: string;
}

export const ROOT_DOCUMENTS: RootDocument[] = [
  /*
  { 
    title: "Apresentação do Portal da Greve (PG)", 
    slug: "apresentacao-do-portal-da-greve",
    fileUrl: "/Documentos PG (Portal da greve)/Apresentação do Portal da Greve o (PG).zip",
    destaque: false,
    description: "Visão geral e objetivos do Portal da Greve."
  },
  */
  {
    title: "A semana decisiva da greve",
    slug: "a-semana-decisiva-da-greve",
    fileUrl: "/Documentos PG (Portal da greve)/A SEMANA DECISIVA DA GREVE.zip",
    destaque: true,
    description: "Documento sobre a semana decisiva da greve."
  },
  {
    title: "Resposta do Comando de Greve ao email da direção do IFUSP",
    slug: "ifusp/emails-enviados/resposta-do-comando-de-greve",
    fileUrl: "/Documentos PG (Portal da greve)/IFUSP/Emails enviados/Resposta do Comando de greve ao email da direção do IFUSP.zip",
    destaque: true,
    description: "Resposta oficial do comando de greve à direção do IFUSP."
  },
  {
    title: "Nota sobre o email da direção",
    slug: "ifusp/emails-enviados/nota-sobre-o-email-da-direcao",
    fileUrl: "/Documentos PG (Portal da greve)/IFUSP/Emails enviados/Nota sobre o email da direção/Nota sobre o email da direção.pdf",
    destaque: true,
    description: "Nota explicativa sobre o Conselho de Graduação e o email alarmista da direção."
  },
  {
    title: "Repasse da negociação",
    slug: "ifusp/reunioes/repasse-da-negociacao",
    fileUrl: "/Documentos PG (Portal da greve)/IFUSP/Reuniões/repasse da negociação/repasse da negociação.pdf",
    destaque: true,
    description: "Repasse da reunião de negociação com a reitoria do dia 21/05."
  }
];

export const DIRECTORY_DATA: DirectoryData = {
  "IFUSP": {
    description: "Documentos, assembleias e reuniões do Instituto de Física.",
    subfolders: {
      "Emails enviados": [
        {
          title: "Resposta do Comando de Greve ao email da direção do IFUSP",
          href: "/documentos/ifusp/emails-enviados/resposta-do-comando-de-greve"
        },
        {
          title: "Nota sobre o email da direção",
          href: "/documentos/ifusp/emails-enviados/nota-sobre-o-email-da-direcao"
        }
      ],
      "Reuniões": [
        {
          title: "Repasse da negociação",
          href: "/documentos/ifusp/reunioes/repasse-da-negociacao"
        }
      ]
    }
  }
};
