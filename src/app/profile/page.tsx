import { getServerSession } from "next-auth";

import Header from "@/src/Components/Header";
import { User } from "@/src/Interfaces/auth";
import { authOptions } from "@/src/lib/auth";
import ProfileContent from "@/src/Components/ProfileContent";

const Profile = async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      <Header />
      <ProfileContent user={session?.user as User} />
    </>
  );
};

export default Profile;
