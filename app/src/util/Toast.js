import Toast from 'react-native-tiny-toast'
class TinyToastService {

    showLoadingToast = async (message) => {
        Toast.showLoading(message+'...')
    }
    hideToast = async () => {
        Toast.hide()
    }
    showToast = async (message) => {
        Toast.show(message)
    }
    showSuccessToast = async (message) => {
        Toast.showSuccess(message)
    }

   
   
    

}
export const tinyToastSerive = new TinyToastService()