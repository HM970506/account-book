import { collection, getDocs, getFirestore, onSnapshot, orderBy, query } from "firebase/firestore";
import { useRef, useState } from "react";
import { app } from "./firestore";

const firestore = getFirestore(app);

const Snapshot = onSnapshot(
  query(
    collection(firestore, `lunchbus/${id}/messages`),
    orderBy("order", "desc")
  ),
  snapshot => {
    //전역 상태관리 함수에 넣어서 상태를 업데이트.
      console.log(snapshot);
  },
);
