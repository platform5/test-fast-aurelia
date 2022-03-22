export class App {
  
  public displayRegion = false;

  public message = 'Hello Fast World!';

  public openRegion(): void {
    this.displayRegion = true;
  }
  public closeRegion(): void {
    this.displayRegion = false;
  }

}
