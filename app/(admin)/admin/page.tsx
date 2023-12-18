import getCurrentUser from "@/actions/getCurrentUser"
import { userType } from "@/app/api/auth/[...nextauth]/route"
import Container from "@/components/Container"
import useLoginModal from "@/hooks/useLoginModal"
import AdminContent from "./components/AdminContent"
import AdminLoginPrompt from "./components/AdminLoginPrompt"
import AdminNavPanel from "./components/AdminNavPanel"

const AdminPage = async () => {
  const currentUser = await getCurrentUser()

  const typeOfUser = await userType()
  if (!currentUser)
    return (
      <div>
        <AdminLoginPrompt />
      </div>
    )
  else
    return (
      <div>
        {typeOfUser === "ADMIN" ? (
          <div>
            <Container>
              <div className="flex justify-stretch items-center">
                <AdminNavPanel />
                <AdminContent />
              </div>
            </Container>
          </div>
        ) : (
          <>
            <h1>This is a user </h1>
          </>
        )}
      </div>
    )
}

export default AdminPage
