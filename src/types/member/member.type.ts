export interface Member {
  email: string;
  id: string;
  readonly joinDate: string;
  name: string;
  profileImage: null | string;
  readonly role: MemberRole;
  readonly status: "ACTIVE" | "DEACTIVATED";
}

export type MemberRole = "STUDENT" | "TEACHER" | "ADMIN";

export interface Teacher {
  readonly id: number;
  member: Member;
  phone: string;
  position: string;
  tel: string;
}
