import CategoryModal from "@/components/modals/CategoryModal"
import NavigationSidebar from "./admin/components/NavigationSidebar"

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full pt-16">
      <div className="hidden md:flex h-full md:w-[250px] z-30 flex-col fixed inset-y-0 mt-14">
        <NavigationSidebar />
      </div>
      <main className="md:pl-[250px] h-full mx-6">
        <CategoryModal />
        {children}
      </main>
    </div>
  )
}

export default MainLayout
