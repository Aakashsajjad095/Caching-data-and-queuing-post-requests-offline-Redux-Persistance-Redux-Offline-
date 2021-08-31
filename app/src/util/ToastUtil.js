import Toast from "react-native-root-toast";

export default class ToastUtil {

    static show(message) {
        const config = {
            backgroundColor: '#FFF',
            textColor: '#000'
        }

        Toast.show(message, config)
    }
}