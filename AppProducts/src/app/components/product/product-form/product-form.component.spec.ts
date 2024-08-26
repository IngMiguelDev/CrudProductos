import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { ProductFormComponent } from './product-form.component';

describe('ProductFormComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [
        ProductFormComponent
    
      ],
      providers: [
        MessageService,          
        ConfirmationService,    
      ]
    }).compileComponents();
  });

  
});
