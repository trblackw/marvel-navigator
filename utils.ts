import { Image, ImageVariants } from "./types";
type ImageDetails = { image: Image; variant?: ImageVariants };

export const renderImage = ({ image, variant }: ImageDetails) => {
  return image.path.concat(
    `${variant ? `/${variant}` : ""}.${image.extension}`
  );
};

export const convertTimeStamp = (stamp: Date): string => {
  const date = new Date(stamp);
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};

export const toPascalCase = (str: string): string => {
  return str.toLocaleLowerCase().replace(/\w\S*/g, string => string.charAt(0).toLocaleUpperCase() + string.substr(1).toLocaleLowerCase());
};
