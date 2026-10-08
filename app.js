// 构式 (SHIT) - 学术期刊网站交互逻辑

// ============ 论文数据 ============
const papers = [
    {
        id: 1,
        title: '基于语料库的"把"字句构式网络研究：用法与能产性的历时考察',
        authors: '刘振聪, 王明远',
        date: '2026-07-18',
        tag: '语料库',
        keywords: ['把字句', '构式网络', '能产性', '历时语料库'],
        vol: '4(4)',
        pages: '1-18',
        doi: '10.2097/SHIT.2026.04.001',
        abstract: '本文基于大规模历时语料库，考察"把"字句构式家族的网络结构与历时演变，运用多元步进制（multiple distinctive collexeme）分析构式节点的能产性差异。研究发现，处置义原型构式的能产性呈显著下降趋势，而位移义与结果义构式持续扩展，为构式网络动态观提供了新的证据。',
        link: '#'
    },
    {
        id: 2,
        title: '构式竞争与语言演化：英语双及物构式的计量比较研究',
        authors: 'Goldberg · E., 李博文',
        date: '2026-07-02',
        tag: '语法理论',
        keywords: ['构式竞争', '双及物构式', '语言演化', '贝叶斯模型'],
        vol: '4(4)',
        pages: '19-36',
        doi: '10.2097/SHIT.2026.04.002',
        abstract: '本文运用贝叶斯语言进化模型（Bayesian phylogenetic modeling）比较英语双及物构式与介词构式的竞争关系，探讨构式竞争如何驱动语言系统的适应性与演化。研究揭示了频率效应与语义功能压力在构式选择中的交互作用。',
        link: '#'
    },
    {
        id: 3,
        title: '儿童构式习得中的输入-产出交互：一项追踪研究',
        authors: '陈思齐, H. Diessel',
        date: '2026-06-21',
        tag: '习得研究',
        keywords: ['构式习得', '输入频率', '疑问构式', '纵向追踪'],
        vol: '4(3)',
        pages: '37-55',
        doi: '10.2097/SHIT.2026.04.003',
        abstract: '本研究对24名汉语儿童进行18个月的纵向追踪，分析其疑问构式的习得轨迹。基于隐式统计学习理论，考察输入频率、构式语境与产出错误之间的关系，提出"渐次嵌入"的构式习得模型。',
        link: '#'
    },
    {
        id: 4,
        title: '构式语法的计算实现：基于Transformer的构式识别与解析',
        authors: '赵启航, 李睿',
        date: '2026-06-08',
        tag: '认知演化',
        keywords: ['计算构式语法', 'Transformer', '构式标注', '分布语义'],
        vol: '4(3)',
        pages: '56-74',
        doi: '10.2097/SHIT.2026.04.004',
        abstract: '本文将构式语法与深度学习方法结合，提出基于预训练语言模型的构式识别框架（ConstructionTagger），在汉语构式标注语料上达到 0.89 的 F1 值，并探讨了分布语义与构式意义之间的对应关系。',
        link: '#'
    },
    {
        id: 5,
        title: '"非常"类程度副词构式的语用化：兼论构式化与构式演变',
        authors: '沈家煊, 吴桐',
        date: '2026-05-26',
        tag: '语法理论',
        keywords: ['程度副词', '语用化', '构式化', '语法化'],
        vol: '4(2)',
        pages: '75-92',
        doi: '10.2097/SHIT.2026.04.005',
        abstract: '本文以"非常"类程度副词构式为对象，考察其由程度限定到主观评价的语用化路径，提出构式化与构式演变的层级模型，为汉语语法化研究提供构式视角的分析框架。',
        link: '#'
    },
    {
        id: 6,
        title: '多语视角下的构式类型学：基于 30 种语言的样本研究',
        authors: 'W. Croft, 林一苇',
        date: '2026-05-12',
        tag: '认知演化',
        keywords: ['构式类型学', '致使构式', '语言样本', '形态句法'],
        vol: '4(2)',
        pages: '93-112',
        doi: '10.2097/SHIT.2026.04.006',
        abstract: '基于30种语言的类型学样本，本文考察致使构式的形态句法编码策略，揭示构式多样性与语言普遍倾向之间的张力，为构式类型学的建立提供系统证据。',
        link: '#'
    }
];

