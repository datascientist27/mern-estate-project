
export const errorHandler=(statuscode,message)=>{

    //cest un constructeur d'erreur 
    const error =new error();
   error.statuscode=statuscode;
    error.message=message;
    return error;

}