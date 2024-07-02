import PersonDisplay from "./components/PersonDisplay";
import Status from "./components/Status";
import { Person, ProfileProps } from "./interface/Person";
import Header from "./components/Header";
import NestedComponent from "./components/NestedComponent";
import Button from "./components/Button";

// interface Person {
//   state?: string
// }

function App() {
  const student: Person = {
    name: "Ike",
    age: 23,
    //email: "ikefights4friends@codingtemple.com",
    state: "Nebraska",
  };

  const profileData: ProfileProps = {
    person: student,
    message: "sup coders",
  };
  // type Animal = {
  //   species: string;
  //   age: number | string;
  //   bipedal: boolean;
  //   color?: string;
  // };

  // const kangaroo: Animal = {
  //   species: "kangaroo",
  //   age: "8",
  //   bipedal: true,
  // };

  const handleClick = (): void => {
    console.log("button clicked!")
  }

  return (
    <>
      <PersonDisplay {...profileData}/>
      <Status />
      <Header children="child component" />
      
      <NestedComponent>
        {/* props.children */}
        <h4>CHILD COMPONENT</h4>
        <Status />
      </NestedComponent>
      <Button buttonClick={handleClick} />
    </>
  );
}

export default App;
