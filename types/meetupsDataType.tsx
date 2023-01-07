export type MeetupsDataType = {
  heading: string;
  subheading: string;
  buttonText: string;
  meetups: {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
  }[];
};
