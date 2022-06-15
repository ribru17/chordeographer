import { StatusBar } from "expo-status-bar";
import React, { useState} from "react";
import { Text, View, TouchableWithoutFeedback, Button } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export default function BPMFinder({ navigation }) {

    const [bpm, setBPM] = useState(0)
    const [counter, setCounter] = useState(0)
    const [time, setTime] = useState(0)
    const [lastTime, setLastTime] = useState(0)
    const [timer, setTimer] = useState(null)
    const [lastTimer, setLastTimer] = useState(null)


    function handleBPMButton() {
        setCounter(counter + 1)
        setBPM(60 / lastTime * 40 * 0.8)
        setLastTime(0)
        /*
        if (!timer.current) {
            timer.current = setInterval(handleTimer, 1000)
        }*/
        if (!timer) {
            setTimer(setInterval(handleTimer, 1000))
            setLastTimer(setInterval(handleLastTimer, 25))
            setCounter(0)
            setTime(0)
        }
        //console.log(counter, time)
    }

    function handleTimer() {
        setTime(prevTime => prevTime + 1)
        //setBPM(prevBPM => Math.floor(counter / time * 60))
        //console.log(timer.current, time, counter)
    }

    function handleLastTimer() {
        setLastTime(prevTime => prevTime + 1)
    }

    function handleReset() {
        setTimer(clearInterval(timer))
        setLastTimer(clearInterval(lastTimer))
        //clearInterval(timer.current)
    }

    function displayBPM() {
        if (time === 0) return 0
        //if (time <= 8) return "Keep tapping..."
        let bpm2 = counter / time * 60
        let avg = (bpm2 + bpm2 + bpm) / 3
        return Math.floor(avg)
    }

    return (
        <View style={globalStyles.container}>
            <StatusBar style="auto" hidden />
            <Text style={{
                padding: '5%',
                fontSize: 24,
                fontWeight: '400'
            }}>Press to find BPM</Text>
            <TouchableWithoutFeedback onPressIn={handleBPMButton}>
                <View style={{
                    width: '50%',
                    aspectRatio: 1,
                    backgroundColor: '#444B6E',
                    borderRadius: '15%'
                }}></View>
            </TouchableWithoutFeedback>
            <Text style={{
                padding: '5%',
                fontSize: 24,
                fontWeight: '400'
            }}>{`BPM: ${displayBPM()}`}</Text>
            <Button title="Reset" onPress={handleReset} />
        </View>
    )
}