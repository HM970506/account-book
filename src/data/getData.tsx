import app from "./firebase";
  getFirestore,
import { getDatabase, ref, onValue } from "firebase/database";

export default async function getData() {
  // const firestore = getFirestore(app);

  // const querySnapshot = await getDocs(collection(firestore, "classifications"));
  // querySnapshot.forEach((doc) => {
  //   console.log(`${doc.id} => ${doc.data()}`);
  // });
  const db = getDatabase(app);
  const starCountRef = ref(db, "classifications");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
}
