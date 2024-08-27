import { auth } from "@/app/auth";

const UserProfile = async () => {
  const session = await auth();

  if (!session || !session.user) {
    return <p>You need to be signed in to view this content.</p>;
  }

  const user = session.user;

  return (
    <div>
      <h1>Welcome, {user.name || "User"}!</h1>
      <p>Email: {user.email}</p>

      {user.image && <img src={user.image} alt="User Image" />}
    </div>
  );
};

export default UserProfile;
