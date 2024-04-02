export const QUERY_KEYS = Object.freeze({
  member: {
    getMyMember: "member/getMyMember",
  },
  recruit: {
    getRecruitList: (page: number) => ["recruit", page],
    getRecruit: (id: number) => ["/recruit", id],
  },
});
