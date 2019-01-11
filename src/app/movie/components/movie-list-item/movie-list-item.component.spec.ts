import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListItemComponent } from './movie-list-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('MovieListItemComponent', () => {
  let component: MovieListItemComponent;
  let fixture: ComponentFixture<MovieListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieListItemComponent],
      imports: [
        SharedModule,
        RouterTestingModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListItemComponent);
    component = fixture.componentInstance;
    component.movie = {
      id: 'fake-id',
      title: 'fake-title',
      description: 'description-fake',
      imageUrl: 'http://exaple.org'
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
