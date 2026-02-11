const state = {
    content: null,
    currentPath: null
};

// DOM Elements
const navMenu = document.getElementById('nav-menu');
const contentViewer = document.getElementById('content-viewer');
const breadcrumbs = document.getElementById('breadcrumbs');
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');

// Init
async function init() {
    try {
        const response = await fetch('content.json');
        state.content = await response.json();
        renderSidebar(state.content);
        handleHashChange(); // Handle initial load
    } catch (error) {
        console.error('Failed to load content index:', error);
        contentViewer.innerHTML = '<p class="error">Failed to load content. Please check content.json.</p>';
    }
}

// Render Sidebar
function renderSidebar(content) {
    navMenu.innerHTML = '';

    // Top-level categories
    Object.keys(content).forEach(category => {
        const section = document.createElement('div');
        section.className = 'nav-section';

        const title = document.createElement('div');
        title.className = 'nav-section-title';
        title.textContent = category.replace(/-/g, ' ');
        section.appendChild(title);

        const itemsContainer = document.createElement('div');
        renderTree(content[category], itemsContainer);
        section.appendChild(itemsContainer);

        navMenu.appendChild(section);
    });
}

function renderTree(node, container) {
    Object.keys(node).sort().forEach(key => {
        const item = node[key];

        if (item.path && item.title) {
            // It's a file
            const link = document.createElement('a');
            link.className = 'nav-item';
            link.textContent = item.title;
            // Store the path in the hash
            link.href = `#/${item.path}`;
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('open');
                }
            });
            container.appendChild(link);
        } else {
            // It's a folder
            const folderContainer = document.createElement('div');

            const folderTitle = document.createElement('div');
            folderTitle.className = 'folder-title';
            folderTitle.textContent = key.replace(/-/g, ' ');

            const folderContent = document.createElement('div');
            folderContent.className = 'nav-folder';

            folderTitle.addEventListener('click', () => {
                folderTitle.classList.toggle('open');
                folderContent.classList.toggle('open');
            });

            // Recurse
            renderTree(item, folderContent);

            // Only append if folder has content
            if (folderContent.hasChildNodes()) {
                folderContainer.appendChild(folderTitle);
                folderContainer.appendChild(folderContent);
                container.appendChild(folderContainer);
            }
        }
    });
}

// Routing
window.addEventListener('hashchange', handleHashChange);

async function handleHashChange() {
    const hash = window.location.hash.slice(1); // Remove #
    if (!hash || hash === '/') {
        showWelcome();
        return;
    }

    // Path comes in as /dsa/algorithms/sorting.md
    const filePath = hash.startsWith('/') ? hash.slice(1) : hash;
    await loadContent(filePath);
}

async function loadContent(filePath) {
    try {
        contentViewer.classList.add('loading');
        const response = await fetch(filePath);
        if (!response.ok) throw new Error('File not found');

        const markdown = await response.text();
        renderMarkdown(markdown, filePath);
        updateActiveLink(filePath);
        updateBreadcrumbs(filePath);
    } catch (error) {
        contentViewer.innerHTML = `<p class="error">Error loading file: ${error.message}</p>`;
    } finally {
        contentViewer.classList.remove('loading');
    }
}

function renderMarkdown(markdown, filePath) {
    // Configure marked
    marked.setOptions({
        highlight: function (code, lang) {
            const language = hljs.getLanguage(lang) ? lang : 'plaintext';
            return hljs.highlight(code, { language }).value;
        },
        langPrefix: 'hljs language-'
    });

    const html = marked.parse(markdown);
    contentViewer.innerHTML = html;

    // Re-run highlighting for safety (sometimes marked hook isn't enough for simple blocks)
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block);
    });
}

function showWelcome() {
    contentViewer.innerHTML = `
        <div class="welcome-screen">
            <h2>Welcome to Frontend Hour</h2>
            <p>Select a topic from the sidebar to start learning.</p>
        </div>
    `;
    breadcrumbs.textContent = 'Home';
}

function updateActiveLink(filePath) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#/${filePath}`) {
            item.classList.add('active');

            // Expand parents
            let parent = item.parentElement;
            while (parent && !parent.classList.contains('nav-menu')) {
                if (parent.classList.contains('nav-folder')) {
                    parent.classList.add('open');
                    if (parent.previousElementSibling) {
                        parent.previousElementSibling.classList.add('open');
                    }
                }
                parent = parent.parentElement;
            }
        }
    });
}

function updateBreadcrumbs(filePath) {
    const parts = filePath.split('/');
    // Remove filename extension for display
    parts[parts.length - 1] = parts[parts.length - 1].replace('.md', '');
    breadcrumbs.textContent = parts.map(p => p.replace(/-/g, ' ')).join(' › ');
}

// Mobile Toggle
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

// Run
init();
