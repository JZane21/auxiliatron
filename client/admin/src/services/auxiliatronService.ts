import { setUser } from "../interfaces/interfaceAuxiliatron";
import { auxAPI } from "./apis"

export const getStudentsList = async () => {
  let studentsList;
  try{
    studentsList = await auxAPI.get(`/user?auth=secretkey`);
    const STUDENT_LIST_SEND:[] = [];
    studentsList.data.map((student) => {
      STUDENT_LIST_SEND.push(setUser(student))
    });
    console.log("EXITO getStudentsList!");
    return STUDENT_LIST_SEND;
  } catch(err){
    console.error(err);
    return null;
  }
}
