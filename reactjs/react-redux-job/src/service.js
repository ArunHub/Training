class JobService {

  getCMS = (url) => {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();

      const onload = () => {
        if (request.status === 200) {
          resolve(request.response);
        } else {
          reject(new Error('error occured' + request.status))
        }
      };

      const onerror = () => {
        reject(new Error("Can't XHR " + JSON.stringify(url)));
      }

      const onprogress = (oEvent) => {
        if (oEvent.lengthComputable) {
          // var percentComplete = oEvent.loaded / oEvent.total * 100;
        } else {
          // Unable to compute progress information since the total size is unknown
        }
      }

      request.open("GET", url, true);
      request.responseType = "json";
      request.onprogress = onprogress;
      request.onload = onload;
      request.onerror = onerror;
      request.send();

      // var req = new XMLHttpRequest();
      // req.overrideMimeType("application/json");
      // req.open('GET', url, true);
      // req.onload = function () {
      //   var jsonResponse = JSON.parse(req.responseText);
      //   console.log(jsonResponse)
      //   // do something with jsonResponse
      // };
      // req.send();
    })
  }

  calcPosition(arr, val) {
    arr.forEach((t, i) => {
      if (t.id === val.id) {
        t.positions = val.positions
      }
    })
    return arr;
  }

}

const jobService = new JobService();
export default jobService;