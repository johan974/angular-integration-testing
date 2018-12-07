import { TestBed, ComponentFixture} from "@angular/core/testing";
import { VoterComponent } from './voter.component';
import { By} from "@angular/platform-browser";

describe('VoterComponent', () => {
  let component: VoterComponent;
  // wrapper class die je extra toegang geeft tot utils rondom je component
  let fixture: ComponentFixture<VoterComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    });
    fixture = TestBed.createComponent( VoterComponent);
    component = fixture.componentInstance;
    // root html for component: fixture.nativeElement
    // debug html: wrapper (for querying root html) root comp element HTML
  });

  it('should render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    // Tell Angular to update for changes -- normally done by Angular itself!!
    fixture.detectChanges();

    let de = fixture.debugElement.query( By.css( '.vote-count'))
    // stel je had een custom directive: fixture.debugElement.query( By.directive( VoterDirective))
    let el : HTMLElement = de.nativeElement;

    expect( el.innerText).toContain( '21');
  });

  it('on upvote an HTLM element should be high lighted', () => {
    component.myVote = 1;
    fixture.detectChanges();

    let de = fixture.debugElement.query( By.css( '.glyphicon-menu-up'))
    // stel je had een custom directive: fixture.debugElement.query( By.directive( VoterDirective))

    expect( de.classes['highlighted']).toBeTruthy();
  });

  it('on click on vote up button the totalvotes should be increased', () => {
    component.othersVote = 20;
    let button = fixture.debugElement.query( By.css( '.glyphicon-menu-up'));
    button.triggerEventHandler( 'click', null); // just click, no additional data
    fixture.detectChanges();

    expect( component.totalVotes()).toBe( 21);
  });
});
