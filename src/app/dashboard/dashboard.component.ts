import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [FormsModule, CommonModule, MatTableModule, MatPaginatorModule], // Ensure CommonModule is imported
})
export class DashboardComponent {
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'address',
    'mobile',
    'email',
    'department',
    'designation',
    'updated',
    'number',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = (
      data: PeriodicElement,
      filter: string
    ) => {
      return Object.keys(data).some((key) => {
        return data[key as keyof PeriodicElement]
          .toString()
          .toLowerCase()
          .includes(filter);
      });
    };
  }

  searchQuery: string = '';

  filterUsers() {
    this.dataSource.filter = this.searchQuery.trim().toLowerCase();
  }
}

export interface PeriodicElement {
  firstName: string;
  lastName: string;
  address: string;
  mobile: string;
  email: string;
  department: string;
  designation: string;
  updated: string;
  number: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    address: '123 Elm Street',
    mobile: '555-1234',
    email: 'john.doe@example.com',
    department: 'Sales',
    designation: 'Manager',
    updated: '2024-05-08 1:45PM',
    number: 1,
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    address: '456 Oak Avenue',
    mobile: '555-5678',
    email: 'jane.smith@example.com',
    department: 'Marketing',
    designation: 'Director',
    updated: '2024-03-08 2:10PM',
    number: 2,
  },
  {
    firstName: 'Alice',
    lastName: 'Johnson',
    address: '789 Pine Road',
    mobile: '555-8765',
    email: 'alice.johnson@example.com',
    department: 'HR',
    designation: 'Coordinator',
    updated: '2024-03-08 2:30PM',
    number: 3,
  },
  {
    firstName: 'Bob',
    lastName: 'Brown',
    address: '321 Maple Lane',
    mobile: '555-2345',
    email: 'bob.brown@example.com',
    department: 'IT',
    designation: 'Technician',
    updated: '2024-03-08 3:00PM',
    number: 4,
  },
  {
    firstName: 'Charlie',
    lastName: 'Davis',
    address: '654 Birch Boulevard',
    mobile: '555-3456',
    email: 'charlie.davis@example.com',
    department: 'Finance',
    designation: 'Analyst',
    updated: '2024-03-08 3:15PM',
    number: 5,
  },
  {
    firstName: 'Eve',
    lastName: 'Miller',
    address: '987 Cedar Street',
    mobile: '555-4567',
    email: 'eve.miller@example.com',
    department: 'Operations',
    designation: 'Supervisor',
    updated: '2024-03-08 3:30PM',
    number: 6,
  },
  {
    firstName: 'Frank',
    lastName: 'Wilson',
    address: '321 Spruce Way',
    mobile: '555-5678',
    email: 'frank.wilson@example.com',
    department: 'Legal',
    designation: 'Consultant',
    updated: '2024-03-08 3:45PM',
    number: 7,
  },
  {
    firstName: 'Grace',
    lastName: 'Lee',
    address: '654 Palm Drive',
    mobile: '555-6789',
    email: 'grace.lee@example.com',
    department: 'Engineering',
    designation: 'Developer',
    updated: '2024-03-08 4:00PM',
    number: 8,
  },
  {
    firstName: 'Henry',
    lastName: 'Taylor',
    address: '987 Fir Street',
    mobile: '555-7890',
    email: 'henry.taylor@example.com',
    department: 'R&D',
    designation: 'Scientist',
    updated: '2024-03-08 4:15PM',
    number: 9,
  },
  {
    firstName: 'Liam',
    lastName: 'Nelson',
    address: '321 Elm Boulevard',
    mobile: '555-3456',
    email: 'liam@example.com',
    department: 'Sales',
    designation: 'Rep',
    updated: '2024-03-08 5:15PM',
    number: 10,
  },
  {
    firstName: 'Olivia',
    lastName: 'Evans',
    address: '654 Birch Way',
    mobile: '555-7890',
    email: 'olivia@example.com',
    department: 'IT',
    designation: 'Support',
    updated: '2024-03-08 5:30PM',
    number: 11,
  },
  {
    firstName: 'Noah',
    lastName: 'Scott',
    address: '987 Pine Avenue',
    mobile: '555-6789',
    email: 'noah@example.com',
    department: 'Finance',
    designation: 'Advisor',
    updated: '2024-03-08 5:45PM',
    number: 12,
  },
];
