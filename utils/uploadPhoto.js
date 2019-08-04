import firebase from 'firebase';

function uploadPhoto(uri, uploadURI) {
  return new Promise(async (res, rej) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    const ref = firebase.storage().ref(uploadURI);
    const unsubscribe = ref.put(blob).on(
      'state_changed',
      state => {},
      err => {
        unsubscribe();
        rej(err);
      },
      async () => {
        unsubscribe();
        const url = await ref.getDownloadURL();
        res(url);
      },
    );
  });
}

export default uploadPhoto;