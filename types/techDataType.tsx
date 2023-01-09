type tech = {
  name: string;
  icon: string;
}[];

export type TechDataType = {
  id: string;
  heading: string;
  subheading: string;
  button: string;
  categories: string[];
  top: tech;
  web: tech;
  mobile: tech;
  backend: tech;
  design: tech;
  testing: tech;
};
