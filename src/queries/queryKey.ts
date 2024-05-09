export const QUERY_KEYS = Object.freeze({
  member: {
    getMyMember: "member/getMyMember",
  },
  recruit: {
    getRecruitList: (page: number, size: number) => ["recruit", page, size],
    getRecruit: (id: number) => ["/recruit", id],
  },
});
