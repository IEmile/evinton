import{db}from './firebase.js';
import { doc, setDoc, getDoc, getDocs, updateDoc, deleteDoc, collection, query, where, orderBy } from 'firebase/firestore';

export async function checkIfEmailExists(collectionName, email) {
    try {
      // Create a query to search for the email
      const q = query(collection(db, collectionName), where("email", "==", email));
      
      // Get the documents that match the query
      const querySnapshot = await getDocs(q);
  
      // If there is any document in the query result, the email exists
      if (!querySnapshot.empty) {
        return true;  // Email exists
      } else {
        return false;  // Email does not exist
      }
    } catch (error) {
      console.error("Error checking email existence: ", error);
      throw new Error("Could not verify email existence");
    }
  }
