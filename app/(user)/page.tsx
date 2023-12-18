import { getFeaturedProduct } from "@/actions/getProduct"
import Container from "@/components/Container"
import ProductList from "@/components/ProductList"
import Banner from "@/components/ui/banner"
import Billboard from "@/components/ui/billboard"

export const revalidate = 0

const HomePage = async () => {
  const featuredProducts = await getFeaturedProduct()

  return (
    <>
      <Banner />
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-10 pb-10">
            {/* Dynamic billboard will be added later */}
            {/* <Billboard /> */}
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
              <ProductList title="Featured Products" items={featuredProducts} />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default HomePage
