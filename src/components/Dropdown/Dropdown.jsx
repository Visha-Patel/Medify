import React,{useState,useEffect,useRef} from 'react';
import './Dropdown.css';
import { IoIosArrowDown } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";

function DropDown({fetchData, placeholder , state , setFunction ,id}){
    const [data,setData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const dropdownRef = useRef(null);

    const handleToggle = () => setIsOpen((prev) => !prev);

    const handleOption = (option) =>{

        setSelectedOption(option);
        setIsOpen(false);
        setFunction(option);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => 
            document.removeEventListener('mousedown', handleClickOutside);
        
    }, []);

    useEffect(() => {
        async function fetch_data(){
                try{ 
                    const data = state ? await fetchData(state) : await fetchData();
                    setData(data);
                    console.log(data);
                }catch(err){
                    console.error(err);
                }
            }

            fetch_data();
    
    },[state,fetchData]);


    // return (
    //     <div id={id}>
    //         <select className={state ? 'cities' : 'state'} onChange={(e) => setFunction(e.target.value)}>
    //             <option disabled selected value=''> {placeholder}</option>
    //             {data.map((item) => (
    //                 <option key={item} value={item } > {item}</option>
    //             ))}
    //         </select>
    //     </div>
    // )

    return(
        <div className='dropdown' id={id} ref={dropdownRef}>
            <div className='dropdown-header' onClick={handleToggle}>
               <div className='dropdown-header-content'><IoMdSearch/>{selectedOption ||placeholder}</div>  <IoIosArrowDown/>
            </div>
            {isOpen && (
                <ul className='dropdown-list'>
                    {data.map((item) => (
                        <li key={item} className='dropdown-item' onClick={() => handleOption(item)}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default DropDown;