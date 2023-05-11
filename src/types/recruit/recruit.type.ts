export interface Recruit {
  readonly id: number;
  name: string;
  representative: string;
  registrationNumber: string;
  address: string;
  workerCount: number;
  recruitCount: number;
  recruitType: RecruitType;
  area: string;
  workDetails: string;
  recruitProcess: string;
  requiredDocument: string;
  salary: number;
  companyLink: string;
  militaryService: MilitaryServiceType;
}

export type RecruitType = "PERMANENT" | "CONTRACT" | "ETC";

export type MilitaryServiceType = "AVAILABLE" | "UNAVAILABLE" | "PROCESSING";
