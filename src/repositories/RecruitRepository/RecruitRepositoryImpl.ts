import { postRecruitParam, RecruitRepository } from "./RecruitRepository";

class RecruitRepositoryImpl implements RecruitRepository {
  public async postRecruit({
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
  }: postRecruitParam): Promise<void> {
    // await customAx
  }
}

export default new RecruitRepositoryImpl();
