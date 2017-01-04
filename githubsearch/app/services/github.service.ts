import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username: string;
    private client_id = 'c18064115cf175c94554';
    private client_secret = 'fdbd06d27c2bed81c70b9767e40662996db0d833';

    constructor(private _http: Http) {
        console.log('Github Service Ready...');
        this.username = 'abchakra'
    }

    getUser() {
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret).map(
            res => res.json());
    }

     getRepos() {
        return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret).map(
            res => res.json());
    }

    updateUser(username:string){
        this.username=username;
    }
}