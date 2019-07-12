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

const transformDateToStartAndEndDate = (date) => {
  const tomorrow = new Date(date);
  tomorrow.setDate(date.getDate() + 1);

  const startDate = new Date(date.toDateString());
  const endDate = new Date(tomorrow.toDateString());
  return { startDate, endDate };
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

  async getTransactions(date) {
    const user = this.auth.currentUser.uid;
    const transformedDate = transformDateToStartAndEndDate(date);

    const transactions = await this.db
      .collection('DailyTransactions')
      .where('user', '==', user)
      .where('date', '>', transformedDate.startDate)
      .where('date', '<', transformedDate.endDate)
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
