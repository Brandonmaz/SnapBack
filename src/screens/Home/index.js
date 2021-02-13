import React from 'react' 
import {View} from 'react-native' 
import Post from '../../components/Post'

const post1 = {
    id: 'p1',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4',
    user: {
        id: 'u1',
        username: 'BrandonMaz',
        userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF3uQ5tTrjEAz-VwGioin-tu8dnIPeAJO7Xw&usqp=CAU'
    },
    description: 'You are the best',
    songName: 'NF - The search',
    songImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF3uQ5tTrjEAz-VwGioin-tu8dnIPeAJO7Xw&usqp=CAU',
    likes: 123,
    comments: 12,
    shares: 44,
}

const Home = () => {
    return (
        <View>
            <Post post={post1}/>
        </View>
    )
}

export default Home