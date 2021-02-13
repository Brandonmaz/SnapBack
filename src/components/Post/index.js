import React, { useState } from 'react' 
import {
    View,
    TouchableWithoutFeedback,
    Text,
    Image,
} from 'react-native'
import Video from 'react-native-video'
import styles from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Foundation from 'react-native-vector-icons/Foundation'

const Post = (props) => {

    const {post} = props

    const [paused, setPaused] = useState(false)

    const onPlayPausePress = () => {
        setPaused(!paused)
    }
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPlayPausePress}>
                <View>
                    <Video 
                        source={{uri: post.video}}
                        style={styles.video}
                        onError={(e :LoadError) => console.log(e)}
                        resizeMode={'cover'}
                        repeat={true}
                        paused={paused}
                    />
                    

                    <View style={styles.uiContainer}>
                        <View style={styles.rightContainer}>
                            <View style={styles.profileContainer}>
                                <Image style={styles.profilePicture} source={{uri: post.user.userImage}} />
                            </View>
                            <View style={styles.iconContainer}>
                                <MaterialCommunityIcons name={"heart-plus-outline"} size={45} color='rgba(255,255,255,0.9)'></MaterialCommunityIcons>
                                <Text style={styles.statsLabel}>{post.likes}</Text>
                            </View>
                            <View style={styles.iconContainer}>
                                <MaterialCommunityIcons name={"comment-processing-outline"} size={45} color='rgba(255,255,255,0.9)'></MaterialCommunityIcons>
                                <Text style={styles.statsLabel}>{post.comments}</Text>
                            </View>
                            <View style={styles.iconContainer}>
                                <FontAwesome name={"slideshare"} size={40} color='rgba(255,255,255,0.9)'></FontAwesome>
                                <Text style={styles.statsLabel}>{post.shares}</Text>
                            </View>
                        </View>
                        <View style={styles.bottomContainer}>
                            <View>
                                <Text style={styles.handle}>@{post.user.username}</Text>
                                <Text style={styles.description}>{post.description}</Text>
                                <View style={styles.songRow}>
                                    <Fontisto name={"music-note"} size={24} color='ghostwhite'></Fontisto>
                                    <Text style={styles.songName}>{post.songName}</Text>
                                </View>
                            </View>
                            <Image style={styles.songImage} source={{uri: post.songImage}}/>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}
export default Post