// CHARACTER
export type Character = {
  id?: number;
  name?: string;
  description?: string;
  modified?: Date;
  resourceURI?: string;
  urls?: Url[];
  thumbnail?: Image;
  comics?: ComicList;
  stories?: StoryList;
  events?: EventList;
  series?: SeriesList;
};

export type Url = {
  type?: string;
  url?: string;
};

export type Image = {
  path?: string;
  extension?: string;
};

export type ImageVariants =
  | "portrait_small"
  | "portrait_medium"
  | "portrait_xlarge"
  | "portrait_fantastic"
  | "portrait_uncanny"
  | "portrait_incredible"
  | "standard_small"
  | "standard_medium"
  | "standard_large"
  | "standard_xlarge"
  | "standard_fantastic"
  | "standard_amazing"
  | "landscape_small"
  | "landscape_medium"
  | "landscape_large"
  | "landscape_xlarge"
  | "landscape_amazing"
  | "landscape_incredible";

type ComicList = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: Summary[];
};

type StoryList = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: Summary[];
};

type EventList = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: Summary[];
};

type SeriesList = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: Summary[];
};

type Summary = {
  resourceURI?: string;
  name?: string;
  type?: string;
};
