import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getDoc,
  collection,
  getDocs,
  getFirestore,
  doc,
  addDoc
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
    result.push({ doc_id: doc.id, ...doc.data() });
  });
  return result;
}

export async function getCourse(id) {
  const docRef = doc(db, "courses", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}

export async function getClassName(id) {
  let classes = await getClasseById(id);
  let courseId = classes.courseId;

  return await getCourse(courseId).title;
}

async function createBooking(obj) {
  if(obj == null) {
    console.log("no booking object");
  }

  let bookingData = {
    booking_date: new Date(),
    class_id: obj.classId,
    company_name: obj.company,
    email: obj.email,
    name: obj.name,
    phone_number: obj.phoneNumber,
  }

  console.log(bookingData);
  await addDoc(collection(db, "booking"), bookingData);
}

export async function submitBooking(obj) {
  if (obj == null) {
    console.log("no booking object");
  }

  let classes = await getClasseById(obj.classId);
  let availableSeat = classes.availableSeat;


  if (availableSeat > 0) {
    await createBooking(obj)
    await updateAvailableSeatByClassId(obj.classId);
    console.log("Update one seat");
  }
}

export async function getClasses() {
  const snapshot = await getDocs(collection(db, "classes"));
  const result = [];
  snapshot.forEach((doc) => {
    result.push({ id: doc.id, ...doc.data() });
  });
  return result;
}

async function getClasseById(id) {
  const docRef = doc(db, "classes", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}

async function getTrainers() {
  const snapshot = await getDoc(collection(db, "trainer"));
  return snapshot.map((doc) => doc.data());
}

async function getTrainerById(id) {
  const docRef = doc(db, "trainer", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}

async function updateAvailableSeatByClassId(id) {
  const docRef = doc(db, "classes", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}

// export default { getCourses, getCourse };
export default {
  getCourses,
  getCourse,
  getClasses,
  getClasseById,
  getTrainers,
  getTrainerById,
  updateAvailableSeatByClassId,
};
