export type User = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  image: string;
};

export async function getUsers(): Promise<User[]> {
  const req = await fetch("https://dummyjson.com/users?limit=8");
  const data = await req.json();

  return data?.users || [];
}
