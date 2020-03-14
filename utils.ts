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
