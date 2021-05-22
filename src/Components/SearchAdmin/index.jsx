import React,{useState,useRef} from "react";
import SearchIcon from "@material-ui/icons/Search";



function SearchBar(props) {
  const typingTimeOut =useRef(null)
  const {onSubmit} = props
  const [searchValue,setSearchValue] = useState("")
  const handleChange =(e)=>{
      const value = e.target.value
      setSearchValue(e.target.value)
      if(!onSubmit) return 
      if(typingTimeOut.current){
        clearTimeout(typingTimeOut.current)
      }
      typingTimeOut.current = setTimeout(()=>{
        const formValues = {
          searchValue:value,
        }
        onSubmit(formValues);

      },300)
   

  }
  return (
      <div className=" d-flex flex-row-reverse bd-highlight m-3">
        <form className="form-inline" >
        <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchValue}
            onChange={handleChange}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            <SearchIcon/>
        </button>
        </form>

      </div>
  );
}

export default SearchBar;
