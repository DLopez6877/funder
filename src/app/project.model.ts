export class Project {
  constructor (
    public name: string,
    public managers: string,
    public description: string,
    public targetAmount: string,
    public currentAmount: string,
    public intent: string,
    public swag: string
  ) { }
}
