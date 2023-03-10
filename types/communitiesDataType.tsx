export type CommunitiesDataType = {
  heading: string;
  subheading: string;
  button: string;
  communities: {
    id: number;
    name: string;
    icon: string;
    bgColor: string;
  }[];
};
