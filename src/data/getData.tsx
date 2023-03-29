import app from "./firebase";
import {
  collection,
  query,
  onSnapshot,
  getFirestore,
  getDocs,
} from "firebase/firestore";

export default async function getData() {
  const firestore = getFirestore(app);

  const querySnapshot = await getDocs(collection(firestore, "classifications"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
}
