import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
// import * as Svg from 'react-native-svg';
import Svg, { Path, LinearGradient, Stop } from 'react-native-svg';
import ButtonGradient from './src/ButtonGradient';


const PinkWaveBackground = () => {

	const { width , height} = Dimensions.get('window');

	return (
		<Svg width={width} height={height / 3}>
			<LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
				<Stop offset="0%" stopColor="#FFB677" />
				<Stop offset="60%" stopColor="#FF3CBD" />
			</LinearGradient>
			<Path
				d="M0 0 L0 220 Q120 300 240 220 T480 220 Q600 220 620 180 T660 100 Q680 60 700 120 T740 180 Q820 280 940 180 L940 0 Z"
				fill="url(#gradient)"
			/>
		</Svg>
	);
  };



export default function App() {
	return (
		<View style={styles.mainContainer}>
			<View style={styles.container}>
				<PinkWaveBackground />
			</View>
			
			<View style={styles.container}>				
				<Text style={styles.title}>Login</Text>
				<Text style={styles.subtitle}>
					Sign in to your account
				</Text>

				<TextInput
					placeholder="Enter your email address"
					style={styles.input}
				/>

				<TextInput
					placeholder="password"
					style={styles.input}
					secureTextEntry={true}
				/>

				<Text style={styles.forgot}>
					forgot your password ?
				</Text>

				<ButtonGradient />


				<Text style={styles.forgot}>
					Don't have and accout
				</Text>

				<StatusBar style="auto" />
			</View>
		</View>
		
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: '#f1f1f1',
		flex: 1
	},	
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 70,
		color: '#34434D',
		fontWeight: 'bold',
	},
	subtitle: {
		fontSize: 20,
		color: 'gray',
	},
	input: {
		padding: 10,
		paddingStart: 30,
		width: '80%',
		height: 50,
		marginTop: 20,
		borderRadius: 30,
		backgroundColor: '#fff'
	},
	forgot: {
		fontSize: 14,
		color: 'gray',
		marginTop: 20
	}
});
