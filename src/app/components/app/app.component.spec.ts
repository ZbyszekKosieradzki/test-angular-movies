import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ContactComponent } from '../contact/contact.component';
import { MenuComponent } from '../menu/menu.component';
import { HomeComponent } from '../home/home.component';
import { UserMenuComponent } from '../user-menu/user-menu.component';
import { SearchFormComponent } from '../search-form/search-form.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        ContactComponent,
        MenuComponent,
        HomeComponent,
        UserMenuComponent,
        SearchFormComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


});
