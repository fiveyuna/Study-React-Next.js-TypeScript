import React from 'react'

// return 이름 입력을 위한 텍스트 박스
const Name = () => {
    // Input : OnChange Function
    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        console.log(e.target.value)
    }


    return (
        <div style={{padding: '16px', backgroundColor: 'grey'}}>
            <label htmlFor="name"> 이름 </label>
            <input id="name" className="input-name" type="text" onChange={onChange} />
            
        </div>
    )
}

export default Name;
