import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDL5DwmRuPCE0FhJJc0EimprhXNlDMTs5w",
  authDomain: "antam-ecommerc.firebaseapp.com",
  databaseUrl: "gs://antam-ecommerc.appspot.com", //Root storage URL
  projectId: "antam-ecommerc",
  storageBucket: "antam-ecommerc.appspot.com",
  messagingSenderId: "32234254939",
  appId: "1:32234254939:web:e72050d49dd7b3e218857e",
  measurementId: "G-YVWTN17Y0D",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}
// Using firestore
export const db = firebase.firestore();

// // Using Realtime
// export const rtdb = firebase.database();

// // Using Storage
export const storage = firebase.storage();

export const getList = (collection) =>
  new Promise((resolve, reject) => {
    db.collection(collection)
      .get()
      .then((snapshot) => {
        const result = [];

        if (snapshot) {
          snapshot.forEach((doc) => {
            const uid = doc.id;
            const data = doc.data();

            data["id"] = uid;
            result.push(data);
          });

          resolve(result);
        }
      })
      .catch((err) => reject(err));
  });

export const getListWithOrderBy = (collection, field, type = "asc") =>
  new Promise((resolve, reject) => {
    db.collection(collection)
      .orderBy(field, type)
      .get()
      .then((snapshot) => {
        const result = [];

        if (snapshot) {
          snapshot.forEach((doc) => {
            const uid = doc.id;
            const data = doc.data();

            data["id"] = uid;
            result.push(data);
          });

          resolve(result);
        }
      })
      .catch((err) => reject(err));
  });

export const getListWithCustomField = (collection, field, value = "") =>
  new Promise((resolve, reject) => {
    db.collection(collection)
      .where(field, "==", value)
      .get()
      .then((snapshot) => {
        const result = [];

        if (snapshot) {
          snapshot.forEach((doc) => {
            const uid = doc.id;
            const data = doc.data();

            data["id"] = uid;
            result.push(data);
          });

          resolve(result);
        }
      })
      .catch((err) => reject(err));
  });

export const getDocById = (collection, id) =>
  new Promise((resolve, reject) => {
    db.collection(collection)
      .doc(id)
      .get()
      .then((snapshot) => {
        const uid = snapshot.id;
        const data = snapshot.data();

        data["id"] = uid;

        resolve(data);
      })
      .catch((err) => reject(err));
  });

export const create = (collection, dataSubmit) =>
  new Promise((resolve, reject) => {
    db.collection(collection)
      .add(dataSubmit)
      .then((docRef) => {
        resolve(docRef.id);
      })
      .catch((error) => {
        reject(`Error adding document: ${error}`);
      });
  });

export const uploadSingle = (file, cb) => {
  let uploadTask = storage.ref(`images/${file.name}`).put(file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {},
    (error) => {
      console.log({ error });
    },
    async () => {
      await storage
        .ref("images")
        .child(file.name)
        .getDownloadURL()
        .then((url) => {
          console.log(url);

          cb(url);
        })
        .catch((error) => cb(error));
    }
  );
};

export const removeById = (collection, id) =>
  new Promise((resolve, reject) => {
    db.collection(collection)
      .doc(id)
      .get()
      .then((snapshot) => {
        snapshot.ref.delete();

        resolve("success");
      })
      .catch((error) => {
        reject(`Error delete document: ${error}`);
      });
  });

export const updateById = (collection, id, dataUpdate) =>
  new Promise((resolve, reject) => {
    db.collection(collection)
      .doc(id)
      .update(dataUpdate)
      .then((snapshot) => {
        resolve("success");
      })
      .catch((error) => {
        reject(`Error delete document: ${error}`);
      });
  });
