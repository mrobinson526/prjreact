import Greeter from './components/Greeter';
const App = () => {
    return (
        <div>
            <h1>This is Objective 1 of Simple Tasks a la React</h1>
            <Greeter phrase='Hello there ' name ='Cohort15'/>
            <Greeter phrase='Hello there ' name ='Stack Web Dev'/>
            <Greeter phrase='Hello there ' name ='Data Analytics'/>
        </div>
    );
};
export default App;