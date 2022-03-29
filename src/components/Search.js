
function Search (props){
    
    return (
    <div>
    <div className="ui fluid search selection dropdown">
      <input type="hidden" name="country"/>
        <i className="dropdown icon"></i>
        <div className="default text">Select Country</div>
        <div className="menu">
          <div className="item" data-value="af"><i className="af flag"></i>Afghanistan</div>
          <div className="item" data-value="ax"><i className="ax flag"></i>Aland Islands</div>
          <div className="item" data-value="al"><i className="al flag"></i>Albania</div>
          <div className="item" data-value="dz"><i className="dz flag"></i>Algeria</div>
          <div className="item" data-value="as"><i className="as flag"></i>American Samoa</div>
          <div className="item" data-value="ad"><i className="ad flag"></i>Andorra</div>
        </div>
    </div>
  </div>
    );
}


export default Search;
