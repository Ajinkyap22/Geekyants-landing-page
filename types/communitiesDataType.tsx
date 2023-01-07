export type CommunitiesDataType = {
  heading: string;
  subHeading: string;
  buttonText: string;
  communities: {
    id: number;
    name: string;
    image: string;
    bgColor: string;
  }[];
};
