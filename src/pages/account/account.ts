import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { PricingProvider } from '../../providers/pricing/pricing';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  total: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private view: ViewController,
    private pricing: PricingProvider
    ) {
      this.pricing.incrementItem();
      this.pricing.incrementItem();
      this.addPrice();
      this.total = this.pricing.getPrice();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  addPrice() {
    this.pricing.setPrice(20);
  }

 

}
