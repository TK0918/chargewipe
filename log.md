# 修改日志

## 2025-01-XX - 在所有预警邮件模板中增加争议金额字段

### 修改内容
- 更新了所有3个预警邮件模板文件：
  - **ethoca_alert.html**: 在Alert Details部分增加了Dispute Amount（争议金额）字段
  - **rdr_alert.html**: 在Alert Details部分增加了Dispute Amount（争议金额）字段
  - **cdrn_alert.html**: 在Alert Details部分增加了Dispute Amount（争议金额）字段
- Dispute Amount字段使用加粗样式显示，使用占位符（[Dispute Amount]）便于后续替换

## 2025-01-XX - 更新RDR预警邮件模板

### 修改内容
- 更新了**rdr_alert.html**文件：
  - 在Alert Details部分增加了CAID和BIN两个参数
  - CAID和BIN字段同样使用加粗样式显示
  - 使用占位符（[CAID]、[BIN]）便于后续替换

## 2025-01-XX - 创建拒付预警邮件模板

### 修改内容
- 创建了email文件夹，用于存放邮件模板文件
- 创建了3个拒付预警通知邮件模板：
  - **ethoca_alert.html**: ETHOCA预警通知模板
    - 包含Descriptor和拒付预警ID信息（加粗显示）
    - 询问客户是否需要退款操作
    - 提供系统链接用于提交退款信息
  - **rdr_alert.html**: RDR预警通知模板
    - 包含Descriptor、拒付预警ID、CAID、BIN信息（加粗显示）
    - 仅用于通知客户，无需操作
  - **cdrn_alert.html**: CDRN预警通知模板
    - 包含Descriptor和拒付预警ID信息（加粗显示）
    - 仅用于通知客户，无需操作
- 所有邮件模板特点：
  - 正式的邮件格式（包含header、body、footer）
  - 全英文内容
  - 关键内容（Descriptor、拒付预警ID、系统链接等）加粗显示
  - 响应式设计，适配邮件客户端
  - 使用占位符（[Descriptor]、[Chargeback Alert ID]、[System Link]、[CAID]、[BIN]）便于后续替换

## 2025-01-XX - 文档内容整理

### 修改内容
- 创建了文档内容整理总结，分析了4个PRD文档的核心目标
- 创建了系统页面清单文档，详细列出了运营端和客户端的所有页面及其作用
- 创建了系统原型HTML页面：
  - 运营端（admin文件夹）：登录页、数据看板、客户管理（列表、新增、详情）、服务商管理（列表）、预警明细（列表）
  - 客户端（client文件夹）：登录页、忘记密码页、授权管理（列表、新增）、预警列表、钱包管理
  - 创建了共享的CSS样式文件（common.css），分别适配运营端和客户端的UI风格
- 重构为单页应用模式：
  - 运营端5个HTML文件：login.html、dashboard.html、customers.html（包含所有子页面）、providers.html（包含所有子页面）、alerts.html（包含所有子页面）
  - 客户端4个HTML文件：login.html、authorizations.html（包含所有子页面）、alerts.html（包含所有子页面）、wallet.html（包含所有子页面）
  - 每个主模块HTML文件内通过JavaScript实现子页面切换，所有子页面都可以正常跳转

