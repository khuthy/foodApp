import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ModalController } from 'ionic-angular';
import { Food } from '../../model/foodSlider/food.model';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  
  foods: any[];
  options: any;
  sliderConfig: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController) {
    this.foods = Food;
     
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    console.log(this.foods);
  }
  searchAddress(q){
    console.log('searched!!!!');
    
  }

}
