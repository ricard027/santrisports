import { FunctionComponent } from 'react'

interface IimageProps {
  src: string
  alt: string
}

const MyimgComponent: FunctionComponent<IimageProps> = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full rounded-md bg-cover bg-blend-screen"
    />
  )
}

export default MyimgComponent
