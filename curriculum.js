const COURSE = {
  "phases": [
    {
      "id": "foundation",
      "number": "01",
      "title": "基础复核与银级工具",
      "hours": 10,
      "subtitle": "快速校准，再进入金组专题",
      "gate": "能独立实现前缀和、差分、二分与双指针，并主动检查边界。"
    },
    {
      "id": "dp",
      "number": "02",
      "title": "动态规划专题",
      "hours": 12.5,
      "subtitle": "从状态定义到多类DP模型",
      "gate": "能够解释状态、转移和计算顺序，并完成一题新变式。"
    },
    {
      "id": "graphs",
      "number": "03",
      "title": "图论与最短路",
      "hours": 10,
      "subtitle": "连通性、路径与生成树",
      "gate": "能按边权及图结构选择算法，并说明正确性和复杂度。"
    },
    {
      "id": "structures",
      "number": "04",
      "title": "数据结构与区间查询",
      "hours": 10,
      "subtitle": "维护有序信息与动态区间",
      "gate": "能独立使用有序容器、单调结构、树状数组和基础线段树。"
    },
    {
      "id": "trees",
      "number": "05",
      "title": "树上算法",
      "hours": 7.5,
      "subtitle": "从子树到换根与公共祖先",
      "gate": "能建立子树状态，并解释Euler序、换根与LCA的用途。"
    },
    {
      "id": "math",
      "number": "06",
      "title": "数学、字符串与扩展方法",
      "hours": 10,
      "subtitle": "补全计数与优化工具",
      "gate": "能说明方法前提，区分精确算法、概率哈希与单峰优化。"
    },
    {
      "id": "review",
      "number": "07",
      "title": "综合训练与阶段复盘",
      "hours": 5,
      "subtitle": "通过实战发现仍需练习的部分",
      "gate": "提交独立完成记录、错题重写和下一轮练习清单。"
    }
  ],
  "lessons": [
    {
      "phase": "foundation",
      "title": "STL、复杂度与代码自测",
      "topics": "vector；sort；迭代器；long long；对拍；CLion断点",
      "activity": "复现并修复试听中的漏端点、溢出和循环错误",
      "homework": "数组与容器练习；配对计数复写",
      "evidence": "能独立运行、调试，并说明时间和空间复杂度",
      "id": 1,
      "hours": 2.5
    },
    {
      "phase": "foundation",
      "title": "前缀和、差分与离散化",
      "topics": "一维与二维前缀；差分；坐标压缩；区间长度",
      "activity": "统一闭区间和半开区间约定",
      "homework": "区间求和；覆盖统计变式",
      "evidence": "能解释前缀含义，压缩后保留真实长度",
      "id": 2,
      "hours": 2.5
    },
    {
      "phase": "foundation",
      "title": "排序贪心、双指针与窗口",
      "topics": "交换论证；相向计数；同向窗口；非负前提",
      "activity": "比较配对计数与最少分组，推导移动依据",
      "homework": "Ferris Wheel；最短达标段",
      "evidence": "能给正确性理由、重复值测试及负数反例",
      "id": 3,
      "hours": 2.5
    },
    {
      "phase": "foundation",
      "title": "二分答案、位运算与基础验收",
      "topics": "lower_bound；单调check；掩码；函数图入门",
      "activity": "独立构造check并验证边界，复核图与递归基础",
      "homework": "二分答案；子集表示练习",
      "evidence": "能证明单调性，读写位掩码；不足处后续加练",
      "id": 4,
      "hours": 2.5
    },
    {
      "phase": "dp",
      "title": "DP状态、记忆化与网格路径",
      "topics": "最值与计数；记忆化；网格路径；不可达状态",
      "activity": "从暴力递归定义状态，改为递推",
      "homework": "最少硬币；带障碍网格路径",
      "evidence": "明确状态语义、初值和转移顺序",
      "id": 5,
      "hours": 2.5
    },
    {
      "phase": "dp",
      "title": "0/1背包与完全背包",
      "topics": "容量状态；选或不选；循环方向；方案计数",
      "activity": "比较每件一次和无限次的转移",
      "homework": "0/1选物；无限硬币变式",
      "evidence": "解释滚动数组的遍历方向及去重方式",
      "id": 6,
      "hours": 2.5
    },
    {
      "phase": "dp",
      "title": "LIS与区间DP",
      "topics": "LIS的二次与二分算法；区间长度枚举；分割点",
      "activity": "先写清两种状态，再处理依赖顺序",
      "homework": "最长上升子序列；区间合并",
      "evidence": "能解释LIS维护量及区间DP的依赖关系",
      "id": 7,
      "hours": 2.5
    },
    {
      "phase": "dp",
      "title": "状态压缩DP",
      "topics": "子集掩码；集合与末位状态；子集枚举；复杂度",
      "activity": "用小集合逐项追踪转移",
      "homework": "任务分配；访问集合路径",
      "evidence": "能估算2^N或3^N开销并处理起始状态",
      "id": 8,
      "hours": 2.5
    },
    {
      "phase": "dp",
      "title": "数位DP与DP验收",
      "topics": "数位位置；tight；前导零；范围拆分；记忆化",
      "activity": "从小范围暴力建立计数对照",
      "homework": "受限数位计数；DP错题变式",
      "evidence": "能解释上界限制、前导零及F(R)-F(L-1)",
      "id": 9,
      "hours": 2.5
    },
    {
      "phase": "graphs",
      "title": "DFS、BFS与拓扑排序",
      "topics": "邻接表；Flood Fill；无权最短路；入度；DAG",
      "activity": "用相同图比较遍历、最短路与依赖顺序",
      "homework": "Counting Rooms；拓扑序与DAG路径",
      "evidence": "能区别访问状态，判断环和无权前提",
      "id": 10,
      "hours": 2.5
    },
    {
      "phase": "graphs",
      "title": "并查集与最小生成树",
      "topics": "路径压缩；按大小合并；Kruskal；Prim；割性质",
      "activity": "先合并连通块，再构建最小生成树",
      "homework": "动态连通；最小连通成本",
      "evidence": "区分生成树和最短路，能说明贪心选边依据",
      "id": 11,
      "hours": 2.5
    },
    {
      "phase": "graphs",
      "title": "Dijkstra与带权最短路",
      "topics": "松弛；优先队列；过期状态；非负前提；64位距离",
      "activity": "对照BFS并实现堆优化最短路",
      "homework": "Shortest Routes I；重边与大边权测试",
      "evidence": "能正确处理过期状态和不可达点",
      "id": 12,
      "hours": 2.5
    },
    {
      "phase": "graphs",
      "title": "Bellman-Ford、Floyd与图论验收",
      "topics": "负边；负环；多源最短路；状态图；算法选择",
      "activity": "按规模和边权选择算法，练习路径建模",
      "homework": "负边最短路；小规模全源路径",
      "evidence": "能区分单源与全源，并给出正确复杂度",
      "id": 13,
      "hours": 2.5
    },
    {
      "phase": "structures",
      "title": "有序集合、自定义比较与映射",
      "topics": "set/multiset；前驱后继；自定义比较器；map/unordered_map",
      "activity": "按操作需求选容器，处理重复值与删除",
      "homework": "动态最值；有序集合查询",
      "evidence": "比较器满足严格弱序，知道哈希表最坏情况",
      "id": 14,
      "hours": 2.5
    },
    {
      "phase": "structures",
      "title": "单调栈、单调队列与滑动窗口",
      "topics": "栈；最近更小元素；摊还分析；deque；窗口最值",
      "activity": "逐项追踪入栈出栈与窗口失效",
      "homework": "最近更小值；滑动窗口最小值",
      "evidence": "能说明每元素进出至多一次，处理重复值",
      "id": 15,
      "hours": 2.5
    },
    {
      "phase": "structures",
      "title": "树状数组与动态区间和",
      "topics": "lowbit；单点修改；前缀查询；逆序对；顺序统计入门",
      "activity": "比较静态前缀和与动态维护",
      "homework": "动态区间求和；逆序对",
      "evidence": "能独立写更新查询，说明1-based下标与O(log N)",
      "id": 16,
      "hours": 2.5
    },
    {
      "phase": "structures",
      "title": "线段树与区间信息合并",
      "topics": "单点更新；区间查询；合并性质；顺序统计；懒标记初识",
      "activity": "从区间树结构实现和/最值查询",
      "homework": "区间最值；第k个元素变式",
      "evidence": "能说明节点含义与区间边界；懒标记以示范为主",
      "id": 17,
      "hours": 2.5
    },
    {
      "phase": "trees",
      "title": "树遍历、Euler序与子树查询",
      "topics": "父子关系；深度；子树大小；入出时间；展平",
      "activity": "把子树转成连续区间并结合树状数组",
      "homework": "子树求和；Euler序验证",
      "evidence": "能解释子树区间，处理链状树与递归栈",
      "id": 18,
      "hours": 2.5
    },
    {
      "phase": "trees",
      "title": "树形DP与换根DP",
      "topics": "子树状态；父子合并；两遍遍历；换根贡献",
      "activity": "从固定根答案推广到所有根",
      "homework": "树上独立集；所有点距离和",
      "evidence": "能说明换根时移出与移入的贡献",
      "id": 19,
      "hours": 2.5
    },
    {
      "phase": "trees",
      "title": "LCA与树上路径",
      "topics": "倍增；Euler遍历与RMQ；公共祖先；树上距离",
      "activity": "比较倍增和Euler-RMQ两条求LCA路线",
      "homework": "最近公共祖先；树上距离查询",
      "evidence": "能解释预处理与查询成本，处理祖先节点特例",
      "id": 20,
      "hours": 2.5
    },
    {
      "phase": "math",
      "title": "整除、模运算与快速幂",
      "topics": "gcd/lcm；素因子；筛法；模运算；快速幂；逆元条件",
      "activity": "从数学分析落实到整数范围和取模实现",
      "homework": "因子计数；模幂与逆元",
      "evidence": "知道模除法前提，防止中间乘积溢出",
      "id": 21,
      "hours": 2.5
    },
    {
      "phase": "math",
      "title": "组合计数与容斥",
      "topics": "排列组合；加乘原理；阶乘逆元；容斥；计数建模",
      "activity": "利用棋盘计数基础说明不重不漏",
      "homework": "受限组合；容斥计数变式",
      "evidence": "能解释计数对象、去重与模数条件",
      "id": 22,
      "hours": 2.5
    },
    {
      "phase": "math",
      "title": "字符串哈希与哈希映射",
      "topics": "多项式哈希；前缀提取；双哈希；碰撞；映射",
      "activity": "从子串比较构造哈希并用直接比较核对",
      "homework": "子串相等；重复片段查找",
      "evidence": "能区分概率可靠性与绝对正确性",
      "id": 23,
      "hours": 2.5
    },
    {
      "phase": "math",
      "title": "折半搜索与单峰优化",
      "topics": "Meet in the Middle；子集和；排序合并；三分；单峰前提",
      "activity": "把指数枚举拆成两半，再对比单峰函数搜索",
      "homework": "子集和统计；单峰最值",
      "evidence": "能估计2^(N/2)开销，并先验证单峰再搜索",
      "id": 24,
      "hours": 2.5
    },
    {
      "phase": "review",
      "title": "金组综合限时训练",
      "topics": "混合模型；选题；部分分；独立编码；自测",
      "activity": "120分钟独立训练+30分钟即时复盘",
      "homework": "未完成题补做；记录提示与耗时",
      "evidence": "按独立完成过程记录，不用熟题表现替代验收",
      "id": 25,
      "hours": 2.5
    },
    {
      "phase": "review",
      "title": "错题重写与后续进度调整",
      "topics": "专题覆盖清单；迁移变式；正确性口述；练习优先级",
      "activity": "空白重写关键错题并制定后续练习",
      "homework": "个人模板；四周巩固清单",
      "evidence": "逐项标注已掌握/需练习/未测，决定延长或补课",
      "id": 26,
      "hours": 2.5
    }
  ],
  "coverage": [
    {
      "topic": "Divisibility / 整除",
      "lessons": [
        21
      ]
    },
    {
      "topic": "Modular Arithmetic / 模运算",
      "lessons": [
        21
      ]
    },
    {
      "topic": "Combinatorics / 组合计数",
      "lessons": [
        22
      ]
    },
    {
      "topic": "Introduction to DP",
      "lessons": [
        5
      ]
    },
    {
      "topic": "Knapsack DP",
      "lessons": [
        6
      ]
    },
    {
      "topic": "Paths on Grids",
      "lessons": [
        5
      ]
    },
    {
      "topic": "Longest Increasing Subsequence",
      "lessons": [
        7
      ]
    },
    {
      "topic": "Bitmask DP",
      "lessons": [
        8
      ]
    },
    {
      "topic": "Range DP",
      "lessons": [
        7
      ]
    },
    {
      "topic": "Digit DP",
      "lessons": [
        9
      ]
    },
    {
      "topic": "Unweighted Shortest Paths",
      "lessons": [
        10
      ]
    },
    {
      "topic": "Disjoint Set Union",
      "lessons": [
        11
      ]
    },
    {
      "topic": "Topological Sort",
      "lessons": [
        10
      ]
    },
    {
      "topic": "Weighted Shortest Paths",
      "lessons": [
        12,
        13
      ]
    },
    {
      "topic": "Minimum Spanning Trees",
      "lessons": [
        11
      ]
    },
    {
      "topic": "More Operations on Sorted Sets",
      "lessons": [
        14
      ]
    },
    {
      "topic": "Custom Comparators for Sets（选修主题）",
      "lessons": [
        14
      ]
    },
    {
      "topic": "Stacks",
      "lessons": [
        15
      ]
    },
    {
      "topic": "Sliding Window",
      "lessons": [
        3,
        15
      ]
    },
    {
      "topic": "Point Update Range Sum / 顺序统计",
      "lessons": [
        16,
        17
      ]
    },
    {
      "topic": "DP on Trees",
      "lessons": [
        19
      ]
    },
    {
      "topic": "Rerooting / All Roots",
      "lessons": [
        19
      ]
    },
    {
      "topic": "Euler Tour（选修主题）",
      "lessons": [
        18
      ]
    },
    {
      "topic": "LCA with Euler Tour（选修主题）",
      "lessons": [
        20
      ]
    },
    {
      "topic": "Unimodal Functions",
      "lessons": [
        24
      ]
    },
    {
      "topic": "Hashing",
      "lessons": [
        23
      ]
    },
    {
      "topic": "Hashmaps（选修主题）",
      "lessons": [
        14,
        23
      ]
    },
    {
      "topic": "Meet in the Middle（选修主题）",
      "lessons": [
        24
      ]
    },
    {
      "topic": "Additional Gold Practice",
      "lessons": [
        25,
        26
      ]
    }
  ],
  "version": 2
};
