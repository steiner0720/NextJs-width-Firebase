import firebase from '../../../lib/firebase'

// realtime database
// export default (req, res) => {
//   return new Promise(() => {
//     const ref = firebase.database().ref("cities")
//     ref.orderByKey().on("value", (e) => {
//       res.json(e.val())
//     })
//   })
// }

// firestore
export default (req, res) => {
	return new Promise(() => {
		firebase
			.firestore()
			.collection('cities')
			.doc('name')
			.get()
			.then((doc) => {
				res.json(doc.data())
			})
			.catch((error) => {
				res.json({ error })
			})
	})
}
