import { Recruit } from "../../types/recruit/recruit.type";

export interface RecruitRepository {
  postRecruit({
    name,
    representative,
    registrationNumber,
    address,
    workerCount,
    recruitCount,
    recruitType,
    area,
    workDetails,
    recruitProcess,
    requiredDocument,
    salary,
    companyLink,
    militaryService,
  }: postRecruitParam): Promise<void>;
}

export interface postRecruitParam extends Omit<Recruit, "Omit"> {}
