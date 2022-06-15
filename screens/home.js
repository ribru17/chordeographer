import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import ModalSelector from 'react-native-modal-selector'
import { SafeAreaView } from 'react-native-safe-area-context';
import { majorKeys, minorKeys, majorKeysFlatted } from "../constants";

export default function Home({ navigation }) {

    const [currentIndex, setCurrentIndex] = useState(9)
    const [keyValue, setKeyValue] = useState()
    const [chordProg, setChordProg] = useState(null)

    const numerals = {
        'I': majorKeys[currentIndex],
        'IV': majorKeys[(currentIndex + majorKeys.length - 1) % majorKeys.length],
        'V': majorKeys[(currentIndex + 1) % majorKeys.length],
        'ii': minorKeys[(currentIndex + minorKeys.length - 1) % minorKeys.length],
        'iii': minorKeys[(currentIndex + 1) % minorKeys.length],
        'vi': minorKeys[currentIndex % minorKeys.length],
        'VII': majorKeys[(currentIndex + 5) % majorKeys.length],
        '♭VII': majorKeysFlatted[(currentIndex + 5) % majorKeysFlatted.length],
        'iv': majorKeys[(currentIndex + majorKeys.length - 1) % majorKeys.length] + 'm',
        'III': minorKeys[(currentIndex + 1) % minorKeys.length].substring(0, minorKeys[(currentIndex + 1) % minorKeys.length].length - 1)
    }

    const chordProgs = [
        `${numerals['I']} ${numerals['V']} ${numerals['vi']} ${numerals['IV']}`,
        `${numerals['I']} ${numerals['IV']} ${numerals['vi']} ${numerals['V']}`,
        `${numerals['I']} ${numerals['IV']} ${numerals['I']} ${numerals['V']}`,
        `${numerals['I']} ${numerals['vi']} ${numerals['IV']} ${numerals['V']}`,
        `${numerals['I']} ${numerals['vi']} ${numerals['ii']} ${numerals['V']}`,
        `${numerals['vi']} ${numerals['V']} ${numerals['IV']} ${numerals['V']}`,
        `${numerals['I']} ${numerals['V']} ${numerals['vi']} ${numerals['♭VII']}`,
        `${numerals['vi']} ${numerals['ii']} ${numerals['V']} ${numerals['I']}`,
        `${numerals['IV']} ${numerals['V']} ${numerals['I']} ${numerals['vi']}`,
        `${numerals['I']} ${numerals['♭VII']} ${numerals['IV']} ${numerals['I']}`,
        `${numerals['I']} ${numerals['V']} ${numerals['ii']} ${numerals['IV']}`,
        `${numerals['vi']} ${numerals['V']} ${numerals['iii']} ${numerals['IV']} ${numerals['V']}`,
        `${numerals['I']} ${numerals['ii']} ${numerals['IV']} ${numerals['V']}`,
        `${numerals['I']} ${numerals['V']} ${numerals['♭VII']} ${numerals['IV']}`,
        `${numerals['I']} ${numerals['IV']} ${numerals['V']}`,
        `${numerals['V']} ${numerals['IV']} ${numerals['I']}`,
        `${numerals['I']} ${numerals['V']} ${numerals['IV']} ${numerals['I']}`,
        `${numerals['ii']} ${numerals['vi']} ${numerals['ii']} ${numerals['vi']} ${numerals['♭VII']} ${numerals['I']}`,
        `${numerals['ii']} ${numerals['V']} ${numerals['I']}`,
        `${numerals['I']} ${numerals['V']} ${numerals['vi']} ${numerals['iii']} ${numerals['IV']} ${numerals['I']} ${numerals['IV']} ${numerals['V']}`,
        `${numerals['I']} ${numerals['IV']} ${numerals['V']} ${numerals['IV']}`,
        `${numerals['I']} ${numerals['IV']} ${numerals['ii']} ${numerals['V']}`,
        `${numerals['I']} ${numerals['ii']} ${numerals['iii']} ${numerals['IV']} ${numerals['V']}`,
        `${numerals['I']} ${numerals['III']} ${numerals['IV']} ${numerals['iv']}`,
        `${numerals['I']} ${numerals['V']} ${numerals['I']} ${numerals['iv']}`,
        `${numerals['vi']} ${numerals['V']} ${numerals['IV']} ${numerals['III']}`,
    ]

    function fillPicker() {
        let index = 0
        let retval = []
        for (let i = 0, l = majorKeys.length; i < l; i++) {
            retval.push({ key: index++, label: `${majorKeys[i]} / ${minorKeys[i]}` })
        }
        retval.sort((a, b) => (a.label > b.label) ? 1 : ((b.label > a.label) ? -1 : 0))
        let initRetval = [{key: -1, label: 'Keys', section: true}]
        retval = initRetval.concat(retval)
        return retval
    }

    function fillChordPicker() {
        let index = -1
        let retval = [{ key: index++, label: 'Chord Progressions', section: true }]
        retval.push({ key: index++, label: 'Generate random' })
        retval.push({ key: index++, label: 'Random from list' })
        for (let i = 0, l = chordProgs.length; i < l; i++) {
            retval.push({ key: index++, label: chordProgs[i] })
        }
        return retval
    }

    function handlePickerChange(o) {
        setCurrentIndex(o.key)
        setKeyValue(o.label)
    }

    function handleChordPickerChange(o) {
        if (o.key === 0) { //generate random
            let possibilities = ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'VII', '♭VII']
            let chords = [4, 4, 3, 5]
            let start = Math.random() < 0.5
            let major = Math.random() < 0.5
            let prog = []
            if (major) {
                prog.push('I')
            } else {
                prog.push('vi')
            }
            let temp = []
            let amt = chords[Math.floor(Math.random() * chords.length)]
            for (let i = 0, l = amt - 1; i < l; i++) {
                temp.push(possibilities[Math.floor(Math.random() * possibilities.length)])
            }
            if (start) {
                prog = prog.concat(temp)
            } else {
                prog = temp.concat(prog)
            }
            setChordProg(prog)
            return
        }
        let label = o.label
        if (o.key === 1) { //random from list
            label = chordProgs[Math.floor(Math.random() * chordProgs.length)]
        }
        let romans = label.split(' ')
        romans = romans.map((note) => {
            return getKeyByValue(numerals, note)
        })
        setChordProg(romans)
    }

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }

    function renderChordProg() {
        if (!chordProg) return
        let str = ''
        for (let i = 0, l = chordProg.length; i < l; i++) {
            str += numerals[chordProg[i]] + ' '
        }
        str = str.substring(0, str.length - 1)
        return str
    }

    return (
        <>
            <SafeAreaView style={globalStyles.container}>
                <StatusBar style="auto" hidden />
                <Text style={{
                    fontSize: 22,
                    fontWeight: 'bold',
                    marginBottom: '3%'
                }}>Key:</Text>
                <ModalSelector data={fillPicker()} initValue="C / Am" animationType="fade" cancelText="Cancel" overlayStyle={{flex: 1, padding: '5%', justifyContent: 'center', backgroundColor: 'lightgray'}} onChange={(option) => {handlePickerChange(option)}}>
                    <TextInput editable={false} placeholder="C / Am" value={keyValue} placeholderTextColor={'black'} style={{
                        borderWidth: 1, borderColor: 'black', padding: 10, borderRadius: 5, fontSize: 22, fontWeight: 'bold', backgroundColor: '#93E9BE'
                    }} />
                </ModalSelector>
                <View style={{
                    padding: '5%',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexShrink: 1,
                        padding: '1%',
                    }}>
                        <Text style={{fontWeight: "bold", fontSize: 26}}>I</Text>
                        <Text style={{fontSize: 22,}}>{numerals['I']}</Text>
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexShrink: 1,
                        padding: '1%',
                    }}>
                        <Text style={{fontWeight: "bold", fontSize: 26}}>ii</Text>
                        <Text style={{fontSize: 22,}}>{numerals['ii']}</Text>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        flexShrink: 1,
                        padding: '1%',
                    }}>
                        <Text style={{fontWeight: "bold", fontSize: 26}}>iii</Text>
                        <Text style={{fontSize: 22,}}>{numerals['iii']}</Text>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        flexShrink: 1,
                        padding: '1%',
                    }}>
                        <Text style={{fontWeight: "bold", fontSize: 26}}>IV</Text>
                        <Text style={{fontSize: 22,}}>{numerals['IV']}</Text>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        flexShrink: 1,
                        padding: '1%',
                    }}>
                        <Text style={{fontWeight: "bold", fontSize: 26}}>V</Text>
                        <Text style={{fontSize: 22,}}>{numerals['V']}</Text>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        flexShrink: 1,
                        padding: '1%',
                    }}>
                        <Text style={{fontWeight: "bold", fontSize: 26}}>vi</Text>
                        <Text style={{fontSize: 22,}}>{numerals['vi']}</Text>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        flexShrink: 1,
                        padding: '1%',
                    }}>
                        <Text style={{fontWeight: "bold", fontSize: 26}}>VII</Text>
                        <Text style={{fontSize: 22,}}>{numerals['VII']}</Text>
                    </View>
                </View>
                <Text style={{
                    fontSize: 22,
                    fontWeight: 'bold'
                }}>Common Chord Progressions:</Text>
                <Text style={{
                    fontSize: 20,
                    marginTop: '3%'
                }}>
                    {`${numerals['I']} ${numerals['V']} ${numerals['vi']} ${numerals['IV']}`}
                </Text>
                <Text style={{
                    fontSize: 20
                }}>
                    {`${numerals['I']} ${numerals['IV']} ${numerals['vi']} ${numerals['V']}`}
                </Text>
                <Text style={{
                    fontSize: 20
                }}>
                    {`${numerals['I']} ${numerals['IV']} ${numerals['I']} ${numerals['V']}`}
                </Text>
                <Text style={{
                    fontSize: 20
                }}>
                    {`${numerals['I']} ${numerals['vi']} ${numerals['IV']} ${numerals['V']}`}
                </Text>
                <Text style={{
                    fontSize: 20
                }}>
                    {`${numerals['I']} ${numerals['vi']} ${numerals['ii']} ${numerals['V']}`}
                </Text>
                <Text style={{
                    fontSize: 20,
                    marginBottom: '3%'
                }}>
                    {`${numerals['vi']} ${numerals['V']} ${numerals['IV']} ${numerals['V']}`}
                </Text>
                <ModalSelector data={fillChordPicker()} initValue="Select chord progression" animationType="fade" cancelText="Back" overlayStyle={{flex: 1, padding: '5%', justifyContent: 'center', backgroundColor: 'lightgray'}} onChange={(option) => {handleChordPickerChange(option)}}>
                    <TextInput editable={false} placeholder="Select chord progression" style={{
                        borderWidth: 1, borderColor: '#000', padding: 10, borderRadius: 5, fontSize: 18, fontWeight: 'bold', backgroundColor: '#93E9BE'
                    }} placeholderTextColor={'black'} value={renderChordProg()} />
                </ModalSelector>
                <Button title="More Info" onPress={() => {navigation.navigate('MoreInfo')}} />
            </SafeAreaView>
        </>
    )
}