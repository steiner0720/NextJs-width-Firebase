import firebase from '../../../lib/firebase'

<<<<<<< HEAD
=======
// realtime database
// export default (req, res) => {
//   return new Promise(() => {
//     const ref = firebase.database().ref("cities")
//     ref.orderByKey().on("value", (e) => {
//       res.json(e.val())
//     })
//   })
// }

>>>>>>> 9e1272d99b07ddd2e6f1702b64facfa5188245b4
// firestore
export default (req, res) => {
	return new Promise(() => {
		firebase
			.firestore()
			.collection('cities')
			.doc('name')
			.get()
<<<<<<< HEAD
			.then(doc => {
				res.json(doc.data())
			})
			.catch(error => {
=======
			.then((doc) => {
				res.json(doc.data())
			})
			.catch((error) => {
>>>>>>> 9e1272d99b07ddd2e6f1702b64facfa5188245b4
				res.json({ error })
			})
	})
}
