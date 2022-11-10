function Select({options, handleOnChange, value}){
    return (
        <select name='categoria' className='selectCategoria' id='categoria' onChange={handleOnChange} value={value || ''}>
            <option>Selecione a categoria</option>
        {options.map((option) => (<option key={option.id} value={option.id} >{option.categoria}</option>))} 
    </select>
    );
}

export default Select;