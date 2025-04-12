// DOM이 완전히 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 스크롤 이벤트 처리
    window.addEventListener('scroll', function() {
        // 헤더 스타일 변경
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = '#fff';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
        
        // 스크롤 애니메이션
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                section.classList.add('active');
            }
        });
    });
    
    // 부드러운 스크롤 이동
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetPosition = document.querySelector(targetId).offsetTop;
            
            window.scrollTo({
                top: targetPosition - 70,
                behavior: 'smooth'
            });
        });
    });
    
    // 연도 자동 업데이트
    const yearSpan = document.querySelector('#current-year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
    
    // 타이핑 효과 (히어로 섹션)
    const typingElement = document.querySelector('.hero-content h1 .highlight');
    const originalText = typingElement.textContent;
    typingElement.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            typingElement.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        }
    }
    
    // 페이지 로드 시 타이핑 효과 시작
    setTimeout(typeWriter, 1000);
    
    // 스킬 카드 애니메이션
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // 모바일 메뉴 토글 기능
    const mobileMenuBtn = document.createElement('div');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('header .container').appendChild(mobileMenuBtn);
    
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    const mobileMenuContent = document.createElement('ul');
    document.querySelectorAll('nav ul li').forEach(item => {
        mobileMenuContent.appendChild(item.cloneNode(true));
    });
    mobileMenu.appendChild(mobileMenuContent);
    document.body.appendChild(mobileMenu);
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
    
    // 모바일 메뉴 링크 클릭 처리
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
    
    // 프로젝트 카드 호버 효과
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}); 