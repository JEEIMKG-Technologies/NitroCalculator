import React from 'react';
import buttonStyles from '../styles/buttonStyles';
//REACT NATIVE Y TAILWIND CSS
import { StyleSheet, StatusBar, ImageBackground, View, TouchableOpacity } from 'react-native';
//import { Text, TouchableRipple  } from 'react-native-paper';
// React Navigation
import { useNavigation } from '@react-navigation/native';

const InputScreen = () => {
    const navigation = useNavigation();
    const handleNavigateToSignIn = () => { navigation.navigate('signin'); };
    const handleNavigateToLogIn = () => { navigation.navigate('login'); };
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/ciispalmaapp.appspot.com/o/fondo.jpg?alt=media&token=b861ad71-5831-490f-aacd-985e67e69d00' }} style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center' }}>
                <StatusBar backgroundColor='#fafafa' barStyle="dark-content" />
                <View style={{ flex: 1 }}>
                <View style={styles.carouselContainer}>
                    <View style={styles.slide}>
                        <Text variant='displayMedium' style={[styles.heading, { color: '#fafafa' }]}>Aceite de palma</Text>
                        <Text variant='titleLarge' style={[styles.caption, { color: '#fafafa' }]}>Un verdadero Tesoro para la Salud y el Sabor</Text>
                    </View>
                </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30 }}>
                        <TouchableOpacity style={[buttonStyles.button, { marginRight: 10 }]} onPress={handleNavigateToLogIn}>
                            <Text variant='titleSmall' style={buttonStyles.buttonText}>LOG IN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={buttonStyles.button_signup} onPress={handleNavigateToSignIn}>
                            <Text variant='titleSmall' style={buttonStyles.buttonText_signup}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center', marginBottom: 30 }}>
                        <Text variant='titleMedium' style={styles.entraceText}>Colabora con 
                            <Text style={styles.entraceText}> Ciispalma</Text>
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    safeArea: { backgroundColor: 'white' },
    carouselContainer: { position: 'relative', justifyContent: 'flex-end', marginTop: 150, bottom: 0, width: '100%', height: 370 },
    slide: { width: 300, height: 300, padding: 20, marginRight: 100 },
    heading: { fontWeight: 'bold', color: '#fafafa' },
    caption: { color: '#fafafa' },
    indicatorContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 },
    indicator: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#fafafa', marginHorizontal: 4 },
    activeIndicator: { backgroundColor: '#6c9b6d' },
    entraceText: { color: '#e6e6fa' }
});

export default InputScreen;