// ============ 元素引用 ============
const header = document.getElementById('siteHeader');
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

// ============ 渲染论文列表 ============
function renderPapers(filter = 'all') {
    const list = document.getElementById('papersList');
    const tagMap = { '语法理论': 'grammar', '语料库': 'corpus', '习得研究': 'acquisition', '认知演化': 'cognitive' };

    list.innerHTML = papers.map(p => `
        <article class="paper-card" data-id="${p.id}" data-category="${tagMap[p.tag] || 'other'}">
            <div class="paper-meta">
                <span class="paper-tag">${p.tag}</span>
                <span class="paper-date">${p.date}</span>
            </div>
            <h3 class="paper-title" data-id="${p.id}">${p.title}</h3>
            <p class="paper-authors"><strong>${p.authors}</strong></p>
            <p class="paper-abstract">${p.abstract}</p>
            <div class="paper-links">
                <a href="${p.link}" class="paper-detail">📄 查看全文</a>
                <a href="#" class="paper-cite">📝 引用本文</a>
            </div>
        </article>
    `).join('');

    // 应用筛选
    if (filter !== 'all') {
        list.querySelectorAll('.paper-card').forEach(card => {
            card.classList.toggle('hide', card.dataset.category !== filter);
        });
    }

    // 绑定事件：标题与"查看全文"打开详情弹窗
    list.querySelectorAll('.paper-title, .paper-detail').forEach(el => {
        el.addEventListener('click', (e) => {
            if (el.classList.contains('paper-detail')) e.preventDefault();
            const card = el.closest('.paper-card');
            openPaperDetail(parseInt(card.dataset.id));
        });
    });

    // 绑定引用按钮
    list.querySelectorAll('.paper-cite').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const card = btn.closest('.paper-card');
            copyCitation(parseInt(card.dataset.id));
        });
    });
}

// ============ 生成引用格式 ============
function buildCitation(p) {
    return `${p.authors}. 《${p.title}》[J]. 构式(SHIT), 2026, ${p.vol}: ${p.pages}. DOI: ${p.doi}.`;
}

function copyCitation(id) {
    const p = papers.find(x => x.id === id);
    if (!p) return;
    const citation = buildCitation(p);
    navigator.clipboard?.writeText(citation)
        .then(() => showToast('引用格式已复制到剪贴板'))
        .catch(() => showToast(citation));
}

// ============ 筛选按钮 ============
function bindFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderPapers(btn.dataset.filter);
        });
    });
}

