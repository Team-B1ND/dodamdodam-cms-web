export interface Notice {
  idx: number;
  title: string;
  content: string;
  create_at: string;
  status: "ACTIVE" | "PENDING";
}

export interface NoticeWrite {
  title: string;
  content: string;
}