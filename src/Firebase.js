/* CONFIGURACIONES PARA 
INICIALIZAR FIREBASE */

import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyBCfLe9cHi6fN18Q6Gz8AvkG_O9qedFGvo",
    authDomain: "prueba-tecnica-arkano.firebaseapp.com",
    databaseURL: "https://prueba-tecnica-arkano.firebaseio.com",
    projectId: "prueba-tecnica-arkano",
    storageBucket: "",
    messagingSenderId: "622775845046",
    appId: "1:622775845046:web:dd34aae983bb6125"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase