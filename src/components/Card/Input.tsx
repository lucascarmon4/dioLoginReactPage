import { Input, FormLabel } from "@chakra-ui/react";
interface IInput {
    id: string; 
    label: string;
    type: string;
    styleInput?: any;
    value?: string;
    onChange?: any;
}


export const InputComponent = ( {id, label, type, styleInput, value, onChange} : IInput) => {
    return (
        <>
          <FormLabel  htmlFor={id}>{label}</FormLabel>
          <Input onChange={onChange} value={value} style={styleInput} placeholder={label} type={type} id={id}/>
        </>
    )
}