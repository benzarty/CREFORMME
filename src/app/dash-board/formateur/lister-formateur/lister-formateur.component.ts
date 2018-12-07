import { Component, OnInit } from '@angular/core';
import {FormateurService} from '../../../Service/formateur.service';

@Component({
  selector: 'app-lister-formateur',
  templateUrl: './lister-formateur.component.html',
  styleUrls: ['./lister-formateur.component.css']
})
export class ListerFormateurComponent implements OnInit {
   public formateurs ;
  constructor(private service: FormateurService) { }

  supprimer(x){
    if(confirm('voulez vous supprimer'))
    this.service.delete(x).subscribe(res => this.get());
    console.log(x);

  }
  get(){
    this.service.getFormateurs().subscribe(formateur => this.formateurs = formateur);
  }
  ngOnInit() {
    // @ts-ignore
    document.getElementsByTagName('app-lister-formateur')[0].style= 'width:100%';
    this.get();
  }

}
