import { useEffect, useState } from "react";
import { Notice } from "../../types/notice/notice.type";

const TEST: Notice[] = [
  {
    idx: 1,
    title: "가정통신문1",
    content: "sadadasdada",
    create_at: "2022-09-26",
    status: "ACTIVE",
  },
  {
    idx: 2,
    title: "가정통신문2",
    content: "sadadasdada",
    create_at: "2022-09-26",
    status: "ACTIVE",
  },
  {
    idx: 3,
    title: "가정통신문3",
    content: "sadadasdada",
    create_at: "2022-09-26",
    status: "PENDING",
  },
  {
    idx: 4,
    title: "가정통신문4",
    content: "sadadasdada",
    create_at: "2022-09-26",
    status: "PENDING",
  },
  {
    idx: 5,
    title: "가정통신문5",
    content: "sadadasdada",
    create_at: "2022-09-26",
    status: "ACTIVE",
  },
  {
    idx: 6,
    title: "가정통신문6",
    content: "sadadasdada",
    create_at: "2022-09-26",
    status: "ACTIVE",
  },
  {
    idx: 7,
    title: "가정통신문7",
    content: "sadadasdada",
    create_at: "2022-09-26",
    status: "ACTIVE",
  },
  {
    idx: 8,
    title: "가정통신문8",
    content: "sadadasdada",
    create_at: "2022-09-26",
    status: "ACTIVE",
  },
  {
    idx: 9,
    title: "가정통신문9",
    content: "sadadasdada",
    create_at: "2022-09-26",
    status: "ACTIVE",
  },
  {
    idx: 10,
    title: "가정통신문10",
    content: "sadadasdada",
    create_at: "2022-09-26",
    status: "ACTIVE",
  },
  {
    idx: 11,
    title: "가정통신문11",
    content: "sadadasdada",
    create_at: "2022-09-26",
    status: "ACTIVE",
  },
];

const useNoticeList = () => {
  const [activeNotices, setActiveNotices] = useState<Notice[]>([]);
  const [pendingNotices, setPendingNotices] = useState<Notice[]>([]);

  useEffect(() => {
    setActiveNotices(TEST.filter((notice) => notice.status === "ACTIVE"));
    setPendingNotices(TEST.filter((notice) => notice.status === "PENDING"));
  }, []);

  return {
    activeNotices,
    pendingNotices,
  };
};

export default useNoticeList;
