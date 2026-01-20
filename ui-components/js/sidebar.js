// 菜单分组折叠/展开
function toggleMenuSection(id) {
  const ul = document.getElementById(id);
  const arrow = document.getElementById(id + 'Arrow');
  if (!ul || !arrow) return;
  
  if (ul.style.display === 'none') {
    ul.style.display = '';
    arrow.classList.remove('fa-chevron-right');
    arrow.classList.add('fa-chevron-down');
  } else {
    ul.style.display = 'none';
    arrow.classList.remove('fa-chevron-down');
    arrow.classList.add('fa-chevron-right');
  }
}

// 侧边栏切换（移动端）
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  
  if (!sidebar || !overlay) return;
  
  if (sidebar.classList.contains('mobile-menu-closed')) {
    sidebar.classList.remove('mobile-menu-closed');
    sidebar.classList.add('mobile-menu-open');
    overlay.classList.remove('hidden');
    overlay.classList.remove('opacity-0');
    overlay.classList.add('opacity-50');
  } else {
    sidebar.classList.remove('mobile-menu-open');
    sidebar.classList.add('mobile-menu-closed');
    overlay.classList.add('opacity-0');
    overlay.classList.remove('opacity-50');
    setTimeout(() => {
      overlay.classList.add('hidden');
    }, 300);
  }
}

// 初始化侧边栏功能
document.addEventListener('DOMContentLoaded', function() {
  // 点击遮罩层关闭侧边栏
  const overlay = document.getElementById('sidebar-overlay');
  if (overlay) {
    overlay.addEventListener('click', function() {
      toggleSidebar();
    });
  }

  // 菜单项切换高亮
  document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', function(e) {
      if (this.getAttribute('href') === '#') {
        e.preventDefault();
      }
      document.querySelectorAll('.sidebar-item').forEach(menu => menu.classList.remove('active'));
      this.classList.add('active');
      
      // 移动端点击菜单项后自动关闭侧边栏
      if (window.innerWidth < 1024) {
        setTimeout(() => {
          toggleSidebar();
        }, 300);
      }
    });
  });

  // 响应式处理
  window.addEventListener('resize', function() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    
    if (!sidebar || !overlay) return;
    
    if (window.innerWidth >= 1024) {
      sidebar.classList.remove('mobile-menu-closed');
      sidebar.classList.add('mobile-menu-open');
      overlay.classList.add('hidden');
      overlay.classList.add('opacity-0');
      overlay.classList.remove('opacity-50');
    } else {
      // 移动端默认关闭侧边栏
      if (!sidebar.classList.contains('mobile-menu-open')) {
        sidebar.classList.add('mobile-menu-closed');
      }
    }
  });
  
  // 初始化移动端状态
  if (window.innerWidth < 1024) {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.classList.add('mobile-menu-closed');
    }
  }
});
