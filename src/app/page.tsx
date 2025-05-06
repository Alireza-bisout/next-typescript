import UserCard from "./components/UserCard"


export default function Home() {

  let age: number = 1


  let username: string = "alireza bisout"
  let isAdmin: boolean = true

  let coreses: string[] = ["math", "persion", "english"]

  const personalInfo: { name: string } = {
    name: "alireza"
  }

  function multiply(a: number, b: number): number {
    return a * b
  }

  const multiply2 = (a: number, b: number): number => {
    return a * b
  }


  return (


    <div className="flex justify-evenly items-center h-screen">
      <UserCard name="Alireza" age={18} isOnline={true} />
      <UserCard name="Hossein" age={18} isOnline={false} />
      <UserCard name="Iman" age={23} isOnline={true} />
    </div>


  );
}
