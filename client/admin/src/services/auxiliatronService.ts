import { setUser } from "../interfaces/interfaceAuxiliatron";
import { auxAPI } from "./apis"

export const getStudentsList = async () => {
  let studentsList;
  try{
    const {data} = await auxAPI.get(`/user?auth=secretkey`);
    const STUDENT_LIST_SEND:[] = [];
    data.data.map((student) => {
      STUDENT_LIST_SEND.push(setUser(student))
    });
    return STUDENT_LIST_SEND;
  } catch(err){
    console.error(err);
    return null;
  }
}
