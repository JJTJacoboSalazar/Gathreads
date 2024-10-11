import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1>Welcome to your Clerk.js app!</h1>
      <UserButton />
    </div>
  )
}