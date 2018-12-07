import { Component, OnInit } from '@angular/core';
import {FormateurService} from '../../../Service/formateur.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-ajouter-formateur',
  templateUrl: './ajouter-formateur.component.html',
  styleUrls: ['./ajouter-formateur.component.css']
})
export class AjouterFormateurComponent implements OnInit {
  formater: object;
  constructor(private service: FormateurService, private router: Router) { }
  ajouter(e) {
    e.preventDefault();
    this.formater = {
      'cin':  e.target.querySelector('#cin').value,
      'nom': e.target.querySelector('#nom').value,
      'prenom': e.target.querySelector('#prenom').value,
      'email': e.target.querySelector('#email').value,
      'adresse': e.target.querySelector('#adresse').value,
      'numeroTel': e.target.querySelector('#num').value,
      'disponibilite': e.target.querySelector('#disponibilite').value === 'true'
    };
    this.service.postFormateur(this.formater).subscribe(res =>{
      console.log(this.formater);
      console.log(res);
      this.router.navigateByUrl('dashboard/formateur/lister');
    });



  }

  ngOnInit() {






  }

}
