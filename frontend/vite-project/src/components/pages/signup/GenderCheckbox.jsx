
const GenderCheckbox = ({onCheckboxChange,selectedGender}) =>{
    return (
        <div className='flex p-2'>
            <div className='form-control'>
                <label htmlFor="" className={`label gap-2 cursor-pointer ${selectedGender==="male" ? "selected" : ""}`}>
                    <span className='label-text text-white'>Male</span>
                    <input type="checkbox" className='checkbox border-white' checked={selectedGender==="male"}
                    onChange={()=>onCheckboxChange("male")}/>
                </label>
            </div>
            <div className='form-control'>
                <label htmlFor="" className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}\`}`}>
                    <span className='label-text text-white'>Female</span>
                    <input type="checkbox" className='checkbox border-white'
                           checked={selectedGender==="female"}
                           onChange={()=>onCheckboxChange("female")}/>
                </label>
            </div>
        </div>
    )
}
export default GenderCheckbox;

//start
/*
const GenderCheckbox = () =>{
    return (
        <div className='flex p-2'>
            <div className='form-control'>
                <label htmlFor="" className={`label gap-2 cursor-pointer`}>
                    <span className='label-text text-white'>Male</span>
                    <input type="checkbox" className='checkbox border-white'/>
                </label>
            </div>
            <div className='form-control'>
                <label htmlFor="" className={`label gap-2 cursor-pointer`}>
                    <span className='label-text text-white'>Female</span>
                    <input type="checkbox" className='checkbox border-white'/>
                </label>
            </div>
        </div>
    )
}
export default GenderCheckbox;*/
