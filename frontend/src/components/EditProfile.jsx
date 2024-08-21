// import { useEffect } from "react";
import { useUser } from "./customHooks/useUser";

const EditProfile = () => {
  const { userData, isAuthenticated } = useUser();
  return isAuthenticated ? (
    <div>
      <img src={userData.picture} className="rounded-full" />
      <h2>{userData.name}</h2>
      <h3>{userData.email}</h3>
      <input type="file" accept="image/*" />
      <button>Upload</button>
    </div>
  ) : (
    <div>Please login first!</div>
  );
};

export default EditProfile;
