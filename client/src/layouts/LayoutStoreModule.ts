import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import Store from '../store/index';

@Module({
  dynamic: true,
  name: 'layout',
  namespaced: true,
  store: Store
})



export default class LayoutStoreModule extends VuexModule {


  public leftDrawerOpen = false;
  public items: number[] = [];
  private tempCounter: number = 0;
  public totalAmount: number = 0;
  

  @Mutation
  public SET_LEFT_DRAWER_OPEN(value: boolean) {
    this.leftDrawerOpen = value;
  }

  @Action
  public setLeftDrawerOpen(value: boolean) {
    this.SET_LEFT_DRAWER_OPEN(value);
  }

  @Action
  public toggleLeftDrawer() {
    this.SET_LEFT_DRAWER_OPEN(!this.leftDrawerOpen);
  }

  @Mutation
  public ADD_ITEM() {
    this.items.push(this.tempCounter);
    this.tempCounter++;
    this.totalAmount += this.tempCounter;
    console.log(this.items);
  }

  @Action
  public addItem() {
    this.ADD_ITEM();
  }



}