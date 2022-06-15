import React from 'react'
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, ScrollView, Dimensions } from "react-native";
import circleoffifths from '../assets/circleoffifths.png'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MoreInfo() {

    return (
        <SafeAreaView style={{
            flex: 1,
            alignItems: 'center',
        }}>
            <StatusBar style="auto" hidden />
            <ScrollView contentContainerStyle={{
                alignItems: 'center'
            }}>
                <Image source={circleoffifths} style={{
                    height: Dimensions.get('screen').width * 0.6, //60% of the width
                    aspectRatio: 1,
                    marginTop: '5%',
                }} />
                <Text style={{
                    fontSize: 20,
                    padding: '5%'
                }}>{'\tTry it yourself! The picture above is called the circle of fifths. It can be used to find chords that sound nice together for a given key. Simply choose a key (C for example) and locate its wedge on the circle. The outer clockwise wedge (G) is the V chord. The outer counterclockwise wedge (F) is the IV chord. The inner wedge (Am) is the vi chord. The inner clockwise wedge (Em) is the iii chord. Lastly, the inner counterclockwise wedge (Dm) is the ii chord. These rules apply to any key you choose!'}</Text>
                <Text style={{fontWeight: 'bold', fontSize: 20, alignSelf: 'flex-start', paddingHorizontal: '5%'}}>TIP:</Text> 
                <Text style={{
                    fontSize: 20,
                    padding: '5%',
                    paddingTop: 0
                }}>You can also find the key's VII chord on the outer wedge 5 spaces clockwise; for the key of C it is B.</Text>
                <Text style={{
                    fontSize: 20,
                    padding: '5%'
                }}>{"\t"}Each row in the table below represents a Key and the chords known to sound nicely in that key (i.e. the circle of fifths in table form).{"\n"} 
                </Text>
                
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottomWidth: 1,
                }}>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>I</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>ii</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>iii</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>IV</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>V</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>vi</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottomWidth: 1,
                }}>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>C</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>Dm</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>Em</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>F</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>G</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>Am</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottomWidth: 1,
                }}>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>D♭</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>E♭m</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>Fm</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>G♭</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>A♭</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>B♭m</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottomWidth: 1,
                }}>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>D</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>Em</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>F♯m</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>G</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>A</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>Bm</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottomWidth: 1,
                }}>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>E♭</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>Fm</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>Gm</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>A♭</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>B♭</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>Cm</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottomWidth: 1,
                }}>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>E</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>F♯m</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>G♯m</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>A</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>B</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>C♯m</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottomWidth: 1,
                }}>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>F</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>Gm</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>Am</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>B♭</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>C</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>Dm</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottomWidth: 1,
                }}>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>F♯</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>G♯m</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>A♯m</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>B</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>C♯</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>D♯m</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottomWidth: 1,
                }}>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>G</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>Am</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>Bm</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>C</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>D</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>Em</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottomWidth: 1,
                }}>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>A♭</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>B♭m</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>Cm</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>D♭</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>E♭</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>Fm</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottomWidth: 1,
                }}>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>A</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>Bm</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>C♯m</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>D</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>E</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>F♯m</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottomWidth: 1,
                }}>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>B♭</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>Cm</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>Dm</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>E♭</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>F</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>Gm</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottomWidth: 1,
                }}>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>B</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>C♯m</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>D♯m</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>E</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>F♯</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 20,}}>G♯m</Text>
                </View>
                <Text style={{
                    fontSize: 20,
                    padding: '5%'
                }}><Text style={{fontWeight: 'bold'}}>Solos and Melodies:</Text>     {"\n\n\t"}If you are playing in the key of C you can experiment using the C Major Scale or C Major Pentatonic scale to create a solo that will sound nice with the key's chords. Alternately, if you are playing in the key of C you can play certain A Minor based scales such as A Natural Minor or A Minor Pentatonic. How is that possible? Take a look, here are the notes for C Major Pentatonic in alphabetical order (A-C-D-E-G) and here are the notes for A Minor Pentatonic (A-C-D-E-G), as you see they have the same exact notes. {"\n\t"} If you play a solo with the aforementioned scales for a given key and it's just not sounding right (as if you have the wrong notes), then the chord progression might emphasizing a chord other than the I or vi and therefore be in what's called a <Text style={{fontWeight: 'bold'}}>mode</Text>.  The mode the progression is in depends on which chord is being emphasized. Below is a table that shows the name of the mode if the chord on the left is the one being emphasized in the progression:{"\n\n"}
                <Text style={{fontWeight: 'bold'}}>Modes:</Text>
                </Text>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    marginHorizontal: '15%',
                    padding: '2%',
                    borderBottomWidth: 0,
                }}>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 22, fontWeight: 'bold',}}>I</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 22, fontWeight: 'bold',}}>Ionian</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    marginHorizontal: '15%',
                    padding: '2%',
                    borderBottomWidth: 0,
                }}>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 22, fontWeight: 'bold',}}>ii</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 22, fontWeight: 'bold',}}>Dorian</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    marginHorizontal: '15%',
                    padding: '2%',
                    borderBottomWidth: 0,
                }}>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 22, fontWeight: 'bold',}}>iii</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 22, fontWeight: 'bold',}}>Phrygian</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    marginHorizontal: '15%',
                    padding: '2%',
                    borderBottomWidth: 0,
                }}>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 22, fontWeight: 'bold',}}>IV</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 22, fontWeight: 'bold',}}>Lydian</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    marginHorizontal: '15%',
                    padding: '2%',
                    borderBottomWidth: 0,
                }}>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 22, fontWeight: 'bold',}}>V</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 22, fontWeight: 'bold',}}>Mixolydian</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    marginHorizontal: '15%',
                    padding: '2%',
                    borderBottomWidth: 1,
                }}>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 22, fontWeight: 'bold',}}>vi</Text>
                    <Text style={{flex: 1, textAlign: 'center', fontSize: 22, fontWeight: 'bold',}}>Aeolian</Text>
                </View>
                <Text style={{
                    fontSize: 20,
                    padding: '5%'
                }}>{"\t"}If you are playing in the key of C, and the progression emphasizes the iii chord (Em) experiment with a solo using the E Phrygian scale, if instead the ii chord is emphasized (Dm) experiment with the D Dorian scale. 
                <Text style={{fontWeight: 'bold'}}> {"\n\n"}IMPORTANT:</Text> All the information presented above and in other parts of this app is meant to be a very quick introduction to some musical concepts and theories. What's presented is in no way a comprehensive or complete coverage of these musical concepts. Please seek further education and of course experiment with your own thoughts and ideas.
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}