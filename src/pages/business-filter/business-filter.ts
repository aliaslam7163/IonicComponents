import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the BusinessFilterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-business-filter',
  templateUrl: 'business-filter.html',
})
export class BusinessFilterPage {

  categories: any[];
  selectedCategory: string;
  orderBy: string;

  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    let data = this.navParams.data;
    this.categories = data.categories;
    this.orderBy = data.orderBy;
    this.selectedCategory = data.selectedCategory;
  }

  applyFilters() {
    this.dismiss({
      selectedCategory: this.selectedCategory,
      orderBy: this.orderBy
    });
  }

  dismiss(data?: any) {
    this.viewCtrl.dismiss(data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessFilterPage');
  }

}
