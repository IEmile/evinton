import{db}from './firebase.js';
import { doc,addDoc, setDoc, getDoc, getDocs, updateDoc, deleteDoc, collection, query, where, orderBy } from 'firebase/firestore';

// check if information exists in db 
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

// Function to set or add data (create or overwrite a document) using docid
export async function setData(collectionName, docId, data) {
  try {
    await setDoc(doc(db, collectionName, docId), data);
    console.log(`Document written with ID: ${docId}`);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

// Function to add a new document with a generated ID
export async function addData(collectionName, data) {
  try {
    // Add a new document with a generated ID
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log(`Document written with ID: ${docRef.id}`);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}