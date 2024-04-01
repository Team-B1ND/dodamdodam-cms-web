export const QUERY_KEYS = Object.freeze({
  member: {
    getMyMember: "member/getMyMember",
  },
  recruit: {
    getRecruits: (page: number) => ["recruit", page],
    getRecruit: (id: number) => ["recruit/getRecruit", id],
  },
});
