import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DBURL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
};

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name,
    });
  }

  isInitialized() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  setMonthlyBudget(monthlyBudget) {
    return this.db.doc(`monthlyBudget/${this.auth.currentUser.uid}`).set({
      ...monthlyBudget,
    });
  }

  async getMonthlyBudget() {
    const monthlyBudget = await this.db
      .doc(`monthlyBudget/${this.auth.currentUser.uid}`)
      .get();

    return monthlyBudget.data();
  }

  addTransaction(transaction) {
    const user = this.auth.currentUser.uid;
    return this.db
      .collection('DailyTransactions')
      .doc()
      .set({
        user,
        ...transaction,
      });
  }

  async getTransactions() {
    const user = this.auth.currentUser.uid;
    const transactions = await this.db
      .collection('DailyTransactions')
      .where('user', '==', user)
      .get();

    return transactions;
  }

  async getCategories() {
    const categories = await this.db.collection('categories').get();

    return categories;
  }

  getCurrentUser() {
    return this.auth.currentUser;
  }
}

export default Firebase;
