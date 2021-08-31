class GetApiService {

    getApiClass = async (url) => {

        return new Promise(async (classRes) => {
            fetch(url)
            .then((response) => response.json())
            .then((json) => {
              classRes(json)
              
            })
            .catch((error) =>{
                 classRes([])
            })
        })


    }

}
export const getApiSerive = new GetApiService()