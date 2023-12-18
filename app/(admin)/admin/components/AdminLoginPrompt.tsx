"use client"

import Container from "@/components/Container"
import { Button } from "@/components/ui/button"
import useLoginModal from "@/hooks/useLoginModal"

const AdminLoginPrompt = () => {
  const loginModal = useLoginModal()
  return (
    <Container>
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        You arent logged in. Please log in
        <Button onClick={loginModal.onOpen}> here</Button>
      </div>
    </Container>
  )
}

export default AdminLoginPrompt
