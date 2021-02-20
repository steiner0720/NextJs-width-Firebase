<<<<<<< HEAD
import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class AppDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default AppDocument
=======
import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class AppDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default AppDocument
>>>>>>> 9e1272d99b07ddd2e6f1702b64facfa5188245b4
