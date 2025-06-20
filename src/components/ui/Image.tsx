import * as React from 'react';

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  className?: string;
};

function Image(props: ImageProps, ref: React.Ref<HTMLImageElement>) {
  const { src, alt, className = '', ...rest } = props;

  return <img ref={ref} src={src} alt={alt} className={className} loading='lazy' {...rest} />;
}

const ForwardedImage = React.forwardRef(Image);
ForwardedImage.displayName = 'Image';

export default ForwardedImage;
