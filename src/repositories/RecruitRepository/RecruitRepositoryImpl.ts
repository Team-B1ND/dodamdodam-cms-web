import { PostRecruitParam, RecruitRepository } from "./RecruitRepository";

class RecruitRepositoryImpl implements RecruitRepository {
  public async postRecruit(params: PostRecruitParam): Promise<void> {
    // await customAx
  }
}

export default new RecruitRepositoryImpl();
