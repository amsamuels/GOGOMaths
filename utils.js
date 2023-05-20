import { getDocs, collection } from 'firebase/firestore';
import { db } from './firebase';

export async function countPlayers() {
  const query = await getDocs(collection(db, 'players'));
  const totalPlayers = query.size;
  return totalPlayers;
}

const addData = () => {
  const data = [];

  const batch = writeBatch(db);
  const collectionRef = collection(db, 'questions', 'medium', 'level_3');

  data.forEach(async (doc) => {
    const docRef = addDoc(collectionRef, doc);
    batch.set(docRef, doc);
  });

  batch.commit();
};
