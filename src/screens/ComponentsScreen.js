import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {

    const name = <Text style={styles.subHeaderStyle}>Hi! My name is Matt</Text>

    return (
            <View>
                <Text style={styles.textStyle}>This is the components screen</Text>
                {name}
            </View>
        )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen