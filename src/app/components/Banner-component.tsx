export default function BannerComponent() {
  return (
    <section className=" flex h-80 w-full items-center justify-between bg-gray-100 ">
      <div className="flex h-full w-[60%] flex-col p-4">
        <h1 className="text-xl">A mais de 10 anos</h1>
        <p className="mt-4 text-sm">Fornecendo os melhores produtos</p>
        <p className="text-sm">Lorem ipsum dolor sit amet.</p>
        <p className="text-sm">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="h-full w-[40%]  bg-customgray" />
    </section>
  )
}
