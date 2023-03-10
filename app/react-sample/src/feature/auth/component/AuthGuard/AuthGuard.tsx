import { Box } from "@chakra-ui/react"
import { Navigate } from "@tanstack/react-location"
import { ReactNode } from "react"
import { useAuthContext } from "../../provider/AuthProvider"

type Props = {
  children: ReactNode
}

export const AuthGuard = ({ children }: Props) => {
  const { user } = useAuthContext();

  if(typeof user === 'undefined') {
    return <Box>読み込み中</Box>
  }

  if (user === null) {
    return <Navigate to='signin' replace={true} />
  }

  return <>{children}</>
}
