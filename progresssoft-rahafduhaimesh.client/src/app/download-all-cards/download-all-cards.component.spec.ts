import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadAllCardsComponent } from './download-all-cards.component';

describe('DownloadAllCardsComponent', () => {
  let component: DownloadAllCardsComponent;
  let fixture: ComponentFixture<DownloadAllCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DownloadAllCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadAllCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
