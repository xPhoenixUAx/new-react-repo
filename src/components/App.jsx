// src/App.jsx

/*import Product from './Product';

export default function App() {
  return (
    <div>
      <h1>Best selling</h1>

      <Product name="Tacos with Lime"/>
      <Product name="Tacos with Cats"/>
      <Product name="Tacos with Dogs"/>
    
    </div>
  );
}
*/
import Test from './test/Test'; 
import Mailbox from './test/Mailbox';
import Mailbox2 from './test/Mailbox2';

const App = () => {
  const  username = "John Doe";
  const messages = ['Message 1', 'Message 2']
  const unreadMessages = ['Message 1', 'Message 2', 'Message 3'] /// якщо масив порожній буде виконуватись друга умова
  return(
    <><><>
      <Test
        name="John"
        surname="Dou" />

    </><div>
        <Mailbox username={username} messages={messages} />
      </div></><>
        <Mailbox2 name={username} unreadMessages={unreadMessages} /></></>
  );
};

export default App;  
  