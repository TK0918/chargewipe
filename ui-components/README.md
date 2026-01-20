# Chargewipe UI 组件库

基于 BestAds Admin UI 风格提取的统一 UI 组件库, 用于规范 Chargewipe 项目的 UI 风格。

## 📁 目录结构

```
ui-components/
├── css/
│   ├── base.css          # 基础样式 (字体、动画、状态标签等)
│   ├── sidebar.css       # 侧边栏样式
│   └── components.css    # 组件样式 (按钮、表格、表单等)
├── js/
│   ├── sidebar.js        # 侧边栏交互逻辑
│   └── common.js        # 通用工具函数
├── templates/
│   ├── sidebar.html      # 侧边栏模板
│   ├── header.html       # 顶部栏模板
│   └── layout.html       # 完整布局模板
└── README.md            # 使用说明
```

## 🚀 快速开始

### 1. 引入外部依赖

在 HTML 文件的 `<head>` 中添加:

```html
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Font Awesome 图标库 -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
```

### 2. 引入自定义样式

在 `<head>` 中添加:

```html
<link rel="stylesheet" href="ui-components/css/base.css">
<link rel="stylesheet" href="ui-components/css/sidebar.css">
<link rel="stylesheet" href="ui-components/css/components.css">
```

### 3. 引入 JavaScript

在 `</body>` 前添加:

```html
<script src="ui-components/js/sidebar.js"></script>
<script src="ui-components/js/common.js"></script>
```

### 4. 使用布局模板

参考 `templates/layout.html` 创建页面, 或直接复制侧边栏和顶部栏的 HTML 结构。

## 🎨 UI 风格特点

- **配色方案**: 蓝色到紫色的渐变主题 (`from-blue-600 to-purple-600`)
- **字体**: Inter 字体家族
- **布局**: 侧边栏 + 主内容区的经典后台布局
- **响应式**: 支持移动端和桌面端
- **交互**: 流畅的动画过渡效果
- **图标**: Font Awesome 6.4.0

## 📝 使用示例

### 侧边栏菜单项

```html
<li>
  <a href="dashboard.html" class="sidebar-item flex items-center px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100 hover:text-gray-900">
    <i class="fas fa-chart-bar w-5 h-5 mr-3 text-gray-400"></i>
    仪表盘
  </a>
</li>
```

### 按钮

```html
<button class="btn btn-primary">主要按钮</button>
<button class="btn btn-success">成功按钮</button>
<button class="btn btn-warning">警告按钮</button>
<button class="btn btn-danger">危险按钮</button>
<button class="btn btn-default">默认按钮</button>
```

### 卡片

```html
<div class="card">
  <div class="card-header">卡片标题</div>
  <div>卡片内容</div>
</div>
```

### 表格

#### 基础表格

```html
<div class="table-container">
  <table class="table">
    <thead>
      <tr>
        <th>列名1</th>
        <th>列名2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>数据1</td>
        <td>数据2</td>
      </tr>
    </tbody>
  </table>
</div>
```

#### 表格样式规范

- **表头样式**: 加粗 (`font-weight: 600`), 首字母大写, 不换行 (`white-space: nowrap`)
- **内容样式**: 正常字重 (`font-weight: 400`), 字号 `13px`
- **间距**: 单元格内边距 `16px 20px`
- **横向滚动**: 使用 `.table-container` 包裹表格, 内容超出时可横向滚动

#### 操作按钮

在表格的 Actions 列中使用带背景色的按钮:

```html
<div class="action-buttons">
  <a href="javascript:void(0)" class="action-btn action-btn-primary">View</a>
  <a href="javascript:void(0)" class="action-btn action-btn-secondary">Edit</a>
  <a href="javascript:void(0)" class="action-btn action-btn-danger">Delete</a>
</div>
```

**按钮类型**:
- `.action-btn-primary`: 橙色背景 (主要操作)
- `.action-btn-secondary`: 灰色背景 (次要操作)
- `.action-btn-danger`: 红色背景 (危险操作)

**特点**:
- 按钮不换行 (`white-space: nowrap`)
- 按钮组不换行 (`flex-wrap: nowrap`)
- 统一的间距和样式

### 分页组件

支持每页条数选择的分页组件:

```html
<div class="pagination">
  <div class="pagination-controls">
    <button>Previous</button>
    <button class="active">1</button>
    <button>2</button>
    <button>Next</button>
  </div>
  <div class="pagination-info">
    <span>共 100 条</span>
  </div>
  <div class="pagination-page-size">
    <span>每页</span>
    <select>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="30">30</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
    <span>条</span>
  </div>
</div>
```