// ============ Toast 提示 ============
function showToast(message) {
    const old = document.querySelector('.toast');
    if (old) old.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed; bottom: 30px; left: 50%;
        transform: translateX(-50%);
        background: rgba(22,24,29,0.92); color: #fff;
        padding: 0.7rem 1.4rem; border-radius: 8px;
        z-index: 2000; font-size: 0.9rem;
        animation: toastIn 0.3s ease;
        box-shadow: 0 8px 24px rgba(0,0,0,0.3);
    `;
    const style = document.createElement('style');
    style.textContent = `@keyframes toastIn { from { opacity:0; transform: translate(-50%, 12px);} to { opacity:1; transform: translate(-50%, 0);} }`;
    document.head.appendChild(style);
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.transition = 'opacity 0.3s';
        toast.style.opacity = '0';
        setTimeout(() => { toast.remove(); style.remove(); }, 300);
    }, 2200);
}

// ============ 导航滚动效果 ============
function handleScroll() {
    header.classList.toggle('scrolled', window.scrollY > 40);
    document.getElementById('backTop').classList.toggle('show', window.scrollY > 600);

    // 高亮当前区块
    const sections = ['home', 'about', 'papers', 'issues', 'submit', 'team'];
    let current = 'home';
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
}

// ============ 移动端菜单 ============
function bindMenu() {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('open');
        mainNav.classList.toggle('open');
    });

    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('open');
            mainNav.classList.remove('open');
        });
    });
}

// ============ 返回顶部 ============
function createBackTop() {
    const btn = document.createElement('button');
    btn.id = 'backTop';
    btn.className = 'back-top';
    btn.innerHTML = '↑';
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    document.body.appendChild(btn);
}

// ============ 滚动入场动画 ============
function bindReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.submit-step, .team-card, .issue-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ============ 论文详情弹窗 ============
function openPaperDetail(id) {
    const p = papers.find(x => x.id === id);
    if (!p) return;

    const body = document.getElementById('paperModalBody');
    body.innerHTML = `
        <div class="detail-head">
            <span class="paper-tag">${p.tag}</span>
            <h2>${p.title}</h2>
            <p class="detail-authors"><strong>${p.authors}</strong></p>
            <p class="detail-meta">出版日期：${p.date} · 卷期：${p.vol} · 页码：${p.pages} · DOI：${p.doi}</p>
        </div>
        <div class="detail-section">
            <h4>摘要 ABSTRACT</h4>
            <p>${p.abstract}</p>
        </div>
        <div class="detail-section">
            <h4>关键词 KEYWORDS</h4>
            <div class="keyword-tags">
                ${p.keywords.map(k => `<span>${k}</span>`).join('')}
            </div>
        </div>
        <div class="detail-actions">
            <a href="pdfs/paper-${p.id}.pdf" target="_blank" download="SHIT-2026-${p.vol.replace('/','')}-paper-${p.id}.pdf" class="btn btn-primary">📄 下载全文 (PDF)</a>
            <button class="btn btn-outline" id="detailCiteBtn">📝 复制引用</button>
        </div>
    `;

    document.getElementById('detailCiteBtn').addEventListener('click', () => copyCitation(id));
    showModal('paperModal');
}

// ============ 投稿表单 ============
function openSubmitModal() {
    document.getElementById('submitForm').reset();
    document.getElementById('formError').classList.remove('show');
    showModal('submitModal');
}

function showModal(id) {
    document.getEmentById(id).classList.add('show');
    document.body.style.overflow = 'hidden';
}

function hideModal(id) {
    document.getElementById(id).classList.remove('show');
    document.body.style.overflow = '';
}

function validateEmail(email) {
    return /^[\\S@]s@[\\s]+\\.[\\s]+$/.test(email);
}

function handleSubmit(e) {
    e.preventDefault();
    const errorBox = document.getElementById('formError');
    const name = document.getElementById('fName').value.trim();
    const email = document.getElementById('fEmail').value.trim();
    const title = document.getElementById('fTitle').value.trim();
    const abstract = document.getElementById('fAbstract').value.trim();
    const agree = document.getElementById('fAgree').checked;

    let error = '';
    if (!name) error = '请填写您的姓名';
    else if (!email) error = '请填写您的邮箱';
    else if (!validateEmail(email)) error = '邮箱格式不正确，请检查后重试';
    else if (!title) error = '请填写论文标题';
    else if (!abstract) error = '请填写论文摘要';
    else if (!agree) error = '请确认论文为原创且未一稿多投';

    if (error) {
        errorBox.textContent = '⚠️ ' + error;
        errorBox.classList.add('show');
        return;
    }

    errorBox.classList.remove('show');
    const submitBtn = e.target.querySelector('.form-submit');
    submitBtn.disabled = true;
    submitBtn.textContent = '提交中...';

    // 模拟提交
    setTimeout(() => {
        hideModal('submitModal');
        document.body.style.overflow = '';
        submitBtn.disabled = false;
        submitBtn.textContent = '提交稿件';
        showToast('✅ 投稿成功！编辑部将在 3 个工作日内与您联系');
    }, 1200);
}

// ============ 弹窗事件绑定 ============
function bindModals() {
    // 打开投稿表单
    document.getElementById('openSubmitBtn').addEventListener('click', openSubmitModal);
    document.getElementById('openSubmitBtn2').addEventListener('click', openSubmitModal);

    // 关闭论文详情
    document.getElementById('paperModalClose').addEventListener('click', () => hideModal('paperModal'));
    document.getElementById('paperModal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) hideModal('paperModal');
    });

    // 关闭投稿表单
    document.getEmentById('submitModalClose').addEventListener('click', () => hideModal('submitModal');
    document.getElementById('submitModal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) hideModal('submitModal');
    });

    // 表单提交
    document.getElementById('submitForm').addEventListener('submit', handleSubmit);

    // ESC 关闭
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideModal('paperModal');
            hideModal('submitModal');
        }
    });
}

// ============ 初始化 ============
document.addEventListener('DOMContentLoaded', () => {
    renderPapers();
    bindFilters();
    bindMenu();
    bindModals();
    createBackTop();
    bindReveal();
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
});
