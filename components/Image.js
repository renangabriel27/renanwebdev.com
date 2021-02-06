import NextImage from 'next/image';

export default function Image({
  width = '100%',
  height = '100%',
  ...rest
}) {
  return (
    <div className="flex justify-center">
      <NextImage width={width} height={height} {...rest} />
    </div>
  );
}

