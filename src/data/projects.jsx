const projects = [
  {
    title: "matchPoint",
    imageSrc: "/images/matchPoint-logo.svg",
    description: "一个智能匹配系统，帮助用户找到最适合的合作伙伴。基于AI算法的精准匹配，让协作更高效。",
    techStack: ["React", "Node.js", "MongoDB", "WebSocket"],
    demoVideoUrl: "/videos/matchPoint-demo.mp4",
    progressList: [
      { date: "2024-03-15", content: "完成实时匹配算法优化" },
      { date: "2024-03-10", content: "上线Beta测试版本" },
      { date: "2024-03-05", content: "完成核心功能开发" }
    ],
    commentsList: [
      { user: "User1", content: "非常实用的匹配系统！" },
      { user: "User2", content: "界面设计很友好" }
    ]
  },
  {
    title: "Artificial Emotion",
    imageSrc: "/images/Artificial Emotion-logo.svg",
    description: "使用深度学习技术进行情感分析和识别的创新项目。通过AI技术理解和分析人类情感。",
    techStack: ["Python", "TensorFlow", "React", "Flask"],
    demoVideoUrl: "/videos/emotion-demo.mp4",
    progressList: [
      { date: "2024-03-15", content: "完成情感识别模型训练" },
      { date: "2024-03-10", content: "数据集处理完成" },
      { date: "2024-03-05", content: "项目启动" }
    ],
    commentsList: [
      { user: "User3", content: "期待这个项目的发展" },
      { user: "User4", content: "很有创意的应用" }
    ]
  },
  {
    title: "Puzzle Resume",
    imageSrc: "/images/PuzzleResume-logo.svg",
    description: "革新简历制作体验的智能平台。通过模块化设计，让求职者更容易展现自己的优势。",
    techStack: ["Vue.js", "Django", "PostgreSQL", "AWS"],
    demoVideoUrl: "/videos/puzzle-demo.mp4",
    progressList: [
      { date: "2024-03-20", content: "发布1.0正式版" },
      { date: "2024-03-12", content: "完成AI简历分析功能" },
      { date: "2024-03-01", content: "完成简历模板系统" }
    ],
    commentsList: [
      { user: "User5", content: "终于找到一个好用的简历工具！" },
      { user: "User6", content: "AI分析功能很强大" }
    ]
  },
  {
    title: "InstaMove",
    imageSrc: "/images/InstaMove-logo.svg",
    description: "智能搬家服务平台，整合搬家公司资源，提供一站式搬家解决方案。",
    techStack: ["React Native", "Firebase", "Google Maps API", "Node.js"],
    demoVideoUrl: "/videos/instamove-demo.mp4",
    progressList: [
      { date: "2024-03-18", content: "上线实时追踪功能" },
      { date: "2024-03-08", content: "完成支付系统集成" },
      { date: "2024-03-01", content: "发布移动端APP" }
    ],
    commentsList: [
      { user: "User7", content: "搬家变得如此简单！" },
      { user: "User8", content: "价格透明，服务很好" }
    ]
  },
  {
    title: "CoApply",
    imageSrc: "/images/CoApply-logo.svg",
    description: "留学申请协作平台，帮助学生和顾问更好地完成申请流程。",
    techStack: ["Next.js", "Prisma", "MySQL", "Azure"],
    demoVideoUrl: "/videos/coapply-demo.mp4",
    progressList: [
      { date: "2024-03-16", content: "推出多人协作功能" },
      { date: "2024-03-09", content: "完成文书修改系统" },
      { date: "2024-03-02", content: "上线院校数据库" }
    ],
    commentsList: [
      { user: "User9", content: "申请流程变得清晰多了" },
      { user: "User10", content: "和顾问沟通更方便了" }
    ]
  },
  {
    title: "Antoy",
    imageSrc: "/images/Antoy-logo.svg",
    description: "基于区块链的二手玩具交易平台，让闲置玩具流转更有价值。",
    techStack: ["Solidity", "React", "IPFS", "Ethereum"],
    demoVideoUrl: "/videos/antoy-demo.mp4",
    progressList: [
      { date: "2024-03-17", content: "完成智能合约审计" },
      { date: "2024-03-11", content: "上线NFT认证系统" },
      { date: "2024-03-03", content: "完成区块链集成" }
    ],
    commentsList: [
      { user: "User11", content: "玩具交易更安全了" },
      { user: "User12", content: "NFT认证很创新" }
    ]
  }
];

export default projects;