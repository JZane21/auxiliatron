interface studentFrontend{
  id:number;
  name:string;
  lastName:string;
  code:number;
  userName:string;
  semestre:number;
}

export const setUser = (user) => {
  const STUDENT:studentFrontend = {
    id:user.id,
    name:user.name,
    lastName:user.lastname,
    code:user.code,
    userName:user.username,
    semestre:user.semestre,
  }
  return STUDENT;
}
