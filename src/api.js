import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getDoc,
  collection,
  getDocs,
  getFirestore,
  query,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCF6JVZVmChlFqQQ9lgPoYgpjzsCNbCXOE",
  authDomain: "course-training-support.firebaseapp.com",
  projectId: "course-training-support",
  storageBucket: "course-training-support.appspot.com",
  messagingSenderId: "673181277367",
  appId: "1:673181277367:web:526d1fbf77f715885ec132",
  measurementId: "G-KZCXW5F74M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export async function getCourses() {
  const snapshot = await getDocs(collection(db, "courses"));
  const result = [];
  snapshot.forEach((doc) => {
    result.push({ id: doc.id, ...doc.data() });
  });
  return result;
}

export async function getCourse(id) {
  const docRef = doc(db, "courses", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}

// export default { getCourses, getCourse };
