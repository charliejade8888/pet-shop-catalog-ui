import axios from "axios"

class HelloWorldService {
    executeHelloWorldService() {
        return axios.get('http://localhost:9000/catalog/list?pageNo=1&pageSize=10', {
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem("bearer-token")
            }
          })
        // console.log('executed service')
    }

}

export default new HelloWorldService()