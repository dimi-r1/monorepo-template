import { useState } from "react";
import "./ComparablesCore.scss";

export function ComparablesCore({
    num = 0,
    text = "",
}: {
    num?: number;
    text?: string;
}) {
    const [count, setCount] = useState(0);

    console.log({ num, text });

    return (
        <>
            <h1>Comparables MFE</h1>
            <div className="card">
                <button type="submit" onClick={() => setCount((c) => c + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default ComparablesCore;
