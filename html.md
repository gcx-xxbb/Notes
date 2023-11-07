## HTML是什么
HyperType Markup Language 超文本标记语言

### 语法
1. 标签和属性不区分大小写，推荐小写
2. 空标签可以不闭合，比如 input、meta
3. 属性值推荐使用双引号包裹
4. 某些属性值可以省略，比如 required、readonly

### 标签
- 标题 h1~h6
- 列表
   - ol 有序列表 li 
   - ul 无序列表 li
   - dl 定义列表 dt 表示标题 dd 表示值
- 链接 a
- 多媒体 
   - img 图片
   - audio 音频
   - video 视频
- 输入 input textarea select datalist
- 文本标签 
   - blockquote 块级引用 cite属性表0示文字引用的地址
   - cite 短引用 一般表示文章名或章节名
   - q 短引用 一般表示具体的某段话
   - code 代码引用
   - strong 加粗
   - em 斜体
- 内容标签
   - header 页头
   - main 正文
   - aside 与正文相关
   - footer 页脚

### 语义化
1. HTML中的元素、属性及属性值都拥有某些含义
2. 开发者应该遵循语义来编写HTML
   - 有序列表用ol，无序列表用ul
   - lang属性表示内容所使用的语言 

### 语义化的好处
- 代码可读性
- 可维护性
- 搜索引擎优化
- 提升无障碍性