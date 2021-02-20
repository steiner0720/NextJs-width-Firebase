import firebase from '../../../lib/firebase'

// firestore
export default (req, res) => {
	return new Promise(() => {
		firebase
			.firestore()
			.collection('cities')
			.doc('name')
			.get()
			.then(doc => {
				res.json(doc.data())
			})
			.catch(error => {
				res.json({ error })
			})
	})
}
