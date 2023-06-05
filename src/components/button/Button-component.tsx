import { FunctionComponent, ReactNode } from 'react'

interface IButtonProps {
  children: ReactNode
  icon?: ReactNode
}

const ButtonComponent: FunctionComponent<IButtonProps> = ({
  children,
  icon
}) => {
  return (
    <button className="flex w-[145px] min-w-fit items-center justify-evenly gap-2 rounded-md  bg-[#121212] p-2 text-slate-50">
      {children}
      {icon && icon}
    </button>
  )
}
export default ButtonComponent
