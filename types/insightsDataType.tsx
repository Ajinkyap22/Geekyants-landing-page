export type InsightsDataType = {
  id: number;
  heading: string;
  subheading: string;
  buttons: string[];
  cards: {
    title: string;
    description: string;
    image: string;
    date: string;
  }[];
};
