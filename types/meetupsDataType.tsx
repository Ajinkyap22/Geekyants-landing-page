export type MeetupsDataType = {
  id: number;
  heading: string;
  subheading: string;
  button: string;
  cards: {
    title: string;
    description: string;
    image: string;
    date: string;
  }[];
};
