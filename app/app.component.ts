import {Component} from '@angular/core';

@Component({
    moduleId : module.id,
    selector: 'app',
    templateUrl : 'app.component.html',
    styleUrls : ['app.component.css']

    //styles : [`
    //header {background-color : forestgreen}
    //`]
})


export class AppComponent {

    public title : string = "Angular 2DO";
}