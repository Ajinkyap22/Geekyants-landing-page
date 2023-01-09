export type WhatWeDoDataType = {
  id: number;
  heading: string;
  subheading: string;
  button: string;
  work: {
    id: number;
    heading: string;
    description: string;
    icon: string;
  }[];
};
