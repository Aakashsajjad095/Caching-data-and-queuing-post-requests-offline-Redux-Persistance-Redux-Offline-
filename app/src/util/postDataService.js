class PostApiService {

    postApiClass = async (url,formdata) => {
        return new Promise(async (classRes) => {
            var requestOptions = {
              method: 'POST',
              body: formdata,
              redirect: 'follow'
            };
            
            fetch(url, requestOptions)
              .then(response => response.text())
              .then(result =>{
                classRes(result)
                
                
              })
              .catch(error =>{
                classRes({"message":"Data Not Saved"})
                console.log('error', error)
              })
                
        })


    }

}
export const postApiSerive = new PostApiService()