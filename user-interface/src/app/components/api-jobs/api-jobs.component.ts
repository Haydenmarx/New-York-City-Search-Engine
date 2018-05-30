import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../jobs.service';

@Component({
  selector: 'app-api-jobs',
  templateUrl: './api-jobs.component.html',
  styleUrls: ['./api-jobs.component.css']
})
export class ApiJobsComponent implements OnInit {

  queryStart = 'https://data.cityofnewyork.us/resource/swhp-yxa4.json?';
  query = 'https://data.cityofnewyork.us/resource/swhp-yxa4.json?';
  title = 'Job Search:';
  minified = true;

  agencies = [
    {title: 'Any', clicked: true},
    {title: 'DEPT OF HEALTH/MENTAL HYGIENE', clicked: false},
    {title: 'DEPT OF ENVIRONMENT PROTECTION', clicked: false},
    {title: 'DEPARTMENT OF TRANSPORTATION', clicked: false},
    {title: 'DEPT OF INFO TECH & TELECOMM', clicked: false},
    {title: 'DEPT OF DESIGN & CONSTRUCTION', clicked: false},
    {title: 'NYC HOUSING AUTHORITY', clicked: false},
    {title: 'ADMIN FOR CHILDREN\'S SVCS', clicked: false},
    {title: 'OFFICE OF THE COMPTROLLER', clicked: false},
    {title: 'LAW DEPARTMENT', clicked: false},
    {title: 'DEPARTMENT OF SANITATION', clicked: false},
    {title: 'HOUSING PRESERVATION & DVLPMNT', clicked: false},
    {title: 'DEPARTMENT OF INVESTIGATION', clicked: false},
    {title: 'DEPARTMENT OF BUSINESS SERV.', clicked: false},
    {title: 'HRA/DEPT OF SOCIAL SERVICES', clicked: false},
    {title: 'OFFICE OF MANAGEMENT & BUDGET', clicked: false},
    {title: 'POLICE DEPARTMENT', clicked: false},
    {title: 'DEPT O CITYWIDE ADMIN SVCS', clicked: false},
    {title: 'DEPT OF PARKS & RECREATION', clicked: false},
    {title: 'NYC EMPLOYEES RETIREMENT SYS', clicked: false},
    {title: 'FINANCIAL INFO SVCS AGENCY', clicked: false},
  ];

  selectedAgencies = this.agencies[0];

  postingType = [
    {title: 'Any', clicked: false},
    {title: 'Internal', clicked: false},
    {title: 'External', clicked: false},
  ];

  selectedPostingType = this.postingType[0];

  numberOfPositions = [
    {title: 'Any', clicked: false},
    {title: '1', clicked: false, searchString: '__of_positions=1'},
    {title: '2 - 5', clicked: false, searchString: '$where=__of_positions between "2" and "5"'},
    {title: '6 - 10', clicked: false, searchString: '$where=__of_positions between "6" and "10"'},
    {title: '11 - 20', clicked: false, searchString: '$where=__of_positions between "11" and "20"'},
    {title: '21 - 50', clicked: false, searchString: '$where=__of_positions between "21" and "50"'},
    {title: '51 - 100', clicked: false, searchString: '$where=__of_positions between "51" and "100"'},
    {title: '100+', clicked: false, searchString: '$where=__of_positions between "51" and "10000"'},
  ];

  selectedNumberOfPositions = this.numberOfPositions[0];

  businessTitle = [
    {title: 'Any', clicked: true},
    {title: 'College Aide', clicked: false},
    {title: 'Confidential Invesigator', clicked: false},
    {title: 'Project Manager', clicked: false},
    {title: 'Public Health Inspector, Food Safety and Community Sanitation', clicked: false},
    {title: 'Budget Analyst', clicked: false},
    {title: 'Watershed Maintainer', clicked: false},
    {title: 'Assistant General Counsel', clicked: false},
    {title: 'Community Associate', clicked: false},
    {title: 'Investigator', clicked: false},
    {title: 'Assistant Counsel', clicked: false},
    {title: 'Executive Assistant', clicked: false},
    {title: 'School Mental Health Consultant, Bureau of School Health/SH Mental Health', clicked: false},
    {title: 'NFP Nurse Home Visitor, Bureau of Maternal Infant and Reproductive Health', clicked: false},
    {title: 'Civil Engineering Intern', clicked: false},
    {title: 'Procurement Analyst', clicked: false},
    {title: 'Senior Project Manager', clicked: false},
    {title: 'Community Coordinator', clicked: false},
    {title: 'COMPUTER SPECIALIST (SOFTWARE)', clicked: false},
    {title: 'Engineering Technician I', clicked: false},
    {title: 'Assistant Civil Engineer', clicked: false},
  ];

