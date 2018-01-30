import { Component } from '@angular/core';
import { ModalController, NavController, IonicPage } from 'ionic-angular';
//import { DataProvider } from '../../providers/data-provider';
//import { BusinessesService } from '../../services/businesses.service';
import { BusinessDetailsPage } from '../business-details/business-details';
import { BusinessFilterPage } from '../business-filter/business-filter';
import { localStorage } from './../../providers/LocalStorage/localStorage';
import { Business } from "./../../models/business";
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Injectable()
@Component({
	selector: 'page-businesses',
	templateUrl: 'businesses.html'
})
export class BusinessesPage {
	queryText = '';
	businesses: any[] = [];
	orderBy: 'name' | 'distance' = 'name';
  i:number;
  filter:Business[] = [];

	get isFilterDirty(): boolean {
		return !!this.selectedCategory;
	}

	categories: any[] = [];
	selectedCategory: string = null;

	constructor(
		private modalCtrl: ModalController,
		private navCtrl: NavController,
		//public service: BusinessesService,
		private localStorage: localStorage
	) {
    console.log(this.filter);
	}

	/*ionViewCanEnter(): Promise<boolean> {
		return this.localStorage.init();
	}*/

	ionViewDidLoad() {
		this.updateList();
	}

	ionViewWillEnter() {
		Promise.all([this.loadCategories()])
			.then(() => this.updateList());

      // this.updateList()
	}

	updateList() {
	/*	this.localStorage.fetchBusinesses(this.queryText, false, this.selectedCategory, this.orderBy)
			.then(businesses => {
				this.businesses = businesses;
				console.log(this.businesses)
			});*/


	}

	presentFilter() {
		let modal = this.modalCtrl.create(BusinessFilterPage, {
			categories: this.categories,
			orderBy: this.orderBy,
			selectedCategory: this.selectedCategory
		});
		modal.present();

		modal.onWillDismiss((result) => {
			if (result) {
				this.selectedCategory = result.selectedCategory;
				this.orderBy = result.orderBy;
				this.updateList();
			}
		});
	}

	goToBusinessDetail(business: any) {
		//this.service.setCurrent(business);
		this.navCtrl.push(BusinessDetailsPage);
	}

	clearFilter() {
		this.selectedCategory = null;
		this.updateList();
	}

	selectCategory(category) {
		this.selectedCategory = category.$key;
		this.updateList();
	}

	public loadCategories() {
		 this.localStorage.getCategories().then(categories => {
      for(var i=0;i<=categories.length-1;i++)
      {
        if(this.categories.indexOf( categories[i].category) == -1 )
        {
          this.categories.push(categories[i].category);
        }
        this.businesses.push( categories[i]);
      }
		});
    console.log(this.categories);
    console.log("this is business array ");
    console.log(this.businesses);
	}
}
