import react from 'react'
export default function Func_JSX_LeVanHoang(props) {
    const users = {
        name: "LeVanHoang",
        age: 20
    };
    return (
        <div>
            <h2>Function Components Demo</h2>
            <h3>
                Welcome to {users.name}-{users.age}
            </h3>
            <hr/>
            <h3>Props:
                <br/>fullname: {props.fullname}
                <br/>age: {props.age}
            </h3>
        </div>
    );
}
