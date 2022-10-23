import { Component, OnInit } from '@angular/core';
import { ChuckService } from '../service/chuck.service';
import { joke } from '../model/joke.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  cat: any = []

  category: string = 'Select a';
  
  joke?: joke;

  constructor(private chuckService: ChuckService, private spinner: NgxSpinnerService) { }
  title = 'chuckNoris';

  ngOnInit(): void {
    let sessionCat = sessionStorage.getItem('category');
    if(sessionCat){
      this.runCategory(sessionCat);
    }
    this.getCat();
  }
  
  runCategory(cat: string){
    this.category = cat;
    sessionStorage.setItem('category', this.category);
    this.getJoke(this.category);
  }

  getCat(){
    this.spinner.show();
    this.chuckService.getCat().subscribe(data =>{
      this.cat = data;
      console.log('category: ', this.cat);
      this.spinner.hide();
    }, err=>{
      console.error("err: ", err);
      this.spinner.hide();
    })
  }

  getJoke(cat: string){
    this.spinner.show();
    this.chuckService.getJoke(cat).subscribe((data: joke) =>{
      console.log('joke: ', data);
      this.joke = data;
      this.spinner.hide();
    }, err =>{
        console.error(err);
        this.spinner.hide();
    });
  }

}
