import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Formateur} from '../../../Model/Formateur';
import {FormateurService} from '../../../Service/formateur.service';

@Component({
  selector: 'app-modifier-formateur',
  templateUrl: './modifier-formateur.component.html',
  styleUrls: ['./modifier-formateur.component.css']
})
export class ModifierFormateurComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute, private formateurService: FormateurService) { }
    public idFormateur;
    public formateur: Formateur;

  ngOnInit() {
    this.idFormateur = this.actRoute.snapshot.params.id;
    console.log(this.idFormateur);
    this.formateurService.getFormateurById(this.idFormateur).subscribe((result: Formateur) => {
      this.formateur = result;
      console.log(this.formateur);
    });

  }

}
