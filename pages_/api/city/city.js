import firebase from '../../../lib/firebase'

export default (req, res) => {
  return new Promise(() => {
    firebase
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