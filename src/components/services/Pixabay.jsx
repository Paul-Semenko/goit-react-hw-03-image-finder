import axios from 'axios';


const BASE_URL = `https://pixabay.com/api/`;
const API_KEY = `23035596-1a90b7391e585725696c71550`;

 class PixabayFetch {
    
    constructor() {
        this.BASE_URL = BASE_URL;
        this.API_KEY = API_KEY;
        this._searchQuery = '';
        this._page = 1;
        this.perPage = 12;
        
    }
    get searchQuery() {
        return this._searchQuery;
    }
    set searchQuery(query) {
        this._searchQuery = query;
    }

    get page() {
        return this._page;
    }
    set page(value) {
        this._page += value;
    }

    resetPage() {
        this._page = 1;
    }


    searchImg() {
        let params = `?image_type=photo&orientation=horizontal&q=${this._searchQuery}&page=${this._page}&key=${this.API_KEY}&per_page=${this.perPage}`;
        let url = this.BASE_URL + params;
        return axios
            .get(url)
            .then((result) => result.data  
            )            
            .catch((error) => {
                console.log(error);
                
            });
    }
}

export default PixabayFetch;