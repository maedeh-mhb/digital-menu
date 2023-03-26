

function SearchInput(props) {
    const {label,value,onChange} = props;
    return (

            <input 
            label={label}
            value={value}
            onChange={onChange}
            />

    );
}

export default SearchInput;