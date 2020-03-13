import { Image, ImageVariants } from "./types";
type ImageDetails = Required<{ image: Image, variant: ImageVariants }>;

export const renderImage = ({ image, variant }: ImageDetails) =>
  image.path.concat(`/${variant}.${image.extension}`);
