export class Todo {
  action : string;
  deadline : string;
  constructor( action: string, deadline: string) {
    this.action = action;
    this.deadline = deadline;
  }
}
