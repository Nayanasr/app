import info from "../information";

function DataFromFile() {
    console.log(info);
    return (
        <div>
            <h1>Hello</h1>
            <ul>{info.map((val, ind) => {
                return <li key={ind}>{val.name}</li>;
            })}
            </ul>
        </div>
    );
}

export default DataFromFile;