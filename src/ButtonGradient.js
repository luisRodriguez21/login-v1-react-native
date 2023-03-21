import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function ButtonGradient() {
	
	return (
		<TouchableOpacity style={styles.containerButton}>
			<LinearGradient 
				colors={['#FFB677', '#FF3CBD']} 
				start={{ x: 1, y: 0 }}
				end={{ x: 0, y: 1 }}
				style={styles.button}
			>
				<Text style={styles.text}>SIGN IN</Text>
			</LinearGradient>
		</TouchableOpacity>
	);
};


const styles = StyleSheet.create({
	containerButton: {
		width: 200,
		alignItems: 'center',
		marginTop: 60
	},
	button: {
		width: '80%',
		height: 50,
		borderRadius: 25,
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 14,
		color: 'gray',
		fontWeight: 'bold',
		color: 'white',
	}
});
