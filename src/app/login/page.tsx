import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import Login from "./Login";
import { authOptions } from "@/src/lib/auth";

const Page = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }

  return <Login />;
};

export default Page;
