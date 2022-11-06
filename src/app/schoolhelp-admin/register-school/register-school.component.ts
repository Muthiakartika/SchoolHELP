import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { RegisterSchoolDialogComponent } from './register-school-dialog/register-school-dialog.component';

export interface SchoolData {
  id: number;
  schoolName: string;
  schoolCity: string;
  schoolAddress: string;
}

const STATIC_DATA: SchoolData[]=[
  {id: 1, schoolName: 'ITB STIKOM Bali', schoolCity: 'Denpasar', schoolAddress: 'Jl. Raya Puputan No. 86 Renon'},
  {id: 2, schoolName: 'HELP University', schoolCity: 'Kuala Lumpur', schoolAddress: 'No. 15, Jalan Sri Semantan 1, Off, Jalan Semantan, Bukit Damansara, 50490 Kuala Lumpur'},
  {id: 3, schoolName: 'Hogwarts School of Witchcraft and Wizardry', schoolCity: 'Hogsmeade', schoolAddress: 'Hogwarts Castle, Highlands, Scotland, Great Britain'},
  {id: 4, schoolName: 'School For Good', schoolCity: 'Near Blue Forest', schoolAddress: 'Near Blue Forest'},
  {id: 5, schoolName: 'School For Evil', schoolCity: 'Near Blue Forest', schoolAddress: 'Near Blue Forest'},
  {id: 6, schoolName: 'Tokyo Metropolitan Curse Technical College', schoolCity: 'Tokyo', schoolAddress: 'Tokyo'}
]

@Component({
  selector: 'app-register-school',
  templateUrl: './register-school.component.html',
  styleUrls: ['./register-school.component.css']
})
export class RegisterSchoolComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'schoolName', 'schoolCity', 'schoolAddress', 'action'];
  dataSource!: MatTableDataSource<SchoolData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog) { }
  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource(STATIC_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(){
    this.dialog.open(RegisterSchoolDialogComponent, {
      width: "40%"
    }).afterClosed();
  }

}
