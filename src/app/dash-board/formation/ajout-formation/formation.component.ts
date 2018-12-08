import { Component, OnInit } from '@angular/core';
import {FormationService} from '../../../Service/formation.service';
import {FormateurService} from '../../../Service/formateur.service';
import {Formation} from '../../../Model/Formation';
import {Formateur} from '../../../Model/Formateur';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  formation: Formation;
  formateurs;
  formateur: Formateur;
  constructor(private service: FormationService, private formateurService: FormateurService) { }
  get() {
    this.formateurService.getFormateurs().subscribe(formateur => {
      this.formateurs = formateur;
    });

  }
  getForm(e) {
    this.formateurService.getFormateur(e.target.value).subscribe( res => {
      // @ts-ignore
      this.formation.formateur = res;
    });
  }
  submit(e) {
    e.preventDefault();

    this.service.postFormation(this.formation).subscribe(rs => console.log(rs));
  }
  ngOnInit() {
    this.get();
    this.formation = {
      idFormation: 0,
      description: '',
      dateFormation: null,
      prix: 0,
      formateur: null
    };
  }

}
