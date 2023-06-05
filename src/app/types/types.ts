export type UserList = {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  company: { department: string, title: string },
};
