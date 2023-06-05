const FooterComponent = () => {
  return (
    <footer className="mt-[100px] h-[400px] bg-primary p-4 text-white md:p-8">
      <div className="w-90vw container mx-auto  sm:w-[80vw]">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-3/4 lg:w-4/5">
            <h2 className="mb-4 text-lg font-bold text-customred">
              Santri Sports
            </h2>
            <p className="mb-2">Avenida C-255, 270, Setor Nova Suíça</p>
            <p className="mb-2">Telefone: +55 (62)3095-2695</p>
            <p className="mb-4">Email: info@empresa.com</p>
          </div>
        </div>
        <div className="flex h-11 gap-5  text-white underline">
          <a href="https://www.linkedin.com/company/santri-solu%C3%A7%C3%B5es/">
            linkedin
          </a>
          <a href="https://www.youtube.com/channel/UCTfio2E1RtRIpXPjYgrup2w">
            Youtube
          </a>
          <a href="https://www.instagram.com/santrisolucoes/">Instagram</a>
          <a href="https://www.facebook.com/santrisoftware?_rdc=1&_rdr">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent
