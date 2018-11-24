import { Component, OnInit } from '@angular/core';
import {FormateurService} from '../../../formateur.service';

@Component({
  selector: 'app-lister-formateur',
  templateUrl: './lister-formateur.component.html',
  styleUrls: ['./lister-formateur.component.css']
})
export class ListerFormateurComponent implements OnInit {
   public formateurs ;
  constructor(private service: FormateurService) { }

  ngOnInit() {
      this.service.getFormateurs().subscribe(formateur => this.formateurs=formateur);
  }

}
