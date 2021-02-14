import { StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Dimensions.get('window').height - 125,
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    uiContainer: {
        height: '100%',
        justifyContent: 'flex-end',
    },
    bottomContainer: {
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    handle: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 5,

    },
    description: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '300',
        marginBottom: 12,
    },
    songRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    songName: {
        color: '#fff',
        fontSize: 17,
        marginLeft: 8,
    },
    songImage: {
        width: 40,
        height: 40,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'rgba(255,255,255,0.4)'
    },
    rightContainer: {
        alignSelf: 'flex-end',
        height: 350,
        justifyContent: 'space-between',
        marginRight: 5,
    },
    profilePicture: {
        width: 60,
        height: 60,
        borderRadius: 25,
        borderWidth: 3,
        borderColor: 'rgba(255,255,255,0.4)'
    },
    iconContainer: {
        alignItems: 'center',
    },
    statsLabel: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '400',
        marginTop: 5,
    }
})
export default styles