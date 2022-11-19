import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
function Profile() {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  
  useEffect(() => {
    setUser(auth.currentUser);
  }, [user]);

  return user ? <h1>{user.displayName}</h1> : "Not Logged In";
}

export default Profile;
