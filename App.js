import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { MyConsole, MyPanel } from './src/components'

const { height } = Dimensions.get('window')
const imgHeader = { url: 'https://mega.ibxk.com.br/2014/05/12/12142817719455.png', width: 300, height: 300 }

function App(props) {
	return (
		<View style={styles.container}>
			<MyPanel image={imgHeader} />
			<MyConsole />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#000',
		height: height,
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
})

export default App
