// Components
import FooterComponent from '@/components/footer/Footer-component'
import HeaderComponent from '@/components/Header-component'
import ButtonComponent from '@/components/button/Button-component'
// Utilities
import { Produtos } from '../../../../script/Products'

export default function ProductDetails({ params }: any) {
  const idParams = params.id
  return (
    <>
      <HeaderComponent />

      <div className=" w-full">
        <div className="m-auto h-20 w-[80vw]">
          <h1>Voltar</h1>
        </div>

        {Produtos.filter((produtos) => produtos.id == idParams).map(
          (produto) => (
            <div className="m-auto flex w-[80vw] flex-col items-center">
              <div className="w-[80vw ]">
                <div className="m-auto h-[300px] w-[400px]">
                  <img
                    src={produto.imagem}
                    alt={`imagem do ${produto.nome}`}
                    className="h-full w-full"
                  />
                </div>
                <div className="my-4 flex h-20 cursor-pointer gap-5 ">
                  <div className="flex-1 bg-customgray bg-customgray opacity-80">
                    <img
                      src={produto.imagem}
                      alt={`imagem do ${produto.nome}`}
                      className="h-full w-full "
                    />
                  </div>
                  <div className="flex-1 cursor-pointer bg-customgray opacity-70">
                    <img
                      src={produto.imagem}
                      alt={`imagem do ${produto.nome}`}
                      className="h-full w-full"
                    />
                  </div>
                  <div className="flex-1 cursor-pointer bg-customgray opacity-70">
                    {' '}
                    <img
                      src={produto.imagem}
                      alt={`imagem do ${produto.nome}`}
                      className="h-full w-full"
                    />
                  </div>
                  <div className="flex-1 cursor-pointer bg-customgray opacity-70">
                    <img
                      src={produto.imagem}
                      alt={`imagem do ${produto.nome}`}
                      className="h-full w-full"
                    />
                  </div>
                </div>
              </div>
              <h1>{produto.nome}</h1>
              <p> descrição {produto.nome}</p>
              <p>mais descriçoes</p>
              <ButtonComponent>Adicionar ao carrinho</ButtonComponent>
            </div>
          )
        )}
      </div>
      <FooterComponent />
    </>
  )
}
