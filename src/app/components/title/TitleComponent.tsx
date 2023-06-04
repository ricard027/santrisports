import { FunctionComponent } from 'react'

interface ITitleprops {
  children: string
}

const TitleComponent: FunctionComponent<ITitleprops> = ({ children }) => {
  return (
    <div className="my-[44px] h-[60px] w-full">
      <h3 className=" text-lg font-semibold">{children}</h3>
      <div className="h-[18px] w-[86px] rounded-md bg-[#D9D9D9]" />
    </div>
  )
}
export default TitleComponent
