import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ModalController } from 'ionic-angular';
import { Food } from '../../model/foodSlider/food.model';
import { AccountPage } from '../account/account';
import { PricingProvider, Foo } from '../../providers/pricing/pricing';

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
  ordered: Foo;
  delivery: string;
  item: any;
  total: number;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private modal: ModalController,
    private pricing: PricingProvider
    ) {
    
      this.foods = Food;
      this.item = this.pricing.getItem();
      this.delivery = "Bielawska 12";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    console.log(this.foods);
  }
  searchAddress(q){
    console.log('searched!!!!');
    
  }

  increase(id, purchase: number) {
    
    
      this.pricing.incrementItem();
    
      this.total = this.pricing.setPrice(purchase);
      this.item[id] = this.pricing.getItem();

  }

  showModal(){
    this.modal.create(AccountPage).present();

  }

}
