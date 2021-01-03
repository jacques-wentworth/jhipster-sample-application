import { Moment } from 'moment';
import { IJob } from 'app/shared/model/job.model';

export interface ITask {
  id?: number;
  title?: string;
  description?: string;
  test1?: Moment;
  test2?: Moment;
  jobs?: IJob[];
}

export class Task implements ITask {
  constructor(
    public id?: number,
    public title?: string,
    public description?: string,
    public test1?: Moment,
    public test2?: Moment,
    public jobs?: IJob[]
  ) {}
}