**特点**:
- 默认每页10条, 可选20/30/50/100条
- 支持上一页/下一页和页码跳转
- 显示总数据条数
- 支持数值和时间类字段的表头排序

### 导出按钮

列表右上方的导出按钮:

```html
<div class="list-actions">
  <div class="list-actions-left">
    <!-- 左侧内容 -->
  </div>
  <div class="list-actions-right">
    <button class="export-button">
      <i class="fas fa-download"></i>导出Excel
    </button>
  </div>
</div>
```

**特点**:
- 导出当前筛选条件的所有数据
- 导出格式为Excel
- 位置在列表右上方

### 空状态

列表无数据时显示:

```html
<div class="empty-state">
  <div class="empty-state-icon">
    <i class="fas fa-inbox"></i>
  </div>
  <div class="empty-state-text">暂无数据</div>
</div>
```

### 加载状态

数据加载时显示:

```html
<div class="loading-overlay">
  <div>
    <div class="loading-spinner"></div>
    <div class="loading-text">加载中...</div>
  </div>
</div>
```

### 确认提示弹窗

操作确认提示:

```html
<div class="confirm-modal">
  <div class="confirm-modal-content">
    <div class="confirm-modal-title">确认操作</div>
    <div class="confirm-modal-message">确定要执行此操作吗？</div>
    <div class="confirm-modal-actions">
      <button class="btn btn-default">取消</button>
      <button class="btn btn-primary">确认</button>
    </div>
  </div>
</div>
```

### 工单状态标签

工单状态的颜色标识:

```html
<span class="status-badge status-pending-provider">待选择服务商</span>
<span class="status-badge status-pending-feedback">待服务商反馈</span>
<span class="status-badge status-pending-manual">待人工手动处理</span>
<span class="status-badge status-completed">完成</span>
<span class="status-badge status-failed">失败</span>
```

**状态颜色**:
- 待选择服务商: 黄色
- 待服务商反馈: 蓝色
- 待人工手动处理: 橙色
- 完成: 绿色
- 失败: 红色

### 表格排序

支持点击表头排序 (仅数值和时间类字段):

```html
<th class="sortable">交易时间</th>
<th class="sortable sort-asc">交易金额</th>
<th class="sortable sort-desc">扣费金额</th>
```

**特点**:
- 数值和时间类字段支持排序
- 文本类字段不支持排序
- 点击切换升序/降序

### 表单

```html
<div class="form-group">
  <label class="form-label">标签名称 <span class="required">*</span></label>
  <input type="text" class="form-input" placeholder="请输入">
</div>
```

### 统计卡片

```html
<div class="stats-card">
  <div class="title">总预警数</div>
  <div class="value">1,234</div>
  <div class="compare positive">↑ 12.5% 环比上期</div>
</div>
```

## 🔧 JavaScript API

### 侧边栏控制

```javascript
// 切换侧边栏 (移动端)
toggleSidebar();

// 切换菜单分组
toggleMenuSection('menuId');
```

### 工具函数

```javascript
// 格式化日期
formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss');

// 格式化货币
formatCurrency(1234.56, 'USD');

// 格式化数字
formatNumber(1234.56, 2);

// 格式化百分比
formatPercent(36.5, 1);

// 显示提示消息
showMessage('操作成功', 'success');

// 确认对话框
confirmDialog('确定要删除吗?', () => {
  // 确认后的操作
});

// 导出 CSV
exportToCSV(data, 'export.csv');
```

## 📱 响应式设计

- **桌面端** (≥1024px): 侧边栏固定显示
- **移动端** (<1024px): 侧边栏可折叠, 通过按钮或遮罩层控制

## 🎯 自定义配置

### 修改品牌名称和 Logo

在 `templates/sidebar.html` 中修改:

```html
<span class="ml-3 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
  你的应用名称
</span>
```

### 修改主题色

在 `css/base.css` 中修改渐变颜色:

```css
.sidebar-item::before {
  background: #your-color; /* 替换为你的颜色 */
}
```

## ✅ 检查清单

在使用前确保:

- [ ] 已引入 Tailwind CSS CDN
- [ ] 已引入 Font Awesome 图标库
- [ ] 已引入所有 CSS 文件
- [ ] 已引入所有 JavaScript 文件
- [ ] 侧边栏和顶部栏 HTML 结构完整
- [ ] JavaScript 事件监听器已正确绑定
- [ ] 响应式设计正常工作

## 📚 参考资源

- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Font Awesome 图标库](https://fontawesome.com/icons)
- [Inter 字体](https://fonts.google.com/specimen/Inter)
