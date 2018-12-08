import { Component, OnInit } from '@angular/core';
import {FormationService} from '../../../Service/formation.service';
import {FormateurService} from '../../../Service/formateur.service';

@Component({
  selector: 'app-lister-formation',
  templateUrl: './lister-formation.component.html',
  styleUrls: ['./lister-formation.component.css']
})
export class ListerFormationComponent implements OnInit {
  public formations: Object ;



  constructor(private service: FormationService, private formateurService: FormateurService, private formationService:FormationService) { }
  get() {
    this.service.getFormations().subscribe(formation => this.formations = formation);

  }
  supprimer(x) {
    if (confirm('voulez vous supprimer')) {
      this.formationService.delete(x).subscribe(res => this.get());
    }
    console.log(x);

  }
  ngOnInit() {
    // @ts-ignore
    document.getElementsByTagName('app-lister-formation')[0].style = 'width:100%';
    this.get();
  }

}
