export interface IBook {
  BookId: string;    // hoặc number tùy theo model của bạn
  BookName: string;
  Price: number;
  Image: string;     // <-- Thêm hoặc kiểm tra dòng này
}
export class Book{
  constructor(
    public BookId: string="",
    public BookName: string="",
    public Price: number=0,
    public Image: string="",
    public ImageBase64: string="" // <-- Thêm hoặc kiểm tra dòng này
  ) {}
}