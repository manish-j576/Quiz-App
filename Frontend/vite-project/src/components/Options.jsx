import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { SubmitBtn } from './SubmitBtn';

export function Options({ data , setTotalCorrect ,setCount }) {
    const [selectedOption, setSelectedOption] = useState(null); 


    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    
    if (!data || !data.options || data.options.length < 4) {
        return <div>Loading options...</div>;
    }

    return (
        <div style={{ marginTop: "10px" }}>
            <ul className="list-group">
                <li className="list-group-item">
                    <input
                        type="radio"
                        name="radioBtn"
                        value={data.options[0]}
                        checked={selectedOption === data.options[0]}
                        onChange={handleOptionChange}
                    />
                    {data.options[0]}
                </li>
                <li className="list-group-item">
                    <input
                        type="radio"
                        name="radioBtn"
                        value={data.options[1]}
                        checked={selectedOption === data.options[1]}
                        onChange={handleOptionChange}
                    />
                    {data.options[1]}
                </li>
                <li className="list-group-item">
                    <input
                        type="radio"
                        name="radioBtn"
                        value={data.options[2]}
                        checked={selectedOption === data.options[2]}
                        onChange={handleOptionChange}
                    />
                    {data.options[2]}
                </li>
                <li className="list-group-item">
                    <input
                        type="radio"
                        name="radioBtn"
                        value={data.options[3]}
                        checked={selectedOption === data.options[3]}
                        onChange={handleOptionChange}
                    />
                    {data.options[3]}
                </li>
            </ul>
            <br />
            <SubmitBtn  data={data} selectedOption={selectedOption} setTotalCorrect={setTotalCorrect} setCount={setCount} /> 
        </div>
    );
}
