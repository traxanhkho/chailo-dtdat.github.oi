import React from 'react';

const Form = (props) => {
    const { forms } = props ; 
    return ( 
        <form action="" className='col-lg-6 col-md-6 col-xs-12'>
            <div className="wrapper">
                <h2>nhập thông tin đặt hàng</h2>
                {forms.map(f => (
                    <div className="input-group" key={f.name}>
                        <label htmlFor={f.name}>{f.name}</label>
                        <input type={f.type} placeholder={f.placeholder} />
                    </div>
                ))}
            </div>
            
        </form>
    );
}
 
export default Form;