import { useState, useContext } from "react";
import Context from "../Context/Context";

function NavBar() {
  const { filterByNumericValues, setfilterByNumericValues } = useContext(Context);
  const [filter, setFilter] = useState('');
  const [allowedFilters, setAllow] = useState([
    'Ano de Lancamento',
    'Nome',
    'País de Origem'
  ]);

  function handleFilter(key, value) {
    setFilter({
      ...filter,
      [key]: value,
    });
    console.log(filter);
  };
  
  useState(() => {
    if (filterByNumericValues.length > 0) {
      let newAllowed;
      filterByNumericValues.forEach((value) => {
        newAllowed = allowedFilters.filter((allow) => (
          value.column !== allow
        ));
      });
      setAllow(newAllowed);
    }
  }, [filterByNumericValues]);
  
  return(
    <nav>
      <div className="navbar">
        <h2>Filtrar por:</h2>
        <label htmlFor="'column'" className="checkbox">
              <select
                type="checkbox"
                id="'column'"
                value={filter.column}
                onChange={ ( {target} ) => { handleFilter('column',target.value); } }
              >
                {
                  allowedFilters.length > 0 && allowedFilters.map((allowedFilter) => (
                    <option key={ allowedFilter } value={ allowedFilter }>{ allowedFilter }</option>
                  ))
                }
              </select>
            </label>
            <button
          type="button"
          data-testid="button-filter"
          onClick={ () => {
            if (filterByNumericValues.length > 0) {
              setfilterByNumericValues([...filterByNumericValues, filter]);
            } else {
              setfilterByNumericValues([filter]);
            }
          } }
        >
          Filtrar
        </button>
      </div>
    </nav>
  )
}

export default NavBar;