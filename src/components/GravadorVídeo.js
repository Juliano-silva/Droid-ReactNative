import React from "react"
import * as MediaLibrary from 'expo-media-library'
import { View,Text,Button,SafeAreaView } from "react-native"
import { useEffect,useState,useRef } from "react"
import { shareAsync } from "expo-sharing";
import { Camera } from "expo-camera";
import { Video } from "expo-av";
export default function GravadorV(){
    let cameraRef = useRef();
    const [hasCameraPermission,setHasCameraPermission] = useState();
    const [hasMicrophonePermission,setHasMicrophonePermission] = useState();
    const [hasMediaLibraryPermission,setHasMediaLibraryPermission] = useState();
    const [isRecording,setIsRecording] = useState(false);
    const [video,setVideo] = useState(video);
    useEffect(() => {
        (async () => {
            // granted é garantida
            const CameraPermission = await Camera.requestCameraPermissionsAsync();
            const microphonePermission = await Camera.requestMicrophonePermissionsAsync();
            const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
            setHasCameraPermission(CameraPermission.status === "granted");
            setHasMicrophonePermission(microphonePermission.status === "granted");
            setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
        })();
    },[])
    if (hasCameraPermission === undefined || hasMicrophonePermission === undefined){
        return <Text>Requestion permissions...</Text>
    }else if(!hasCameraPermission){
        return <Text>Permission for Camera not granted</Text>
    }
    let recordVideo = async () => {
        setIsRecording(true);
        let options = {
            quality: "1080p",
            maxDuration: 60,
            mute: false
        };
        cameraRef.current.recordAsync(options).then((recordedVideo) => {
            setVideo(recordedVideo);
            setIsRecording(false);
        });
    }

    let stopRecording = () => {
        setIsRecording(false);
        cameraRef.current.stopRecording()
    };
    if (video){
        let shareVideo = async() => {
            shareAsync(video.uri).then(() => {
                setVideo(undefined);
            });
        }
        let saveVideo = () => {
            MediaLibrary.saveToLibraryAsync(video.uri).then(() => {
                setVideo(undefined)
            });
        }
        return (
        <SafeAreaView>
            <Video source={{uri: video.uri}} useNativeControls resizeMode="contain" isLooping/>
            <Button title="Share" onPress={shareVideo}/>
            {hasMediaLibraryPermission ? <Button title="Save" onPress={saveVideo} /> : undefined}
            <Button title="Discard" onPress={() => setVideo(undefined)}/>
        </SafeAreaView>
        )
    }
    return(
        <Camera ref={cameraRef}>
            <View>
                <Button title={isRecording ? "Stop Record" : "Record Video"}
                onPress={isRecording?stopRecording : recordVideo}/>
            </View>
        </Camera>
    )
}
