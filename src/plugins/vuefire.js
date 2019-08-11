import Vue from 'vue';
import firebase from 'firebase/app'
import { firestorePlugin } from 'vuefire'
import 'firebase/firestore'

Vue.use(firestorePlugin)

export const db = firebase
    .initializeApp({ projectId: 'MY PROJECT ID' })
    .firestore()

const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }

