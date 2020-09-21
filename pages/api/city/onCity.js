import firebase from '../../../lib/firebase'

// realtime database
export default (req, res) => {
	return new Promise(() => {
		const ref = firebase.database().ref('cities')
		ref.orderByKey().on('value', e => res.json(e.val()))
	})
}
