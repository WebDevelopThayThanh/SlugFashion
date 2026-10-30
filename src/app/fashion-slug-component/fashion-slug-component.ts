import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fashion } from '../classes/Fashion';
import { FashionAPIService } from '../services/fashion-apiservice';
import { createSlug, extractIdFromSlug, getIdentityType } from '../classes/SlugHelper';

@Component({
  selector: 'app-fashion-slug-component',
  standalone: false,
  templateUrl: './fashion-slug-component.html',
  styleUrl: './fashion-slug-component.css'
})
export class FashionSlugComponent implements OnInit {
  fashion = signal<Fashion | undefined>(undefined);
  loading = signal(true);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: FashionAPIService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const identity = params.get('slug')!;
      this.loading.set(true);
      this.api.getFashions().subscribe({
        next: (list: Fashion[]) => {
          const found = this.resolve(list, identity);
          this.fashion.set(found);
          this.loading.set(false);
          if (!found) this.router.navigate(['/not-found']);
        },
        error: () => this.loading.set(false)
      });
    });
  }

  private resolve(list: Fashion[], identity: string): Fashion | undefined {
    switch (getIdentityType(identity)) {
      case 'ID':
        return list.find(f => f.IdF === Number(identity));
      case 'SLUG_WITH_ID': {
        const idf = extractIdFromSlug(identity);
        return list.find(f => f.IdF === idf);
      }
      default:
        return list.find(f =>
          createSlug(f.fashion_subject, f.IdF).replace(/-p\d+$/, '') === identity);
    }
  }
}