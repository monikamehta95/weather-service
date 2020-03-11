export class Utils {

  static responseGenerators(responseData: {}, responseStatusCode: string, responseStatusMsg: string, responseErrors:any) {
    const responseJson : any = {}
    responseJson['result'] = responseData
    responseJson['status_code'] = responseStatusCode
    responseJson['status_message'] = responseStatusMsg

    // errors
    if (responseErrors === undefined) {
      responseJson['response_error'] = []
    } else {
      responseJson['response_error'] = responseErrors
    }

    return responseJson
  }

  static getStatusCode (statusCode: string) {
    if (statusCode === undefined) {
      statusCode = 'SR_S_500'
    }
    var status = statusCode.split('_')
    return Number(status[status.length - 1])
  }
}
