import { db } from "./firebase";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";

/**
 * 📍 Task: Live Location Updates
 * Saves the patient's current GPS lat/long directly to the cloud database.
 * Member 2 (Navigation Lead) will call this function inside their location loop.
 */
export const updatePatientLocation = async (patientId, latitude, longitude) => {
  try {
    const locationRef = doc(db, "patients", patientId);
    await setDoc(locationRef, {
      lastUpdated: new Date().toISOString(),
      coordinates: { latitude, longitude }
    }, { merge: true });
    console.log("Location successfully synced to Firebase!");
  } catch (error) {
    console.error("Error writing location to database:", error);
  }
};

/**
 * 🚨 Task: Emergency Contacts & Dashboard Configuration
 * Fetches caregiving details, safe zones, and phone numbers.
 * Member 1 (UI Lead) will use this to link the panic call button action.
 */
export const getCaregiverConfig = async (patientId) => {
  try {
    const docRef = doc(db, "patients", patientId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No dashboard settings profiles found for this ID!");
      return null;
    }
  } catch (error) {
    console.error("Error retrieving caregiver configuration:", error);
    return null;
  }
};