  selectedBusinessTitle = this.businessTitle[0];

  civilServiceTitle = [
    {title: 'Any', clicked: true},
    {title: 'COMMUNITY COORDINATOR', clicked: false},
    {title: 'COMPUTER SYSTEMS MANAGER', clicked: false},
    {title: 'CITY RESEARCH SCIENTIST', clicked: false},
    {title: 'CLERICAL ASSOCIATE', clicked: false},
    {title: 'ADMINISTRATIVE PROJECT MANAGER', clicked: false},
    {title: 'CIVIL ENGINEER', clicked: false},
    {title: 'AGENCY ATTORNEY', clicked: false},
    {title: 'COMMUNITY ASSOCIATE', clicked: false},
    {title: 'PRINCIPAL ADMINISTRATIVE ASSOC', clicked: false},
    {title: 'COLLEGE AIDE (ALL CITY DEPTS)', clicked: false},
    {title: 'ASSOCIATE PROJECT MANAGER', clicked: false},
    {title: 'ADMINISTRATIVE STAFF ANALYST (', clicked: false},
    {title: 'CONFIDENTIAL INVESTIGATOR', clicked: false},
    {title: 'ADMINISTRATIVE ENGINEER', clicked: false},
    {title: 'ASSOCIATE PUBLIC HEALTH SANITA', clicked: false},
    {title: 'COMPUTER SPECIALIST (SOFTWARE)', clicked: false},
    {title: 'SPECIAL CONSULTANT (MENTAL HEA', clicked: false},
    {title: 'ASSISTANT CIVIL ENGINEER', clicked: false},
    {title: 'ACCOUNTANT', clicked: false},
    {title: 'ASSOCIATE STAFF ANALYST', clicked: false},
  ];

  selectedCivilServiceTitle = this.civilServiceTitle[0];

  toggleClicked = (item, selection) => {
    const selected = 'selected' + selection.substring(0, 1).toUpperCase() + selection.substring(1);
    if (item.clicked) {
      item.clicked = !item.clicked;
      this[selection][0].clicked = true;
      this[selected] = this[selection][0];
    } else {
      this[selected].clicked = false;
      item.clicked = true;
      this[selected] = item;
    }
    this.queryBuilder();
  }

  toggleMinified = () => {
    this.minified = !this.minified;
  }

  queryBuilder = () => {
    this.query = this.queryStart;
    this.title = 'Job Search:';
    if (this.selectedAgencies.title !== 'Any') {
      this.title += ' Agency of ' + this.selectedAgencies.title + ' AND';
      this.query = this.query.concat('agency=', this.selectedAgencies.title.replace( /&/g, (linebreak) => '%26'), '&');
    }
    if (this.selectedPostingType.title !== 'Any') {
      this.title += ' Posting Type of ' + this.selectedPostingType.title + ' AND';
      this.query = this.query.concat('posting_type=', this.selectedPostingType.title, '&');
    }
    if (this.selectedNumberOfPositions.title !== 'Any') {
      this.title += ' Number of Postions ' + this.selectedNumberOfPositions.title + ' AND';
      this.query = this.query.concat(this.selectedNumberOfPositions.searchString, '&');
    }
    if (this.selectedBusinessTitle.title !== 'Any') {
      this.title += ' Business Title of ' + this.selectedBusinessTitle.title + ' AND';
      this.query = this.query.concat('business_title=', this.selectedBusinessTitle.title, '&');
    }
    if (this.selectedCivilServiceTitle.title !== 'Any') {
      this.title += ' Civil Service Title of ' + this.selectedCivilServiceTitle.title + ' AND';
      this.query = this.query.concat('civil_service_title=', this.selectedCivilServiceTitle.title, '&');
    }
    if (this.title.length > 11) {
      this.title = this.title.substring(0, this.title.length - 3);
    } else {
      this.title += ' Any';
    }
    this.query = this.query.substring(0, this.query.length - 1);
  }

  searchJobs = () => {
    this.jobsService.getJobs(this.query).subscribe( jobs => console.log(jobs));
  }

  constructor(private jobsService: JobsService) { }

  ngOnInit() {
  }

}
