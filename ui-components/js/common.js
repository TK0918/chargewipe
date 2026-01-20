// 通用工具函数

// 格式化日期
function formatDate(date, format = 'YYYY-MM-DD') {
  if (!date) return '';
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const seconds = String(d.getSeconds()).padStart(2, '0');
  
  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
}

// 格式化货币
function formatCurrency(amount, currency = 'USD') {
  if (amount === null || amount === undefined) return '-';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
}

// 格式化数字
function formatNumber(num, decimals = 0) {
  if (num === null || num === undefined) return '-';
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(num);
}

// 格式化百分比
function formatPercent(value, decimals = 1) {
  if (value === null || value === undefined) return '-';
  return `${value.toFixed(decimals)}%`;
}

// 显示提示消息
function showMessage(message, type = 'info') {
  // 这里可以集成 toast 通知库，暂时使用 alert
  // 后续可以替换为更优雅的通知组件
  const colors = {
    success: '#10b981',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6'
  };
  
  // 创建临时提示元素
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 12px 24px;
    background: ${colors[type] || colors.info};
    color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 9999;
    animation: slideIn 0.3s ease-out;
  `;
  toast.textContent = message;
  
  // 添加动画样式
  if (!document.getElementById('toast-styles')) {
    const style = document.createElement('style');
    style.id = 'toast-styles';
    style.textContent = `
      @keyframes slideIn {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideIn 0.3s ease-out reverse';
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 3000);
}

// 确认对话框
function confirmDialog(message, callback) {
  if (confirm(message)) {
    callback && callback();
  }
}

// 防抖函数
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// 节流函数
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// 获取 URL 参数
function getUrlParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// 设置 URL 参数
function setUrlParam(name, value) {
  const url = new URL(window.location.href);
  url.searchParams.set(name, value);
  window.history.pushState({}, '', url);
}

// 导出数据为 CSV
function exportToCSV(data, filename = 'export.csv') {
  if (!data || data.length === 0) {
    showMessage('没有数据可导出', 'warning');
    return;
  }
  
  const headers = Object.keys(data[0]);
  const csvContent = [
    headers.join(','),
    ...data.map(row => headers.map(header => {
      const value = row[header];
      return typeof value === 'string' && value.includes(',') 
        ? `"${value}"` 
        : value;
    }).join(','))
  ].join('\n');
  
  const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// 导出数据为 Excel (需要后端API支持)
function exportToExcel(params, filename = 'export.xlsx') {
  // 这里应该调用后端API导出Excel
  // params 包含筛选条件等参数
  showMessage('导出功能需要后端API支持', 'info');
  // 实际实现示例:
  // const queryString = new URLSearchParams(params).toString();
  // window.location.href = `/api/export?${queryString}&filename=${filename}`;
}

// 显示确认弹窗
function showConfirmModal(title, message, onConfirm, onCancel) {
  const modal = document.createElement('div');
  modal.className = 'confirm-modal';
  modal.innerHTML = `
    <div class="confirm-modal-content">
      <div class="confirm-modal-title">${title || '确认操作'}</div>
      <div class="confirm-modal-message">${message}</div>
      <div class="confirm-modal-actions">
        <button class="btn btn-default" data-action="cancel">取消</button>
        <button class="btn btn-primary" data-action="confirm">确认</button>
      </div>
    </div>
  `;
  
  const handleClick = (e) => {
    const action = e.target.getAttribute('data-action');
    if (action === 'confirm') {
      onConfirm && onConfirm();
      document.body.removeChild(modal);
    } else if (action === 'cancel') {
      onCancel && onCancel();
      document.body.removeChild(modal);
    }
  };
  
  modal.addEventListener('click', handleClick);
  document.body.appendChild(modal);
  
  return modal;
}

// 表格排序功能
function initTableSort(tableId) {
  const table = document.getElementById(tableId);
  if (!table) return;
  
  const headers = table.querySelectorAll('thead th.sortable');
  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const currentSort = header.classList.contains('sort-asc') ? 'asc' : 
                          header.classList.contains('sort-desc') ? 'desc' : null;
      
      // 清除所有排序状态
      headers.forEach(h => {
        h.classList.remove('sort-asc', 'sort-desc');
      });
      
      // 切换排序状态
      if (currentSort === 'asc') {
        header.classList.add('sort-desc');
        sortTable(table, index, 'desc');
      } else {
        header.classList.add('sort-asc');
        sortTable(table, index, 'asc');
      }
    });
  });
}

function sortTable(table, columnIndex, direction) {
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));
  
  rows.sort((a, b) => {
    const aValue = a.cells[columnIndex].textContent.trim();
    const bValue = b.cells[columnIndex].textContent.trim();
    
    // 尝试转换为数字
    const aNum = parseFloat(aValue.replace(/[^0-9.-]/g, ''));
    const bNum = parseFloat(bValue.replace(/[^0-9.-]/g, ''));
    
    if (!isNaN(aNum) && !isNaN(bNum)) {
      return direction === 'asc' ? aNum - bNum : bNum - aNum;
    }
    
    // 尝试转换为日期
    const aDate = new Date(aValue);
    const bDate = new Date(bValue);
    if (!isNaN(aDate.getTime()) && !isNaN(bDate.getTime())) {
      return direction === 'asc' ? aDate - bDate : bDate - aDate;
    }
    
    // 字符串比较
    return direction === 'asc' 
      ? aValue.localeCompare(bValue)
      : bValue.localeCompare(aValue);
  });
  
  rows.forEach(row => tbody.appendChild(row));
}

// 显示加载状态
function showLoading(container, text = '加载中...') {
  const loading = document.createElement('div');
  loading.className = 'loading-overlay';
  loading.innerHTML = `
    <div>
      <div class="loading-spinner"></div>
      <div class="loading-text">${text}</div>
    </div>
  `;
  
  if (typeof container === 'string') {
    container = document.getElementById(container);
  }
  
  if (container) {
    container.style.position = 'relative';
    container.appendChild(loading);
  }
  
  return loading;
}

// 隐藏加载状态
function hideLoading(loadingElement) {
  if (loadingElement && loadingElement.parentNode) {
    loadingElement.parentNode.removeChild(loadingElement);
  }
}

// 显示空状态
function showEmptyState(container, message = '暂无数据', icon = 'fas fa-inbox') {
  const emptyState = document.createElement('div');
  emptyState.className = 'empty-state';
  emptyState.innerHTML = `
    <div class="empty-state-icon">
      <i class="${icon}"></i>
    </div>
    <div class="empty-state-text">${message}</div>
  `;
  
  if (typeof container === 'string') {
    container = document.getElementById(container);
  }
  
  if (container) {
    container.appendChild(emptyState);
  }
  
  return emptyState;
}
