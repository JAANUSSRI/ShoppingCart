function Search(props){
    return(
        <div className="search">
            <center>
                <h3 style={{color:"purple", fontFamily:"cursive", fontWeight:"bold", fontSize:"30px"}}>WELCOME TO JJ's SHOPPING CART</h3>
                <input id ='searchbar' 
                        type="text" 
                        placeholder="Search"
                        onChange={props.searchdress}
                />
            </center>
        </div>
        
        
    );
}
export default Search;
