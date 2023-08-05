import "./App.scss";
import { ComparablesCore } from "comparables-core";
function App() {
    return (
        <>
            <h1>Ilevel Adaptor</h1>
            <div className="card">
                <p>comparables-core will be mounted here</p>
                <ComparablesCore num={0} text={""} />
            </div>
        </>
    );
}

export default App;
