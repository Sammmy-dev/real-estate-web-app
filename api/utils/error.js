exports.errorHandler = (statusCode,message)=>{
      const error = new Error();
      error.statusCode=statusCode;
      error.message= message;
       return error // or use throw error
}