import { db } from "./firebaseConfig";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

export interface PdfData {
  id: string;
  name: string;
  url: string;
  createdAt?: any;
}

export const fetchPdfs = async (): Promise<PdfData[]> => {
  const q = query(collection(db, "pdfs"), orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as PdfData[];
};
