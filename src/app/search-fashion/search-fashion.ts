import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Thêm dòng này
import { FormsModule } from '@angular/forms';   // <-- Thêm dòng này

export interface FashionItem {
  id: string;
  style: string;
  fashion_subject: string;
  fashion_detail: string;
  image: string;
  similarityScore?: number;
}
@Component({
  selector: 'app-search-fashion',
  standalone: true,                            // <-- Để true
  imports: [CommonModule, FormsModule],        // <-- Thêm dòng này
  templateUrl: './search-fashion.html',
  styleUrls: ['./search-fashion.css']
})
export class SearchFashionComponent {
  // Dữ liệu mẫu (mock data)
  fashions: FashionItem[] = [
    {
      id: 'F01',
      style: 'Casual',
      fashion_subject: 'Summer Vintage Floral Dress',
      fashion_detail: 'Short sleeve cotton floral dress lightweight and comfortable',
      image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=150'
    },
    {
      id: 'F02',
      style: 'Formal',
      fashion_subject: 'Classic Slim Fit Blazer',
      fashion_detail: 'Black wool blend formal blazer suit jacket for business',
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=150'
    },
    {
      id: 'F03',
      style: 'Streetwear',
      fashion_subject: 'Oversized Streetwear Graphic Hoodie',
      fashion_detail: 'Heavyweight cotton black hoodie with vintage street print',
      image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=150'
    },
    {
      id: 'F04',
      style: 'Casual',
      fashion_subject: 'Denim Jacket Classic Blue',
      fashion_detail: 'Vintage washed cotton denim outerwear jacket with buttons',
      image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=150'
    },
    {
      id: 'F05',
      style: 'Sportswear',
      fashion_subject: 'Breathable Running Athletic T-Shirt',
      fashion_detail: 'Quick-dry sports lightweight gym activewear running shirt',
      image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=150'
    }
  ];

  // Các trường tìm kiếm
  searchQuery: string = '';
  searchField: 'fashion_subject' | 'fashion_detail' = 'fashion_subject';
  similarityMetric: 'cosine' | 'jaccard' = 'cosine';
  resultLimit: number = 5;

  results: FashionItem[] = [];
  hasSearched: boolean = false;

  // Tách từ đơn giản và chuẩn hóa chữ thường
  private tokenize(text: string): string[] {
    return text.toLowerCase().match(/\b\w+\b/g) || [];
  }

  // Thuật toán Jaccard Similarity
  private calculateJaccard(str1: string, str2: string): number {
    const setA = new Set(this.tokenize(str1));
    const setB = new Set(this.tokenize(str2));

    if (setA.size === 0 || setB.size === 0) return 0;

    let intersectionCount = 0;
    setA.forEach(word => {
      if (setB.has(word)) intersectionCount++;
    });

    const unionCount = new Set([...setA, ...setB]).size;
    return unionCount === 0 ? 0 : intersectionCount / unionCount;
  }

  // Thuật toán Cosine Similarity
  private calculateCosine(str1: string, str2: string): number {
    const tokensA = this.tokenize(str1);
    const tokensB = this.tokenize(str2);

    if (tokensA.length === 0 || tokensB.length === 0) return 0;

    const freqA: Record<string, number> = {};
    const freqB: Record<string, number> = {};

    tokensA.forEach(w => freqA[w] = (freqA[w] || 0) + 1);
    tokensB.forEach(w => freqB[w] = (freqB[w] || 0) + 1);

    const allWords = new Set([...Object.keys(freqA), ...Object.keys(freqB)]);

    let dotProduct = 0;
    let magA = 0;
    let magB = 0;

    allWords.forEach(w => {
      const a = freqA[w] || 0;
      const b = freqB[w] || 0;
      dotProduct += a * b;
      magA += a * a;
      magB += b * b;
    });

    const magnitude = Math.sqrt(magA) * Math.sqrt(magB);
    return magnitude === 0 ? 0 : dotProduct / magnitude;
  }

  onSearch() {
    this.hasSearched = true;
    if (!this.searchQuery.trim()) {
      this.results = [];
      return;
    }

    // Tính điểm tương đồng cho từng sản phẩm
    const scored = this.fashions.map(item => {
      const targetText = item[this.searchField];
      const score = this.similarityMetric === 'cosine'
        ? this.calculateCosine(this.searchQuery, targetText)
        : this.calculateJaccard(this.searchQuery, targetText);

      return {
        ...item,
        similarityScore: Number(score.toFixed(4))
      };
    });

    // Sắp xếp giảm dần theo Similarity
    scored.sort((a, b) => (b.similarityScore || 0) - (a.similarityScore || 0));

    // Cắt theo giới hạn kết quả (Limit)
    this.results = scored.slice(0, this.resultLimit);
  }

  // Trả về class CSS theo mức điểm tương đồng
  getRowClass(score: number | undefined): string {
    if (score === undefined) return '';
    if (score >= 0.75) return 'score-high';     // [0.75 - 1]: nền vàng, chữ đỏ
    if (score >= 0.5) return 'score-medium';   // [0.5 - 0.75): nền hồng, chữ xanh
    return 'score-low';                        // < 0.5: nền đỏ, chữ trắng
  }
}