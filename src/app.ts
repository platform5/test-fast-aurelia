export class App {
  
  public displayCalendar = false;

  public message = 'Hello Fast World!';

  public openCalendar(): void {
    this.displayCalendar = true;
  }
  public closeCalendar(): void {
    this.displayCalendar = false;
  }

}
