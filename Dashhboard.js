import * as React from 'react';
import { View, Text, SafeAreaView ,TouchableOpacity,Image, ImageBackground,ScrollView } from 'react-native';




const Dashhboard = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>

        <View style={{ flex: 1,width:"100%",backgroundColor:'white'}}>

          <View style={{width:"90%",marginLeft:"5%",marginTop:30,flexDirection:"row"}}>
                <View style={{width:"49%",height:200}}>
                    <TouchableOpacity onPress={ ()=> navigation.navigate('Profile')}>
                        <View style={{width:"100%",height:170,justifyContent:"center",alignItems:"center"}}>
                            <ImageBackground source={require('../Image/Background.jpg')} resizeMode="cover" style={{width:"100%", height:"100%",justifyContent:"center",alignItems:"center"}}>
                                <View style={{width:"94%",height:"90%",borderRadius:7}}>
                                    <Image source={require('../Image/employee.png')} resizeMode="center" style={{width:"100%", height:"100%"}}/>
                                </View>
                            </ImageBackground>
                        </View>
                        <Text style={{width:"100%",height:30,textAlign:"center",fontWeight:"bold",paddingTop:3}}>
                            Profile
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:"49%",height:200,marginLeft:"2%"}}>
                    <TouchableOpacity onPress={ ()=> navigation.navigate('Attendence')}>
                        <View style={{width:"100%",height:170,justifyContent:"center",alignItems:"center"}}>
                            <ImageBackground source={require('./Image/Background.jpg')} resizeMode="cover" style={{width:"100%", height:"100%",justifyContent:"center",alignItems:"center"}}>
                                <View style={{width:"94%",height:"90%",borderRadius:7}}>
                                    <Image
                                    source={require('./Image/calendar.png')} resizeMode="center"
                                    style={{width:"100%", height:"100%"}}/>
                                </View>
                            </ImageBackground>
                        </View>
                        <Text style={{width:"100%",height:30,textAlign:"center",fontWeight:"bold",paddingTop:3}}>
                            Attendence
                        </Text>
                    </TouchableOpacity>
                </View>

          </View>

            <View style={{width:"90%",marginLeft:"5%",marginTop:5,flexDirection:"row"}}>
                <View style={{width:"49%",height:200}}>
                    <TouchableOpacity onPress={ ()=> navigation.navigate('Exam')}>
                        <View style={{width:"100%",height:170,justifyContent:"center",alignItems:"center"}}>
                            <ImageBackground source={require('./Image/Background.jpg')} resizeMode="cover" style={{width:"100%", height:"100%",justifyContent:"center",alignItems:"center"}}>
                                <View style={{width:"94%",height:"90%",borderRadius:7}}>
                                    <Image
                                    source={require('./Image/analysis.png')} resizeMode="center"
                                    style={{width:"100%", height:"100%"}}/>
                                </View>
                            </ImageBackground>
                        </View>
                        <Text style={{width:"100%",height:30,textAlign:"center",fontWeight:"bold",paddingTop:3}}>
                            Training
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:"49%",height:200,marginLeft:"2%"}}>
                    <TouchableOpacity onPress={ ()=> navigation.navigate('Fees')}>
                        <View style={{width:"100%",height:170,justifyContent:"center",alignItems:"center"}}>
                            <ImageBackground source={require('./Image/Background.jpg')} resizeMode="cover" style={{width:"100%", height:"100%",justifyContent:"center",alignItems:"center"}}>
                                <View style={{width:"94%",height:"90%",borderRadius:7}}>
                                    <Image
                                    source={require('./Image/salary.png')} resizeMode="center"
                                    style={{width:"100%", height:"100%"}}/>
                                </View>
                            </ImageBackground>
                        </View>
                        <Text style={{width:"100%",height:30,textAlign:"center",fontWeight:"bold",paddingTop:3}}>
                            Salary
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={{width:"90%",marginLeft:"5%",marginTop:5,flexDirection:"row"}}>
                <View style={{width:"49%",height:200}}>
                    <TouchableOpacity onPress={ ()=> navigation.navigate('Homework')}>
                        <View style={{width:"100%",height:170,justifyContent:"center",alignItems:"center"}}>
                            <ImageBackground source={require('./Image/Background.jpg')} resizeMode="cover" style={{width:"100%", height:"100%",justifyContent:"center",alignItems:"center"}}>
                                <View style={{width:"94%",height:"90%",borderRadius:7}}>
                                    <Image
                                    source={require('./Image/target.png')} resizeMode="center"
                                    style={{width:"100%", height:"100%"}}/>
                                </View>
                            </ImageBackground>
                        </View>
                        <Text style={{width:"100%",height:30,textAlign:"center",fontWeight:"bold",paddingTop:3}}>
                            Target
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:"49%",height:200,marginLeft:"2%"}}>
                    <TouchableOpacity onPress={ ()=> navigation.navigate('Reportcard')}>
                        <View style={{width:"100%",height:170,justifyContent:"center",alignItems:"center"}}>
                            <ImageBackground source={require('./Image/Background.jpg')} resizeMode="cover" style={{width:"100%", height:"100%",justifyContent:"center",alignItems:"center"}}>
                                <View style={{width:"94%",height:"90%",borderRadius:7}}>
                                    <Image
                                    source={require('./Image/clipboard.png')} resizeMode="center"
                                    style={{width:"100%", height:"100%"}}/>
                                </View>
                            </ImageBackground>
                        </View>
                        <Text style={{width:"100%",height:30,textAlign:"center",fontWeight:"bold",paddingTop:3}}>
                            Project Report
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={{width:"90%",marginLeft:"5%",marginTop:5,flexDirection:"row"}}>
                <View style={{width:"49%",height:200}}>
                    <TouchableOpacity onPress={ ()=> navigation.navigate('Diary')}>
                        <View style={{width:"100%",height:170,justifyContent:"center",alignItems:"center"}}>
                            <ImageBackground source={require('./Image/Background.jpg')} resizeMode="cover" style={{width:"100%", height:"100%",justifyContent:"center",alignItems:"center"}}>
                                <View style={{width:"94%",height:"90%",backgroundColor:'white',borderRadius:7}}>
                                    <Image
                                    source={require('./Image/diary.png')} resizeMode="center"
                                    style={{width:"100%", height:"100%"}}/>
                                </View>
                            </ImageBackground>
                        </View>
                        <Text style={{width:"100%",height:30,textAlign:"center",fontWeight:"bold",paddingTop:3}}>
                            Diary
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:"49%",height:200,marginLeft:"2%"}}>
                    <TouchableOpacity onPress={ ()=> navigation.navigate('Achievements')}>
                        <View style={{width:"100%",height:170,justifyContent:"center",alignItems:"center"}}>
                            <ImageBackground source={require('./Image/Background.jpg')} resizeMode="cover" style={{width:"100%", height:"100%",justifyContent:"center",alignItems:"center"}}>
                                <View style={{width:"94%",height:"90%",backgroundColor:'white',borderRadius:7}}>
                                    <Image
                                    source={require('./Image/success.png')} resizeMode="center"
                                    style={{width:"100%", height:"100%"}}/>
                                </View>
                            </ImageBackground>
                        </View>
                        <Text style={{width:"100%",height:30,textAlign:"center",fontWeight:"bold",paddingTop:3}}>
                            Achievements
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={{width:"90%",marginLeft:"5%",marginTop:5,flexDirection:"row"}}>
                <View style={{width:"49%",height:200}}>
                    <TouchableOpacity onPress={ ()=> navigation.navigate('Grades')}>
                        <View style={{width:"100%",height:170,justifyContent:"center",alignItems:"center"}}>
                            <ImageBackground source={require('./Image/Background.jpg')} resizeMode="cover" style={{width:"100%", height:"100%",justifyContent:"center",alignItems:"center"}}>
                                <View style={{width:"94%",height:"90%",backgroundColor:'white',borderRadius:7}}>
                                    <Image
                                    source={require('./Image/performance.png')} resizeMode="center"
                                    style={{width:"100%", height:"100%"}}/>
                                </View>
                            </ImageBackground>
                        </View>
                        <Text style={{width:"100%",height:30,textAlign:"center",fontWeight:"bold",paddingTop:3}}>
                            Performance
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:"49%",height:200,marginLeft:"2%"}}>
                    <TouchableOpacity onPress={ ()=> navigation.navigate('HireEmployee')}>
                        <View style={{width:"100%",height:170,justifyContent:"center",alignItems:"center"}}>
                            <ImageBackground source={require('./Image/Background.jpg')} resizeMode="cover" style={{width:"100%", height:"100%",justifyContent:"center",alignItems:"center"}}>
                                <View style={{width:"94%",height:"90%",backgroundColor:'white',borderRadius:7}}>
                                    <Image
                                    source={require('./Image/AddE.png')} resizeMode="contain"
                                    style={{width:"100%", height:"100%"}}/>
                                </View>
                            </ImageBackground>
                        </View>
                        <Text style={{width:"100%",height:30,textAlign:"center",fontWeight:"bold",paddingTop:3}}>
                            Add Employee
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
export default Dashhboard;
