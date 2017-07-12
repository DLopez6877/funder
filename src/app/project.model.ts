export class Project {
  constructor (
    public name: string,
    public managers: string,
    public description: string,
    public targetAmount: number,
    public currentAmount: number,
    public intent: string,
    public swag: string
  ) { }
}
