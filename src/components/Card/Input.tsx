interface IInput {
    id: string; 
    label: string;
    type: string;
}

export const Input = ( {id, label, type} : IInput) => {
    return (
        <>
          <label htmlFor={id}>{label}</label>
          <input type={type} id={id}/>
        </>
    )
}