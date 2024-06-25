import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { auth, db } from "../lib/firebase";
import upload from "../lib/upload";

export const signUp = async (username, email, password, image) => {
  try {
    // const usersRef = collection(db, "users");
    // const q = query(usersRef, where("username", "==", username));
    // const querySnapshot = await getDocs(q);
    // if (!querySnapshot.empty) {
    //   return toast.error("username already taken");
    // }
  } catch (err) {
    return toast.error("Some thing wrong while Validate username");
  }
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    const userRef = doc(db, "users", res.user.uid);

    const docSnap = await getDoc(userRef);
    if (!docSnap.exists()) {
      try {
        console.log(image, image.file);
        let imageUrl = "";
        if (image.file) imageUrl = await upload(image.file);

        await setDoc(userRef, {
          username,
          email,
          imageUrl,
          blocked: [],
          id: res.user.uid,
        });
        await setDoc(doc(db, "userchats", res.user.uid), {
          chats: [],
        });
        toast.success("account created successfully");
      } catch (err) {
        toast.error(err.message);
      }
    }
  } catch (err) {
    if (err.message == "Firebase: Error (auth/email-already-in-use).") {
      toast.error("email already in use");
    } else {
      toast.error(err.message);
    }
  }
};



export const signIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Login Successfully");
  } catch (err) {
    toast.error(err.message);
  }
};