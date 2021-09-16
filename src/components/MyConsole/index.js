import React from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import papel from '../../img/papel.jpg'
import pedra from '../../img/pedra.jpg'
import tesoura from '../../img/tesoura.jpg'
import { MyButton } from '../MyButton'

export function MyConsole(props) {
	function handleButton(button) {
		const jogadas = ['pedra', 'papel', 'tesoura']
		const indice = Math.floor(Math.random() * jogadas.length)
		const comp = jogadas[indice]
		let resultado = ''

		if (button === comp) resultado = 'empate'
		else if (
			(button === 'pedra' && comp !== 'papel') ||
			(button === 'papel' && comp !== 'tesoura') ||
			(button === 'tesoura' && comp !== 'pedra')
		)
			resultado = 'você venceu'
		else resultado = 'app venceu'

		Alert.alert('Atenção', `A sua jogada foi ${button} e a do computador foi ${comp} e o resultado foi ${resultado}`)
	}

	return (
		<View style={styles.console}>
			<MyButton onPress={() => handleButton('pedra')} source={pedra} />
			<MyButton onPress={handleButton.bind(this, 'papel')} source={papel} />
			<MyButton onPress={handleButton.bind(this, 'tesoura')} source={tesoura} />
		</View>
	)
}

const styles = StyleSheet.create({
	console: {
		flexDirection: 'row',
	},
})
