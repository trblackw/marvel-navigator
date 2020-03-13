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

type Url = {
  type?: string;
  url?: string;
};

type Image = {
  path?: string;
  extension?: string;
};

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
