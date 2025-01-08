import { getServerSession } from "next-auth";
import { signOut, useSession, SessionProvider, signIn } from "next-auth/react";

export default async function Home() {
  const session =  await getServerSession()
  return (
    <div>
      {JSON.stringify(session)}

    </div>
    )
}

