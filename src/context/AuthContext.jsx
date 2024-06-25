import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { auth, db } from "../lib/firebase";
import { signUp, signIn } from "../services/auth";

const AuthContext = createContext();

const logOut = async () => {
  try {
    await signOut(auth);
    toast.success("logged out successfully");
  } catch (err) {
    toast.error("error while logging out");
  }
};
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUserinfo = async (uid) => {
    setLoading(true);

    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUser(docSnap.data());
      } else {
        setUser(null);
      }
    } catch (err) {
      setUser(null);
      console.log(err);
      toast.error("error while fetching user info");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user.uid) {
        fetchUserinfo(user.uid);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);
  return (
    <AuthContext.Provider
      value={{ user, setUser, signUp, logOut, signIn, loadingUser: loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const auth = useContext(AuthContext);

  return auth;
}
