export class Job {
  query: string;
  title: string;
  agencies: string;
  postingType: string;
  numberOfPositions: string;
  businessTitle: string;
  civilServiceTitle: string;
  id: string;
  userId: string;
  constructor(index, id) {
    this.query = 'https://data.cityofnewyork.us/resource/swhp-yxa4.json?';
    this.title = 'Job Search: Any';
    this.agencies = 'Any';
    this.postingType = 'Any';
    this.numberOfPositions = 'Any';
    this.businessTitle = 'Any';
    this.civilServiceTitle = 'Any';
    this.id = index;
    this.userId = id;
  }
}
