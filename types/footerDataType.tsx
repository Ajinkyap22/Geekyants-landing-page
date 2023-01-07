export type FooterDataType = {
  socialIcons: {
    src: string;
    name: string;
  }[];
  quickLinks: string[];
  hireDevelopers: string[];
  engagements: string[];
  company: string[];
  awards: string[];
  addresses: {
    id: number;
    company: string;
    address: string;
    phone: string;
    icon: string;
  }[];
};
