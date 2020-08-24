import React from 'react';
import {API} from '../components/Global';
import NaivgationBar from '../components/NavigationBar';
import LandingPage from '../pages/LandingPage';

class SearchPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {search_result_data: [] };
        this.foo = this.foo.bind(this);
    }

    async componentDidMount(){
        var headers = new Headers();
        headers.append('Authorization','Token '+localStorage.auth_token);
        var url = API + 'search/'+this.props.match.params.pattern;
        var request = new Request(url, {method:'GET', headers});
        
        const resp = await fetch(request);
        const data = await resp.json();
        console.log(data);
        console.log(this.state.main_data)
        this.setState(  {   search_result_data : data    }   );
    }

    render() {
        return (
                <div>
                    { localStorage.auth_token != undefined && 
                        <div>
                            <NaivgationBar />
                            Search result for {this.props.match.params.pattern}
                            {this.state.search_result_data.map(this.foo)}
                        </div>
                    ||
                        <LandingPage/>
                    }
                </div>
                );
    }
    foo(t){
        var search_url = '/friend/'+t.username;
        return <div>
                    <a href={search_url}>{t.username}</a>
                    <br/>
            </div>
    }
}

export default SearchPage;