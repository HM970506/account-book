import firestore from "./firebase";
import { collection, addDoc, query, getDocs } from "firebase/firestore/lite";

export default async function getData() {
  const usersCollectionRef = collection(firestore, "classifications");
  const q =  query(usersCollectionRef);

const data = await getDocs(q);
const newData = data.docs.map(doc => ({
  ...doc.data()
}));
console.log(newData);
}
